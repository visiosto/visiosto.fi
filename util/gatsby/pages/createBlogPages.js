// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const path = require('path');

module.exports = async (actions, graphql, reporter) => {
  const { createPage } = actions;

  const query = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
          filter: { fields: { keySlug: { glob: "**/blog/**" } } }
        ) {
          edges {
            node {
              frontmatter {
                date
              }
              fields {
                slug
                keySlug
                locale
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

  const blogPostTemplate = path.resolve('src', 'templates', 'blog-post.jsx');

  query.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { locale, slug } = node.fields;

    reporter.verbose(`The path for the blog post page is ${slug}`);

    const momentJsLocale = locale === 'en' ? 'en-gb' : locale;

    reporter.verbose(`The Moment.js locale to ${momentJsLocale}`);

    const pageOpts = {
      path: slug,
      component: blogPostTemplate,
      context: {
        lang: locale,
        momentJsLocale,
        key: node.fields.keySlug,
      },
    };

    createPage(pageOpts);
  });
};
