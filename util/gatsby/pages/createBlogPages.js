// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const path = require('path');

const config = require('../../../gatsby-config');
const pageSlugs = require('../../../src/data/page-slugs.json');

module.exports = async (actions, graphql, reporter) => {
  const { createPage } = actions;

  const query = await graphql(
    `
      {
        allContentfulBlogPost(sort: { fields: date, order: DESC }) {
          edges {
            node {
              contentful_id
              slug
              node_locale
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

  const defaultLanguage = config.siteMetadata.defaultLocale;

  const blogPostTemplate = path.resolve('src', 'templates', 'blog-post.jsx');

  query.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id, node_locale, slug } = node;

    reporter.verbose(`The Contentful slug for the blog post page is ${slug}`);

    // eslint-disable-next-line camelcase
    const locale = node_locale === 'en-GB' ? 'en' : node_locale;

    reporter.verbose(`The Moment.js locale to ${node_locale.toLowerCase()}`);

    // prettier-ignore
    const blogPath = locale === defaultLanguage
      ? `${pageSlugs.blog[locale]}`
      : `${locale}/${pageSlugs.blog[locale]}`;

    const pageOpts = {
      path: `/${blogPath}/${slug}`,
      component: blogPostTemplate,
      context: {
        lang: locale,
        nodeLocale: node_locale,
        jsLocale: node_locale,
        momentJsLocale: node_locale.toLowerCase(),
        key: contentful_id,
      },
    };

    createPage(pageOpts);
  });

  // query.data.allMarkdownRemark.edges.forEach(({ node }) => {
  //   const { locale, slug } = node.fields;

  //   reporter.verbose(`The path for the blog post page is ${slug}`);

  //   const jsLocale = locale === 'en' ? 'en-GB' : locale;
  //   const momentJsLocale = locale === 'en' ? 'en-gb' : locale;

  //   reporter.verbose(`The Moment.js locale to ${momentJsLocale}`);

  //   const pageOpts = {
  //     path: slug,
  //     component: blogPostTemplate,
  //     context: {
  //       lang: locale,
  //       jsLocale,
  //       momentJsLocale,
  //       key: node.fields.keySlug,
  //     },
  //   };

  //   createPage(pageOpts);
  // });
};
