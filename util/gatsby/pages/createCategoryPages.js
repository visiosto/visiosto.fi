// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const path = require('path');

const pageSlugs = require('../../../src/data/page-slugs.json');

module.exports = async (actions, graphql, reporter) => {
  const { createPage } = actions;

  const query = await graphql(
    `
      {
        site {
          siteMetadata {
            defaultLocale
          }
        }
        allContentfulCategory {
          edges {
            node {
              contentful_id
              node_locale
              slug
            }
          }
        }
      }
    `,
  );

  if (query.errors) {
    reporter.panicOnBuild('Error while running GraphQL query');
    return;
  }

  const { defaultLocale } = query.data.site.siteMetadata;

  const categoryTemplate = path.resolve('src', 'templates', 'category.jsx');

  query.data.allContentfulCategory.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id, node_locale, slug } = node;

    reporter.verbose(`The Contentful slug for the category page is ${slug}`);

    // eslint-disable-next-line camelcase
    const locale = node_locale === 'en-GB' ? 'en' : node_locale;

    reporter.verbose(`The Moment.js locale to ${node_locale.toLowerCase()}`);

    // prettier-ignore
    const categoryPath = locale === defaultLocale
      ? `${pageSlugs.category[locale]}`
      : `${locale}/${pageSlugs.category[locale]}`;

    const pageOpts = {
      path: `/${categoryPath}/${slug}`,
      component: categoryTemplate,
      context: {
        lang: locale,
        locale: node_locale,
        nodeLocale: node_locale,
        jsLocale: node_locale,
        momentJsLocale: node_locale.toLowerCase(),
        key: contentful_id,
      },
    };

    createPage(pageOpts);
  });
};
