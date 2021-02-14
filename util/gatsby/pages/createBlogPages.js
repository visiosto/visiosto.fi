// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const path = require('path');

const config = require('../../../gatsby-config');
const pageSlugs = require('../../../src/data/page-slugs.json');
const blogSlugs = require('../../../data/blog-slugs.json');
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
  const defaultLanguage = config.siteMetadata.defaultLocale;

  query.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log('Processing blog post', node.frontmatter.slug);

    const postLocale = node.frontmatter.locale;

    // prettier-ignore
    const blogPath = postLocale === defaultLanguage
      ? `${pageSlugs.blog[postLocale]}`
      : `${postLocale}/${pageSlugs.blog[postLocale]}`;

    console.log('Set the blog path to', blogPath);

    const slug = blogSlugs[node.frontmatter.date][postLocale];

    const sitePath = `/${blogPath}/${slug}`;

    console.log('The new path for the blog post page is', sitePath);

    addPathToSite(sitePath);

    const keySlug = `blog:${node.frontmatter.date}`;

    console.log('The key slug is set to', keySlug);

    createPage({
      path: sitePath,
      component: blogPostTemplate,
      context: {
        lang: postLocale,
        key: keySlug,
      },
    });
  });
};
