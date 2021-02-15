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
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
          filter: { fields: { keySlug: { glob: "**/blog/**" } } }
        ) {
          edges {
            node {
              frontmatter {
                date
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

  const blogPostTemplate = path.resolve('src', 'templates', 'blog-post.jsx');

  query.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const postLocale = node.frontmatter.locale;

    const { slug } = node.fields;

    console.log('The path for the blog post page is', slug);

    addPathToSite(slug);

    const momentJsLocale = postLocale === 'en' ? 'en-gb' : postLocale;

    console.log('The Moment.js locale to', momentJsLocale);

    const pageOpts = {
      path: slug,
      component: blogPostTemplate,
      context: {
        lang: postLocale,
        momentJsLocale,
        key: node.fields.keySlug,
      },
    };

    createPage(pageOpts);
  });
};
