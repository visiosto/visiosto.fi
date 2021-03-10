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

  const authorTemplate = path.resolve('src', 'templates', 'author.jsx');

  query.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, locale } = node.fields;

    reporter.verbose('The path for the author page is', slug);

    addPathToSite(slug);

    createPage({
      path: slug,
      component: authorTemplate,
      context: {
        lang: locale,
        key: node.fields.keySlug,
      },
    });
  });
};
