// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const fs = require('fs');
const path = require('path');

const createPagePath = require('./createPagePath');

const htmlTreeToText = (elements) =>
  elements.map((element) =>
    element.type === 'text' ? element.value : htmlTreeToText(element.children),
  );

const createFromHTMLAST = (elements) =>
  htmlTreeToText(elements).reduce((accumulator, element) =>
    element === '\n' ? `${accumulator}` : `${accumulator} ${element}`,
  );

const createIndexPageEntry = (node, locale, defaultLocale) => {
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
    slug: locale === defaultLocale ? '/' : `/${locale}`,
    id: node.contentful_id,
    title: node.title,
    excerpt: node.introBody.childMarkdownRemark.excerpt,
    content: content.join(' '),
  };

  return page;
};

module.exports = async ({ graphql, reporter }) => {
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
        basicPages: allContentfulPage(
          filter: { slug: { regex: "/^(?!hallinto|management).*$/" } }
        ) {
          edges {
            node {
              contentful_id
              node_locale
              slug
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
      }
    `,
  );

  if (query.errors) {
    reporter.panicOnBuild('Error while running GraphQL query');
    return;
  }

  const { defaultLocale, localePaths, locales } = query.data.site.siteMetadata;

  const searchData = {};

  locales.forEach((locale) => searchData[locale] = { pages: [] });

  // Create the index page entries.

  locales.forEach((locale) => {
    const { node: indexNode } = query.data.indexPages.edges.filter(
      ({ node: pageNode }) => pageNode.node_locale === locale,
    )[0];
    searchData[locale].pages.push(
      createIndexPageEntry(indexNode, locale, defaultLocale),
    );
  });

  // Create basic page entries.

  query.data.basicPages.edges.forEach(({ node: pageNode }) => {
    const { body, node_locale: locale, contentful_id: id, title } = pageNode;
    const { htmlAst: htmlAST, excerpt } = body.childMarkdownRemark;

    const page = {
      slug: createPagePath(pageNode, locale, defaultLocale, localePaths, reporter),
      id,
      title,
      excerpt,
      content: createFromHTMLAST(htmlAST.children),
    };

    searchData[locale].pages.push(page);
  });

  const searchPath = path.join(__dirname, '..', 'public', 'search');

  if (!fs.existsSync(searchPath)) {
    fs.mkdirSync(searchPath);
  }

  query.data.site.siteMetadata.locales.forEach((locale) => {
    const localeFile = path.join(searchPath, `pages-${locale}.json`);
    fs.writeFileSync(localeFile, JSON.stringify(searchData[locale]));
  });
};
