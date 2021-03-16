// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const path = require('path');

const createPagePath = require('../createPagePath');

module.exports = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const query = await graphql(
    `
      {
        site {
          siteMetadata {
            defaultLocale
            localePaths {
              en_GB
              fi
            }
            simpleLocales {
              en_GB
              fi
            }
          }
        }
        basicPages: allContentfulPage(
          filter: { slug: { regex: "/^(?!hallinto|management).*$/" } }
        ) {
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
        managementPages: allContentfulPage(filter: { slug: { regex: "/^hallinto|management$/" } }) {
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

  const { defaultLocale, localePaths, simpleLocales } = query.data.site.siteMetadata;

  // Create the basic pages from Contentful.

  query.data.basicPages.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageId, node_locale: locale, slug } = node;

    reporter.verbose(`The creating page for the base slug '${slug}'`);

    const pagePath = createPagePath(node, locale, defaultLocale, localePaths, reporter);

    reporter.verbose(`The path created is ${pagePath}`);

    const pageOpts = {
      path: pagePath,
      component: path.resolve('src', 'templates', 'page.jsx'),
      context: {
        locale,
        pageId,
        simpleLocale: simpleLocales[locale.replace('-', '_')],
      },
    };

    createPage(pageOpts);
  });

  // Create the management page from Contentful.

  query.data.managementPages.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageId, node_locale: locale, slug } = node;

    reporter.verbose(`The creating page for the base slug '${slug}'`);

    const pagePath = locale === defaultLocale ? `/${slug}` : `/${localePaths[locale.replace('-', '_')]}/${slug}`;

    reporter.verbose(`The path created is ${pagePath}`);

    const pageOpts = {
      path: pagePath,
      component: path.resolve('src', 'templates', 'management.jsx'),
      context: {
        locale,
        pageId,
        simpleLocale: simpleLocales[locale.replace('-', '_')],
        momentJsLocale: locale.toLowerCase(),
      },
    };

    createPage(pageOpts);
  });
};
