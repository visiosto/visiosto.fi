// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const fs = require('fs');
const path = require('path');

const htmlTreeToText = (elements) =>
  elements.map((element) =>
    element.type === 'text' ? element.value : htmlTreeToText(element.children),
  );

const createFromHtmlAst = (elements) =>
  htmlTreeToText(elements).reduce((accumulator, element) =>
    element === '\n' ? `${accumulator}` : `${accumulator} ${element}`,
  );

const createIndexPageEntry = (edges, locale, defaultLocale) => {
  const page = {
    slug: locale === defaultLocale ? '/' : `/${locale}`,
  };

  let content = '';

  edges
    .filter(({ node }) => node.fields.locale === locale)
    .forEach(({ node }) => {
      const { excerpt, frontmatter, htmlAst, id } = node;

      if (frontmatter.order === 0) {
        page.id = id;
        page.title = frontmatter.title;
      } else {
        if (!('excerpt' in page)) {
          page.excerpt = excerpt;
        }

        if (content) {
          content = `${content} `;
        }

        content = `${content}${frontmatter.title} ${createFromHtmlAst(htmlAst.children)}`;
      }
    });

  page.content = content;

  return page;
};

module.exports = async ({ graphql, reporter }) => {
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
      }
    `,
  );

  if (query.errors) {
    reporter.panicOnBuild('Error while running GraphQL query');
    return;
  }

  const searchData = {};

  query.data.site.siteMetadata.locales.forEach((locale) => {
    searchData[locale] = { pages: [] };
  });

  query.data.site.siteMetadata.locales.forEach((locale) =>
    searchData[locale].pages.push(
      createIndexPageEntry(
        query.data.index.edges,
        locale,
        query.data.site.siteMetadata.defaultLocale,
      ),
    ),
  );

  // query.data.author.edges.forEach(({ node }) => {
  //   const { excerpt, fields, frontmatter, htmlAst, id } = node;
  //   const { locale, slug } = fields;

  //   const page = {
  //     id,
  //     slug,
  //     title: frontmatter.title,
  //     content: createFromHtmlAst(htmlAst.children),
  //     excerpt,
  //   };

  //   searchData[locale].pages.push(page);
  // });

  // query.data.blog.edges.forEach(({ node }) => {
  //   const { excerpt, fields, frontmatter, htmlAst, id } = node;
  //   const { locale, slug } = fields;

  //   const page = {
  //     id,
  //     slug,
  //     title: frontmatter.title,
  //     content: createFromHtmlAst(htmlAst.children),
  //     excerpt,
  //   };

  //   searchData[locale].pages.push(page);
  // });

  query.data.rootPages.edges.forEach(({ node }) => {
    const { excerpt, fields, frontmatter, htmlAst, id } = node;
    const { locale, slug } = fields;

    const page = {
      id,
      slug,
      title: frontmatter.title,
      content: createFromHtmlAst(htmlAst.children),
      excerpt,
    };

    searchData[locale].pages.push(page);
  });

  const searchPath = path.join(__dirname, '..', '..', 'public', 'search');

  if (!fs.existsSync(searchPath)) {
    fs.mkdirSync(searchPath);
  }

  query.data.site.siteMetadata.locales.forEach((locale) => {
    const localeFile = path.join(searchPath, `pages-${locale}.json`);
    fs.writeFileSync(localeFile, JSON.stringify(searchData[locale]));
  });
};
