// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const path = require('path');

const { addPathToSite } = require('../../sitePaths');

module.exports = async (actions, graphql, reporter) => {
  const { createPage } = actions;

  const query = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___title] }
          limit: 1000
          filter: { fields: { keySlug: { glob: "**/author/**" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                locale
              }
              fields {
                slug
                keySlug
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

  const authorTemplate = path.resolve('src', 'templates', 'author.jsx');

  query.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const authorLocale = node.frontmatter.locale;

    const { slug } = node.fields;

    console.log('The path for the author page is', slug);

    addPathToSite(slug);

    createPage({
      path: slug,
      component: authorTemplate,
      context: {
        lang: authorLocale,
        key: node.fields.keySlug,
      },
    });
  });
};
