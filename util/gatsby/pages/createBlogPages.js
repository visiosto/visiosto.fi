// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const path = require('path');

const { addPathToSite } = require('../../sitePaths');

module.exports = async (actions, graphql, reporter) => {
  const { createPage } = actions;

  const query = await graphql(
    `
      {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
          edges {
            node {
              frontmatter {
                date
                locale
              }
              fields {
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

  const blogPostTemplate = path.resolve('src', 'templates', 'blog-post.jsx');

  query.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const postLocale = node.frontmatter.locale;

    const { slug } = node.fields;

    console.log('The path for the blog post page is', slug);

    addPathToSite(slug);

    const keySlug = `blog:${node.frontmatter.date}`;

    console.log('The key slug is set to', keySlug);

    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        lang: postLocale,
        key: keySlug,
      },
    });
  });
};
