// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const fs = require('fs');
const path = require('path');

const config = require('../../../gatsby-config');

const pageSlugs = require('../../../src/data/page-slugs.json');
const recursiveReadDirSync = require('../../recursiveReadDirSync');

const pageKeySlashIndex = 1;

// This function creates the pages for each root-level page.
module.exports = async (actions, graphql, reporter) => {
  const { createPage } = actions;

  const defaultLanguage = config.siteMetadata.defaultLocale;

  reporter.verbose(`Default language is set to ${defaultLanguage}`);

  const rootPagesDir = path.join(__dirname, '..', '..', '..', 'src', 'templates');
  const langRootDir = path.join(__dirname, '..', '..', '..', 'src', 'locales');

  const langs = fs
    .readdirSync(langRootDir)
    .filter((f) => f.endsWith('.js') && f.length === 5)
    .map((f) => path.basename(f, '.js'));

  const files = recursiveReadDirSync(rootPagesDir)
    .filter((f) => !f.startsWith('.'))
    .filter((f) => !f.includes('.scss'))
    .filter((f) => !f.includes('author.jsx'))
    .filter((f) => !f.includes('blog-post.jsx'))
    .filter((f) => !f.includes('category.jsx'))
    .filter((f) => !f.includes('markdown-page.jsx'));

  reporter.verbose(`The languages found are ${langs}`);

  files.forEach((f) => {
    const fullpath = path.join(__dirname, '..', '..', '..', '..', '..', f);

    reporter.verbose(`Processing file ${fullpath}`);

    let originalSitePath = path.relative(rootPagesDir, fullpath).replace(/.jsx$/g, '');

    reporter.verbose(`The original path is ${originalSitePath}`);

    // Remove the index files
    if (originalSitePath.endsWith('index')) {
      originalSitePath = originalSitePath.substring(0, originalSitePath.length - 5);
    }

    // If they have .fi then just drop that completely
    if (originalSitePath.endsWith(`.${defaultLanguage}`)) {
      originalSitePath = originalSitePath.substring(0, originalSitePath.length - 3);
    }

    langs.forEach((lang) => {
      const sitePath = (() => {
        if (originalSitePath === '') {
          return lang === defaultLanguage ? '/' : `/${lang}`;
        }
        if (originalSitePath in pageSlugs && lang in pageSlugs[originalSitePath]) {
          const slug = pageSlugs[originalSitePath][lang];

          return lang === defaultLanguage ? `/${slug}` : `/${lang}/${slug}`;
        }

        return lang === defaultLanguage ? `/${originalSitePath}` : `/${lang}/${originalSitePath}`;
      })();

      reporter.verbose(`The new path for the page is ${sitePath}`);
      reporter.verbose(`The page key is ${originalSitePath}`);

      const pageOpts = {
        path: sitePath,
        component: fullpath,
        context: {
          lang,
          jsLocale: lang === 'en' ? 'en-GB' : lang,
          momentJsLocale: lang === 'en' ? 'en-gb' : lang,
          key: originalSitePath,
        },
      };

      createPage(pageOpts);
    });
  });
  const query = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___title] }
          limit: 1000
          filter: { fields: { keySlug: { regex: "/^(?!/(?:author|blog|index))/management/.*/" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
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

  const template = path.resolve('src', 'templates', 'markdown-page.jsx');

  query.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { slug, locale } = node.fields;

    reporter.verbose(`Creating page ${slug}`);
    reporter.verbose(`The page key is ${node.fields.keySlug.substring(pageKeySlashIndex)}`);

    createPage({
      path: slug,
      component: template,
      context: {
        lang: locale,
        key: node.fields.keySlug.substring(pageKeySlashIndex),
      },
    });
  });
};
