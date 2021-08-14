// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const path = require('path');

const createPagePath = require('./createPagePath');

module.exports = async function createPages({ actions, graphql, reporter }) {
  const { createPage, createRedirect } = actions;

  const query = await graphql(
    `
      {
        site {
          siteMetadata {
            alternativeURLs
            defaultLocale
            locales
            siteURL
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
                ... on ContentfulPage {
                  slug
                  parentPath {
                    ... on ContentfulPage {
                      slug
                    }
                    ... on ContentfulPath {
                      slug
                    }
                  }
                }
                ... on ContentfulPath {
                  slug
                  parentPath {
                    slug
                  }
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
        clientRegisterBusinessPages: allContentfulPage(
          filter: { contentful_id: { eq: "4oIYhIQVDliSRZWcw0uLih" } }
        ) {
          edges {
            node {
              contentful_id
              node_locale
              slug
              parentPath {
                ... on ContentfulPage {
                  slug
                  parentPath {
                    ... on ContentfulPage {
                      slug
                    }
                    ... on ContentfulPath {
                      slug
                    }
                  }
                }
                ... on ContentfulPath {
                  slug
                  parentPath {
                    slug
                  }
                }
              }
            }
          }
        }
        clientRegisterPersonPages: allContentfulPage(
          filter: { contentful_id: { eq: "4TippijFyNwApyemfLovAf" } }
        ) {
          edges {
            node {
              contentful_id
              node_locale
              slug
              parentPath {
                ... on ContentfulPage {
                  slug
                  parentPath {
                    ... on ContentfulPage {
                      slug
                    }
                    ... on ContentfulPath {
                      slug
                    }
                  }
                }
                ... on ContentfulPath {
                  slug
                  parentPath {
                    slug
                  }
                }
              }
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
        personalServerDomainServiceRegistrationPages: allContentfulPage(
          filter: { contentful_id: { eq: "2PFqJqgjBlLgDABN6Wxhis" } }
        ) {
          edges {
            node {
              contentful_id
              node_locale
              slug
              parentPath {
                ... on ContentfulPage {
                  slug
                  parentPath {
                    ... on ContentfulPage {
                      slug
                    }
                    ... on ContentfulPath {
                      slug
                    }
                  }
                }
                ... on ContentfulPath {
                  slug
                  parentPath {
                    slug
                  }
                }
              }
            }
          }
        }
        portfolioPaths: allContentfulPath(
          filter: { contentful_id: { eq: "1tG1ohi0pFMwiZwtSoiAhm" } }
        ) {
          edges {
            node {
              contentful_id
              node_locale
              slug
            }
          }
        }
        portfolioReferences: allContentfulPortfolioReference {
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
        redirects: allContentfulRedirect {
          edges {
            node {
              force
              node_locale
              permanent
              from {
                slug
                parentPath {
                  slug
                  parentPath {
                    slug
                  }
                }
              }
              to {
                slug
                parentPath {
                  ... on ContentfulPage {
                    slug
                    parentPath {
                      ... on ContentfulPage {
                        slug
                      }
                      ... on ContentfulPath {
                        slug
                      }
                    }
                  }
                  ... on ContentfulPath {
                    slug
                    parentPath {
                      slug
                    }
                  }
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

  const { alternativeURLs, defaultLocale, localePaths, locales, siteURL } =
    query.data.site.siteMetadata;

  // Create the author pages from Contentful.

  const { authorPaths } = query.data;

  query.data.authors.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageID, node_locale: locale, slug } = node;

    reporter.verbose(`Creating page for the base slug '${slug}'`);

    const authorSlug = authorPaths.edges.filter(({ node: pathNode }) => {
      return pathNode.node_locale === locale;
    })[0].node.slug;

    const pagePath =
      locale === defaultLocale
        ? `/${authorSlug}/${slug}`
        : `/${localePaths[locale.replace('-', '_')]}/${authorSlug}/${slug}`;

    reporter.verbose(`The path created is ${pagePath}`);

    createPage({
      path: pagePath,
      component: path.resolve('src', 'templates', 'Author.tsx'),
      context: {
        locale,
        pageID,
        momentJSLocale: locale.toLowerCase(),
      },
    });
  });

  // Create the authors page from Contentful.

  authorPaths.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageID, node_locale: locale, slug } = node;

    reporter.verbose(`Creating the author page for ID '${pageID}'`);

    const pagePath =
      locale === defaultLocale ? `/${slug}` : `/${localePaths[locale.replace('-', '_')]}/${slug}`;

    reporter.verbose(`The path created for ${pageID} is ${pagePath}`);

    createPage({
      path: pagePath,
      component: path.resolve('src', 'templates', 'Authors.tsx'),
      context: {
        locale,
        pageID,
        momentJSLocale: locale.toLowerCase(),
      },
    });
  });

  // Create the basic pages from Contentful.

  query.data.basicPages.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageID, node_locale: locale, slug } = node;

    reporter.verbose(`Creating page for the base slug '${slug}'`);

    const pagePath = createPagePath(node, locale, defaultLocale, localePaths, reporter);

    reporter.verbose(`The path created is ${pagePath}`);

    createPage({
      path: pagePath,
      component: path.resolve('src', 'templates', 'ContentfulPage.tsx'),
      context: {
        locale,
        pageID,
      },
    });
  });

  // Create the blog post pages from Contentful.

  const { blogPaths } = query.data;

  query.data.blogPosts.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageID, node_locale: locale, slug, management } = node;

    reporter.verbose(`Creating page for the base slug '${slug}'`);

    const blogSlug = blogPaths.edges.filter(({ node: pathNode }) => {
      return pathNode.node_locale === locale;
    })[0].node.slug;

    const pagePath =
      locale === defaultLocale
        ? `/${blogSlug}/${slug}`
        : `/${localePaths[locale.replace('-', '_')]}/${blogSlug}/${slug}`;

    reporter.verbose(`The path created is ${pagePath}`);

    createPage({
      path: pagePath,
      component: path.resolve('src', 'templates', 'BlogPost.tsx'),
      context: {
        locale,
        management,
        pageID,
        momentJSLocale: locale.toLowerCase(),
      },
    });
  });

  // Create the blog page from Contentful.

  blogPaths.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageID, node_locale: locale, slug } = node;

    reporter.verbose(`Creating the blog page for ID '${pageID}'`);

    const pagePath =
      locale === defaultLocale ? `/${slug}` : `/${localePaths[locale.replace('-', '_')]}/${slug}`;

    reporter.verbose(`The path created for ${pageID} is ${pagePath}`);

    createPage({
      path: pagePath,
      component: path.resolve('src', 'templates', 'Blog.tsx'),
      context: {
        locale,
        pageID,
        momentJSLocale: locale.toLowerCase(),
      },
    });
  });

  // Create the category pages from Contentful.

  const { categoryPaths } = query.data;

  query.data.categories.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageID, node_locale: locale, slug } = node;

    reporter.verbose(`Creating page for the base slug '${slug}'`);

    const categorySlug = categoryPaths.edges.filter(
      ({ node: pathNode }) => pathNode.node_locale === locale,
    )[0].node;

    const pagePath = `${createPagePath(categorySlug, locale, defaultLocale, localePaths)}/${slug}`;

    reporter.verbose(`The path created is ${pagePath}`);

    createPage({
      path: pagePath,
      component: path.resolve('src', 'templates', 'Category.tsx'),
      context: {
        locale,
        pageID,
        momentJSLocale: locale.toLowerCase(),
      },
    });
  });

  // Create the categories page from Contentful.

  categoryPaths.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageID, node_locale: locale } = node;

    reporter.verbose(`Creating the category page for ID '${pageID}'`);

    const pagePath = createPagePath(node, locale, defaultLocale, localePaths);

    reporter.verbose(`The path created for ${pageID} is ${pagePath}`);

    createPage({
      path: pagePath,
      component: path.resolve('src', 'templates', 'Categories.tsx'),
      context: {
        locale,
        pageID,
      },
    });
  });

  // Create the index page from Contentful.

  query.data.indexPages.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageID, node_locale: locale } = node;

    reporter.verbose(`Creating the index page for ID '${pageID}'`);

    const pagePath = locale === defaultLocale ? '/' : `/${localePaths[locale.replace('-', '_')]}`;

    reporter.verbose(`The path created is ${pagePath}`);

    createPage({
      path: pagePath,
      component: path.resolve('src', 'templates', 'Index.tsx'),
      context: {
        locale,
        pageID,
      },
    });
  });

  // Create the management page from Contentful.

  query.data.managementPages.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageID, node_locale: locale, slug } = node;

    reporter.verbose(`Creating page for the base slug '${slug}'`);

    const pagePath =
      locale === defaultLocale ? `/${slug}` : `/${localePaths[locale.replace('-', '_')]}/${slug}`;

    reporter.verbose(`The path created is ${pagePath}`);

    createPage({
      path: pagePath,
      component: path.resolve('src', 'templates', 'Management.tsx'),
      context: {
        locale,
        pageID,
        momentJSLocale: locale.toLowerCase(),
      },
    });
  });

  // Create the portfolio pages from Contentful.

  const { portfolioPaths } = query.data;

  query.data.portfolioReferences.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageID, node_locale: locale, slug } = node;

    reporter.verbose(`Creating page for the base slug '${slug}'`);

    const portfolioSlug = portfolioPaths.edges.filter(({ node: pathNode }) => {
      return pathNode.node_locale === locale;
    })[0].node.slug;

    const pagePath =
      locale === defaultLocale
        ? `/${portfolioSlug}/${slug}`
        : `/${localePaths[locale.replace('-', '_')]}/${portfolioSlug}/${slug}`;

    reporter.verbose(`The path created is ${pagePath}`);

    createPage({
      path: pagePath,
      component: path.resolve('src', 'templates', 'PortfolioReference.tsx'),
      context: {
        locale,
        pageID,
      },
    });
  });

  // Create the pricing page from Contentful.

  query.data.pricingPages.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageID, node_locale: locale, slug } = node;

    reporter.verbose(`Creating page for the base slug '${slug}'`);

    const pagePath =
      locale === defaultLocale ? `/${slug}` : `/${localePaths[locale.replace('-', '_')]}/${slug}`;

    reporter.verbose(`The path created is ${pagePath}`);

    createPage({
      path: pagePath,
      component: path.resolve('src', 'templates', 'Pricing.tsx'),
      context: {
        locale,
        pageID,
      },
    });
  });

  // Create the client register page for businesses from Contentful.

  query.data.clientRegisterBusinessPages.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageID, node_locale: locale, slug } = node;

    reporter.verbose(`Creating page for the base slug '${slug}'`);

    const pagePath = createPagePath(node, locale, defaultLocale, localePaths);

    reporter.verbose(`The path created is ${pagePath}`);

    createPage({
      path: pagePath,
      component: path.resolve('src', 'templates', 'ClientRegister.tsx'),
      context: {
        locale,
        pageID,
        clientType: 'business',
      },
    });
  });

  // Create the client register page for people from Contentful.

  query.data.clientRegisterPersonPages.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageID, node_locale: locale, slug } = node;

    reporter.verbose(`Creating page for the base slug '${slug}'`);

    const pagePath = createPagePath(node, locale, defaultLocale, localePaths);

    reporter.verbose(`The path created is ${pagePath}`);

    createPage({
      path: pagePath,
      component: path.resolve('src', 'templates', 'ClientRegister.tsx'),
      context: {
        locale,
        pageID,
        clientType: 'person',
      },
    });
  });

  // Create the personal server and domain service registration page from Contentful.

  query.data.personalServerDomainServiceRegistrationPages.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id: pageID, node_locale: locale, slug } = node;

    reporter.verbose(`Creating page for the base slug '${slug}'`);

    const pagePath = createPagePath(node, locale, defaultLocale, localePaths);

    reporter.verbose(`The path created is ${pagePath}`);

    createPage({
      path: pagePath,
      component: path.resolve('src', 'templates', 'ServiceRegistration.tsx'),
      context: {
        locale,
        pageID,
        // clientType: 'person',
      },
    });
  });

  // Create the 404 error pages.

  locales.forEach((locale) => {
    reporter.verbose(`Creating a 404 error page for the locale '${locale}'`);

    const pagePath =
      locale === defaultLocale ? '/404' : `/${localePaths[locale.replace('-', '_')]}/404`;

    reporter.verbose(`The path created is ${pagePath}`);

    createPage({
      path: pagePath,
      component: path.resolve('src', 'templates', 'NotFound.tsx'),
      context: {
        locale,
        pageID: '404',
      },
    });
  });

  // Create the redirects for all of the pages.

  alternativeURLs.forEach((url) => {
    createRedirect({
      fromPath: `${url}/*`,
      toPath: `${siteURL}/:splat`,
      isPermanent: true,
      force: true,
    });
  });

  // Create the redirects for the URLs.

  alternativeURLs.forEach((url) => {
    createRedirect({
      fromPath: url,
      toPath: siteURL,
      isPermanent: true,
      force: true,
    });
  });

  // Create redirects for the portfolio page.

  createRedirect({
    fromPath: `/en/portfolio`,
    toPath: `/en#portfolio`,
    isPermanent: true,
    force: true,
  });

  createRedirect({
    fromPath: `/portfolio`,
    toPath: `/#portfolio`,
    isPermanent: true,
    force: true,
  });

  // Create redirects from the Contentful data.

  query.data.redirects.edges.forEach(({ node }) => {
    const { force, from, node_locale: locale, permanent: isPermanent, to } = node;
    createRedirect({
      fromPath: createPagePath(from, locale, defaultLocale, localePaths),
      toPath: createPagePath(to, locale, defaultLocale, localePaths),
      isPermanent,
      force,
    })
  })

  // Create the redirects for the 404 error pages.

  createRedirect({
    fromPath: '/en/*',
    toPath: `/en/404`,
    statusCode: 404,
  });
  createRedirect({
    fromPath: '/*',
    toPath: `/404`,
    statusCode: 404,
  });
};
