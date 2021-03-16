// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const createAuthorPages = require('./pages/createAuthorPages');
const createBlogPages = require('./pages/createBlogPages');
const createCategoryPages = require('./pages/createCategoryPages');
const createPages = require('./pages/createPages');
const createRootPages = require('./pages/createRootPages');

// module.exports = async ({ actions, graphql, reporter }) => {
//   await createRootPages(actions, graphql, reporter);
//   await createPages(actions, graphql, reporter);
//   await createBlogPages(actions, graphql, reporter);
//   await createAuthorPages(actions, graphql, reporter);
//   await createCategoryPages(actions, graphql, reporter);
// };

module.exports = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const query = await graphql(
    `
      {
        site {
          siteMetadata {
            defaultLocale
            localePaths
            simpleLocales
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
              parents {
                slug
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

  const { defaultLocale, localePaths, simpleLocales } = query.data.site.siteMetadata;

  const basicPageTemplate = path.resolve('src', 'templates', 'page.jsx');

  query.data.basicPages.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageId, node_locale: locale, parents, slug } = node;

    reporter.verbose(`The creating page for the base slug '${slug}'`);

    const pagePath = (() => {
      if (parents) {
        return `${parents
          .map(({ slug: parentSlug }) => parentSlug)
          .reduce(
            (previous, current) => `${previous}/${current}`,
            localePaths[locale],
          )}/${slug}`;
      }
      return locale === defaultLocale ? `/${slug}` : `/${localePaths[locale]}/${slug}`;
    })();

    reporter.verbose(`The path created is ${pagePath}`);

    const pageOpts = {
      path: pagePath,
      component: basicPageTemplate,
      context: {
        locale,
        pageId,
        simpleLocale: simpleLocales[locale],
      },
    };

    createPage(pageOpts);
  });
};
