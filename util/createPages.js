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
        authors: allContentfulAuthor {
          edges {
            node {
              contentful_id
              node_locale
              slug
            }
          }
        }
        authorPaths: allContentfulPath(
          filter: { contentful_id: { eq: "4uEZ43he1uPiXUzzZUuedS" } }
        ) {
          edges {
            node {
              contentful_id
              node_locale
              slug
            }
          }
        }
        basicPages: allContentfulPage(
          filter: { slug: { regex: "/^(?!hallinto|management|hinnasto|pricing).*$/" } }
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
              contentful_id
              node_locale
              slug
            }
          }
        }
        blogPosts: allContentfulBlogPost(sort: { fields: date, order: DESC }) {
          edges {
            node {
              contentful_id
              management
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
              contentful_id
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
        indexPages: allContentfulIndexPage(
          filter: { contentful_id: { eq: "rXFgpak6HKjCuUXjFo9KW" } }
        ) {
          edges {
            node {
              contentful_id
              node_locale
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
        pricingPages: allContentfulPage(filter: { slug: { regex: "/^hinnasto|pricing$/" } }) {
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

  // Create the author pages from Contentful.

  const { authorPaths } = query.data;

  query.data.authors.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageId, node_locale: locale, slug } = node;

    reporter.verbose(`Creating page for the base slug '${slug}'`);

    const authorSlug = authorPaths.edges.filter(({ node: pathNode }) => {
      return pathNode.node_locale === locale;
    })[0].node.slug;

    const pagePath =
      locale === defaultLocale
        ? `/${authorSlug}/${slug}`
        : `/${localePaths[locale.replace('-', '_')]}/${authorSlug}/${slug}`;

    reporter.verbose(`The path created is ${pagePath}`);

    const pageOpts = {
      path: pagePath,
      component: path.resolve('src', 'templates', 'author.jsx'),
      context: {
        locale,
        pageId,
        momentJsLocale: locale.toLowerCase(),
      },
    };

    createPage(pageOpts);
  });

  // Create the authors page from Contentful.

  authorPaths.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageId, node_locale: locale, slug } = node;

    reporter.verbose(`Creating the author page for ID '${pageId}'`);

    const pagePath =
      locale === defaultLocale ? `/${slug}` : `/${localePaths[locale.replace('-', '_')]}/${slug}`;

    reporter.verbose(`The path created for ${pageId} is ${pagePath}`);

    const pageOpts = {
      path: pagePath,
      component: path.resolve('src', 'templates', 'authors.jsx'),
      context: {
        locale,
        pageId,
        momentJsLocale: locale.toLowerCase(),
      },
    };

    createPage(pageOpts);
  });

  // Create the basic pages from Contentful.

  query.data.basicPages.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageId, node_locale: locale, slug } = node;

    reporter.verbose(`Creating page for the base slug '${slug}'`);

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
    const { contentful_id: pageId, node_locale: locale, slug, management } = node;

    reporter.verbose(`Creating page for the base slug '${slug}'`);

    const blogSlug = blogPaths.edges.filter(({ node: pathNode }) => {
      return pathNode.node_locale === locale;
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
        management,
      },
    };

    createPage(pageOpts);
  });

  // Create the blog page from Contentful.

  blogPaths.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageId, node_locale: locale, slug } = node;

    reporter.verbose(`Creating the blog page for ID '${pageId}'`);

    const pagePath =
      locale === defaultLocale ? `/${slug}` : `/${localePaths[locale.replace('-', '_')]}/${slug}`;

    reporter.verbose(`The path created for ${pageId} is ${pagePath}`);

    const pageOpts = {
      path: pagePath,
      component: path.resolve('src', 'templates', 'blog.jsx'),
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

    reporter.verbose(`Creating page for the base slug '${slug}'`);

    const categorySlug = categoryPaths.edges.filter(
      ({ node: pathNode }) => pathNode.node_locale === locale,
    )[0].node;

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

  // Create the categories page from Contentful.

  categoryPaths.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageId, node_locale: locale } = node;

    reporter.verbose(`Creating the category page for ID '${pageId}'`);

    const pagePath = createPagePath(node, locale, defaultLocale, localePaths);

    reporter.verbose(`The path created for ${pageId} is ${pagePath}`);

    const pageOpts = {
      path: pagePath,
      component: path.resolve('src', 'templates', 'categories.jsx'),
      context: {
        locale,
        pageId,
      },
    };

    createPage(pageOpts);
  });

  // Create the index page from Contentful.

  query.data.indexPages.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageId, node_locale: locale } = node;

    reporter.verbose(`Creating the index page for ID '${pageId}'`);

    const pagePath = locale === defaultLocale ? '/' : `/${localePaths[locale.replace('-', '_')]}`;

    reporter.verbose(`The path created is ${pagePath}`);

    const pageOpts = {
      path: pagePath,
      component: path.resolve('src', 'templates', 'index.jsx'),
      context: {
        locale,
        pageId,
      },
    };

    createPage(pageOpts);
  });

  // Create the management page from Contentful.

  query.data.managementPages.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageId, node_locale: locale, slug } = node;

    reporter.verbose(`Creating page for the base slug '${slug}'`);

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

  // Create the pricing page from Contentful.

  query.data.pricingPages.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageId, node_locale: locale, slug } = node;

    reporter.verbose(`Creating page for the base slug '${slug}'`);

    const pagePath =
      locale === defaultLocale ? `/${slug}` : `/${localePaths[locale.replace('-', '_')]}/${slug}`;

    reporter.verbose(`The path created is ${pagePath}`);

    const pageOpts = {
      path: pagePath,
      component: path.resolve('src', 'templates', 'pricing.jsx'),
      context: {
        locale,
        pageId,
      },
    };

    createPage(pageOpts);
  });
};
