// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const fs = require('fs');
const path = require('path');

const createPagePath = require('./createPagePath');

const htmlTreeToText = function transformHTMLTreeToText(elements) {
  return elements.map((element) =>
    element.type === 'text' ? element.value : htmlTreeToText(element.children),
  );
};

const createFromHTMLAST = function createFullTextFromHTMLAST(elements) {
  return htmlTreeToText(elements).reduce((accumulator, element) =>
    element === '\n' ? `${accumulator}` : `${accumulator} ${element}`,
  );
};

const createBlogPageEntry = function createBlogPageEntryFromHTMLAST(
  node,
  blogNodes,
  locale,
  defaultLocale,
  localePaths,
) {
  const content = [
    node.title,
    ...blogNodes.map(
      ({ node: postNode }) =>
        `${postNode.title} ${postNode.author.name} ${postNode.category.name} ${postNode.body.childMarkdownRemark.excerpt}`,
    ),
  ];

  const page = {
    slug:
      locale === defaultLocale
        ? `/${node.slug}`
        : `/${localePaths[locale.replace('-', '_')]}/${node.slug}`,
    id: node.contentful_id,
    title: node.title,
    excerpt: `${blogNodes[0].node.title} ${blogNodes[0].node.author.name} ${blogNodes[0].node.category.name} ${blogNodes[0].node.body.childMarkdownRemark.excerpt}`,
    content: content.join(' '),
  };

  return page;
};

const createBlogPostContent = function createBlogPostContentFromHTMLAST(node) {
  const content = [
    node.title,
    node.author.name,
    node.category.name,
    createFromHTMLAST(node.body.childMarkdownRemark.htmlAst.children),
  ];

  return content.join(' ');
};

const createPortfolioReferenceContent = function createPortfolioReferenceContentFromHTMLAST(node) {
  const content = [
    'Portfolio:',
    node.name,
    node.subtitle,
    createFromHTMLAST(node.description.childMarkdownRemark.htmlAst.children),
  ];

  return content.join(' ');
};

const createIndexPageEntry = function createIndexPageEntryFromHTMLAST(
  node,
  locale,
  defaultLocale,
  localePaths,
) {
  const content = [
    node.introTitle,
    createFromHTMLAST(node.introBody.childMarkdownRemark.htmlAst.children),
    node.storyTitle,
    createFromHTMLAST(node.storyBody.childMarkdownRemark.htmlAst.children),
    node.productsTitle,
    ...node.products.map(
      (product) =>
        `${product.title} ${createFromHTMLAST(
          product.description.childMarkdownRemark.htmlAst.children,
        )}`,
    ),
    node.portfolioTitle,
    node.contactTitle,
    createFromHTMLAST(node.contactBody.childMarkdownRemark.htmlAst.children),
    ...node.contacts.map((contact) => `${contact.name} ${contact.job} ${contact.email}`),
  ];

  const page = {
    slug: locale === defaultLocale ? '/' : `/${localePaths[locale.replace('-', '_')]}`,
    id: node.contentful_id,
    title: node.title,
    excerpt: node.introBody.childMarkdownRemark.excerpt,
    content: content.join(' '),
  };

  return page;
};

const createManagementPageEntry = function createManagementPageEntryFromHTMLAST(
  node,
  blogNodes,
  locale,
  defaultLocale,
  localePaths,
) {
  const content = [
    node.title,
    createFromHTMLAST(node.body.childMarkdownRemark.htmlAst.children),
    ...blogNodes.map(
      ({ node: postNode }) =>
        `${postNode.title} ${postNode.author.name} ${postNode.category.name} ${createFromHTMLAST(
          postNode.body.childMarkdownRemark.htmlAst.children,
        )}`,
    ),
  ];

  const page = {
    slug:
      locale === defaultLocale
        ? `/${node.slug}`
        : `/${localePaths[locale.replace('-', '_')]}/${node.slug}`,
    id: node.contentful_id,
    title: node.title,
    excerpt: node.body.childMarkdownRemark.excerpt,
    content: content.join(' '),
  };

  return page;
};

module.exports = async function onPostBuild({ graphql, reporter }) {
  const query = await graphql(
    `
      {
        site {
          siteMetadata {
            defaultLocale
            locales
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
              name
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
              node_locale
              slug
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
              title
              body {
                childMarkdownRemark {
                  excerpt
                  htmlAst
                }
              }
              parentPath {
                slug
                parentPath {
                  slug
                }
              }
            }
          }
        }
        blogBlogPosts: allContentfulBlogPost(
          filter: { management: { eq: false } }
          sort: { fields: date, order: DESC }
        ) {
          edges {
            node {
              node_locale
              title
              author {
                name
              }
              body {
                childMarkdownRemark {
                  excerpt(pruneLength: 500)
                  htmlAst
                }
              }
              category {
                name
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
              title
            }
          }
        }
        blogPosts: allContentfulBlogPost(sort: { fields: date, order: DESC }) {
          edges {
            node {
              contentful_id
              node_locale
              slug
              title
              author {
                name
              }
              body {
                childMarkdownRemark {
                  htmlAst
                  excerpt
                }
              }
              category {
                contentful_id
                name
              }
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
              title
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
              slug
              node_locale
              name
            }
          }
        }
        indexPages: allContentfulIndexPage(
          filter: { contentful_id: { eq: "rXFgpak6HKjCuUXjFo9KW" } }
        ) {
          edges {
            node {
              contactTitle
              contentful_id
              introTitle
              node_locale
              portfolioTitle
              productsTitle
              storyTitle
              title
              contactBody {
                childMarkdownRemark {
                  htmlAst
                }
              }
              contacts {
                email
                job
                name
              }
              introBody {
                childMarkdownRemark {
                  excerpt
                  htmlAst
                }
              }
              products {
                title
                description {
                  childMarkdownRemark {
                    htmlAst
                  }
                }
              }
              storyBody {
                childMarkdownRemark {
                  htmlAst
                }
              }
            }
          }
        }
        managementBlogPosts: allContentfulBlogPost(
          filter: { management: { eq: true } }
          sort: { fields: date, order: DESC }
        ) {
          edges {
            node {
              slug
              node_locale
              title
              author {
                name
              }
              body {
                childMarkdownRemark {
                  excerpt(pruneLength: 500)
                  htmlAst
                }
              }
              category {
                name
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
              title
              body {
                childMarkdownRemark {
                  excerpt
                  htmlAst
                }
              }
            }
          }
        }
        portfolioReferences: allContentfulPortfolioReference {
          edges {
            node {
              contentful_id
              name
              node_locale
              slug
              subtitle
              description {
                childMarkdownRemark {
                  excerpt(pruneLength: 500)
                  htmlAst
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
              title
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

  const { defaultLocale, localePaths, locales } = query.data.site.siteMetadata;

  const searchData = {};

  locales.forEach((locale) => {
    searchData[locale] = { pages: [] };
  });

  // Create the index page entries.

  locales.forEach((locale) => {
    const { node: indexNode } = query.data.indexPages.edges.filter(
      ({ node: pageNode }) => pageNode.node_locale === locale,
    )[0];
    reporter.verbose(`Creating search index entry for the index page for locale: ${locale}`);
    searchData[locale].pages.push(
      createIndexPageEntry(indexNode, locale, defaultLocale, localePaths),
    );
  });

  // Create basic page entries.

  query.data.basicPages.edges.forEach(({ node: pageNode }) => {
    const { body, node_locale: locale, contentful_id: id, title, slug } = pageNode;
    const { htmlAst: htmlAST, excerpt } = body.childMarkdownRemark;

    reporter.verbose(`Creating search index entry for the page '${slug}' (locale: ${locale})`);

    const page = {
      slug: createPagePath(pageNode, locale, defaultLocale, localePaths, reporter),
      id,
      title,
      excerpt,
      content: createFromHTMLAST(htmlAST.children),
    };

    searchData[locale].pages.push(page);
  });

  // Create management page entries.

  locales.forEach((locale) => {
    const { node: managementNode } = query.data.managementPages.edges.filter(
      ({ node: pageNode }) => pageNode.node_locale === locale,
    )[0];
    const blogPostNodes = query.data.managementBlogPosts.edges.filter(
      ({ node: postNode }) => postNode.node_locale === locale,
    );

    reporter.verbose(
      `Creating search index entry for the page '${managementNode.slug}' (locale: ${locale})`,
    );

    searchData[locale].pages.push(
      createManagementPageEntry(managementNode, blogPostNodes, locale, defaultLocale, localePaths),
    );
  });

  const { blogPaths } = query.data;

  // Create blog post page entries.

  query.data.blogPosts.edges.forEach(({ node: postNode }) => {
    const { body, node_locale: locale, contentful_id: id, title, slug } = postNode;
    const { excerpt } = body.childMarkdownRemark;
    reporter.verbose(`Creating search index entry for the blog post '${slug}' (locale: ${locale})`);
    const blogPath = blogPaths.edges.filter(({ node: pathNode }) => {
      return pathNode.node_locale === locale;
    })[0].node.slug;
    const pagePath =
      locale === defaultLocale
        ? `/${blogPath}/${slug}`
        : `/${localePaths[locale.replace('-', '_')]}/${blogPath}/${slug}`;

    const page = {
      slug: pagePath,
      id,
      title,
      excerpt,
      content: createBlogPostContent(postNode),
    };

    searchData[locale].pages.push(page);
  });

  // Create blog page entries.

  locales.forEach((locale) => {
    const { node: pathNode } = blogPaths.edges.filter(
      ({ node: blogPathNode }) => blogPathNode.node_locale === locale,
    )[0];
    const blogPostNodes = query.data.blogBlogPosts.edges.filter(
      ({ node: postNode }) => postNode.node_locale === locale,
    );

    reporter.verbose(
      `Creating search index entry for the blog page '${pathNode.slug}' (locale: ${locale}, number of blog posts: ${blogPostNodes.length})`,
    );

    searchData[locale].pages.push(
      createBlogPageEntry(pathNode, blogPostNodes, locale, defaultLocale, localePaths),
    );
  });

  // Create author page entries.

  query.data.authors.edges.forEach(({ node: authorNode }) => {
    const { node_locale: locale, contentful_id: id, name: title, slug } = authorNode;
    reporter.verbose(`Creating search index entry for the author '${slug}' (locale: ${locale})`);
    const authorPath = query.data.authorPaths.edges.filter(({ node: pathNode }) => {
      return pathNode.node_locale === locale;
    })[0].node.slug;
    const pagePath =
      locale === defaultLocale
        ? `/${authorPath}/${slug}`
        : `/${localePaths[locale.replace('-', '_')]}/${authorPath}/${slug}`;

    const page = {
      slug: pagePath,
      id,
      title,
      excerpt: '',
      content: '',
    };

    searchData[locale].pages.push(page);
  });

  // Create category page entries.

  query.data.categories.edges.forEach(({ node: categoryNode }) => {
    const { node_locale: locale, contentful_id: id, name: title, slug } = categoryNode;
    reporter.verbose(`Creating search index entry for the category '${slug}' (locale: ${locale})`);
    const categoryPath = query.data.categoryPaths.edges.filter(
      ({ node: pathNode }) => pathNode.node_locale === locale,
    )[0].node;

    const pagePath = `${createPagePath(categoryPath, locale, defaultLocale, localePaths)}/${slug}`;

    const firstPost = query.data.blogPosts.edges.filter(
      ({ node: postNode }) =>
        postNode.category.contentful_id === id && postNode.node_locale === locale,
    )[0].node;

    const page = {
      slug: pagePath,
      id,
      title: `${categoryPath.title}: ${title}`,
      excerpt: `${firstPost.title} ${firstPost.author.name} ${firstPost.category.name} ${firstPost.body.childMarkdownRemark.excerpt}`,
      content: query.data.blogPosts.edges
        .filter(
          ({ node: postNode }) =>
            postNode.category.contentful_id === id && postNode.node_locale === locale,
        )
        .map(
          ({ node: postNode }) =>
            `${postNode.title} ${postNode.author.name} ${postNode.category.name} ${postNode.body.childMarkdownRemark.excerpt}`,
        )
        .join(' '),
    };

    searchData[locale].pages.push(page);
  });

  // Create portfolio page entries.

  const { portfolioPaths } = query.data;

  query.data.portfolioReferences.edges.forEach(({ node: referenceNode }) => {
    const { description, node_locale: locale, contentful_id: id, name: title, slug } = referenceNode;
    const { excerpt } = description.childMarkdownRemark;
    reporter.verbose(
      `Creating search index entry for the portfolio reference '${slug}' (locale: ${locale})`,
    );
    const portfolioPath = portfolioPaths.edges.filter(({ node: pathNode }) => {
      return pathNode.node_locale === locale;
    })[0].node.slug;
    const pagePath =
      locale === defaultLocale
        ? `/${portfolioPath}/${slug}`
        : `/${localePaths[locale.replace('-', '_')]}/${portfolioPath}/${slug}`;

    const page = {
      slug: pagePath,
      id,
      title,
      excerpt,
      content: createPortfolioReferenceContent(referenceNode),
    };

    searchData[locale].pages.push(page);
  });

  const searchPath = path.join(__dirname, '..', 'public', 'search');

  if (!fs.existsSync(searchPath)) {
    fs.mkdirSync(searchPath);
  }

  query.data.site.siteMetadata.locales.forEach((locale) => {
    const localeFile = path.join(searchPath, `pages-${locale.toLowerCase()}.json`);
    fs.writeFileSync(localeFile, JSON.stringify(searchData[locale]));
  });
};
