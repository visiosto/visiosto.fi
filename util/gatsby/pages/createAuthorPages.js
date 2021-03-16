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
        allContentfulAuthor {
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

  const authorTemplate = path.resolve('src', 'templates', 'author.jsx');

  query.data.allContentfulAuthor.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id, node_locale, slug } = node;

    reporter.verbose(`The Contentful slug for the author page is ${slug}`);

    // eslint-disable-next-line camelcase
    const locale = node_locale === 'en-GB' ? 'en' : node_locale;

    reporter.verbose(`The Moment.js locale to ${node_locale.toLowerCase()}`);

    // prettier-ignore
    const authorPath = locale === defaultLocale
      ? `${pageSlugs.author[locale]}`
      : `${locale}/${pageSlugs.author[locale]}`;

    const pageOpts = {
      path: `/${authorPath}/${slug}`,
      component: authorTemplate,
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
