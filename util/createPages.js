// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const path = require('path');

const createPagePath = require('./createPagePath');

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
        blogPaths: allContentfulPath(filter: { contentful_id: { eq: "2zOhJf5PQ1SzUJhT37Cnb2" } }) {
          edges {
            node {
              node_locale
              slug
            }
          }
        }
        blogPosts: allContentfulBlogPost(sort: { fields: date, order: DESC }) {
          edges {
            node {
              contentful_id
              node_locale
              slug
            }
          }
        }
        categoryPaths: allContentfulPath(
          filter: { contentful_id: { eq: "54IoCQAEBdBmvFfVtUeegI" } }
        ) {
          edges {
            node {
              node_locale
              slug
              parentPath {
                slug
              }
            }
          }
        }
        categories: allContentfulCategory {
          edges {
            node {
              contentful_id
              node_locale
              slug
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

  const { defaultLocale, localePaths } = query.data.site.siteMetadata;

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
      },
    };

    createPage(pageOpts);
  });

  // Create the blog post pages from Contentful.

  const { blogPaths } = query.data;

  query.data.blogPosts.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageId, node_locale: locale, slug } = node;

    reporter.verbose(`The creating page for the base slug '${slug}'`);

    const blogSlug = blogPaths.edges.filter(({ node }) => {
      return node.node_locale === locale;
    })[0].node.slug;

    const pagePath =
      locale === defaultLocale
        ? `/${blogSlug}/${slug}`
        : `/${localePaths[locale.replace('-', '_')]}/${blogSlug}/${slug}`;

    reporter.verbose(`The path created is ${pagePath}`);

    const pageOpts = {
      path: pagePath,
      component: path.resolve('src', 'templates', 'blog-post.jsx'),
      context: {
        locale,
        pageId,
        momentJsLocale: locale.toLowerCase(),
      },
    };

    createPage(pageOpts);
  });

  // Create the category pages from Contentful.

  const { categoryPaths } = query.data;

  query.data.categories.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageId, node_locale: locale, slug } = node;

    reporter.verbose(`The creating page for the base slug '${slug}'`);

    const categorySlug = categoryPaths.edges.filter(({ node }) => node.node_locale === locale)[0]
      .node;

    const pagePath = `${createPagePath(categorySlug, locale, defaultLocale, localePaths)}/${slug}`;

    reporter.verbose(`The path created is ${pagePath}`);

    const pageOpts = {
      path: pagePath,
      component: path.resolve('src', 'templates', 'category.jsx'),
      context: {
        locale,
        pageId,
        momentJsLocale: locale.toLowerCase(),
      },
    };

    createPage(pageOpts);
  });

  // Create the management page from Contentful.

  query.data.managementPages.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageId, node_locale: locale, slug } = node;

    reporter.verbose(`The creating page for the base slug '${slug}'`);

    const pagePath =
      locale === defaultLocale ? `/${slug}` : `/${localePaths[locale.replace('-', '_')]}/${slug}`;

    reporter.verbose(`The path created is ${pagePath}`);

    const pageOpts = {
      path: pagePath,
      component: path.resolve('src', 'templates', 'management.jsx'),
      context: {
        locale,
        pageId,
        momentJsLocale: locale.toLowerCase(),
      },
    };

    createPage(pageOpts);
  });
};
