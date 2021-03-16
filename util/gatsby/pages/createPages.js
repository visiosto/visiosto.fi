// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const path = require('path');

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
        allContentfulPage(filter: { slug: { regex: "/^(?!hallinto|management).*$/" } }) {
          edges {
            node {
              contentful_id
              node_locale
              slug
              parentPath {
                slug
                parentPath {
                  slug
                }
              }
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

  const pageTemplate = path.resolve('src', 'templates', 'page.jsx');

  query.data.allContentfulPage.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id, node_locale, parentPath, slug } = node;

    reporter.verbose(`The Contentful slug for the page is ${slug}`);

    // eslint-disable-next-line camelcase
    const locale = node_locale === 'en-GB' ? 'en' : node_locale;

    reporter.verbose(`The Moment.js locale to ${node_locale.toLowerCase()}`);

    const pagePath = (() => {
      if (parentPath) {
        if (parentPath.parentPath) {
          return locale === defaultLocale
            ? `/${parentPath.parentPath.slug}/${parentPath.slug}/${slug}`
            : `/${locale}/${parentPath.parentPath.slug}/${parentPath.slug}/${slug}`;
        }

        return locale === defaultLocale
          ? `/${parentPath.slug}/${slug}`
          : `/${locale}/${parentPath.slug}/${slug}`;
      }

      return locale === defaultLocale ? `/${slug}` : `/${locale}/${slug}`;
    })();

    reporter.verbose(`The path for the page created from Contentful data is ${pagePath}`);

    const pageOpts = {
      path: pagePath,
      component: pageTemplate,
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
