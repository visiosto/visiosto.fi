// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const fs = require('fs');
const path = require('path');

const pageSlugs = require('../../../src/data/page-slugs.json');
const recursiveReadDirSync = require('../../recursiveReadDirSync');

const pageKeySlashIndex = 1;

// This function creates the pages for each root-level page.
module.exports = async (actions, graphql, reporter) => {
  const { createPage } = actions;

  const query = await graphql(
    `
      {
        site {
          siteMetadata {
            defaultLocale
          }
        }
        allContentfulPage(filter: { slug: { regex: "/^hallinto|management$/" } }) {
          edges {
            node {
              contentful_id
              node_locale
              slug
            }
          }
        }
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___title] }
          limit: 1000
          filter: { fields: { keySlug: { regex: "/^(?!/(?:blog))/management/.*/" } } }
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

  const {defaultLocale} = query.data.site.siteMetadata;

  reporter.verbose(`Default language is set to ${defaultLocale}`);

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
    .filter((f) => !f.includes('management.jsx'))
    .filter((f) => !f.includes('markdown-page.jsx'))
    .filter((f) => !f.includes('page.jsx'));

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
    if (originalSitePath.endsWith(`.${defaultLocale}`)) {
      originalSitePath = originalSitePath.substring(0, originalSitePath.length - 3);
    }

    langs.forEach((lang) => {
      const sitePath = (() => {
        if (originalSitePath === '') {
          return lang === defaultLocale ? '/' : `/${lang}`;
        }
        if (originalSitePath in pageSlugs && lang in pageSlugs[originalSitePath]) {
          const slug = pageSlugs[originalSitePath][lang];

          return lang === defaultLocale ? `/${slug}` : `/${lang}/${slug}`;
        }

        return lang === defaultLocale ? `/${originalSitePath}` : `/${lang}/${originalSitePath}`;
      })();

      reporter.verbose(`The new path for the page is ${sitePath}`);
      reporter.verbose(`The page key is ${originalSitePath}`);

      const pageOpts = {
        path: sitePath,
        component: fullpath,
        context: {
          lang,
          locale: lang === 'en' ? 'en-GB' : lang,
          jsLocale: lang === 'en' ? 'en-GB' : lang,
          momentJsLocale: lang === 'en' ? 'en-gb' : lang,
          key: originalSitePath,
        },
      };

      createPage(pageOpts);
    });
  });

  const pageTemplate = path.resolve('src', 'templates', 'management.jsx');

  query.data.allContentfulPage.edges.forEach(({ node }) => {
    // eslint-disable-next-line camelcase
    const { contentful_id, node_locale, slug } = node;

    reporter.verbose(`The Contentful slug for the page is ${slug}`);

    // eslint-disable-next-line camelcase
    const locale = node_locale === 'en-GB' ? 'en' : node_locale;

    reporter.verbose(`The Moment.js locale to ${node_locale.toLowerCase()}`);

    const pagePath = locale === defaultLocale ? `/${slug}` : `/${locale}/${slug}`;

    reporter.verbose(`The path for the page created from Contentful data is ${pagePath}`);

    const pageOpts = {
      path: pagePath,
      component: pageTemplate,
      context: {
        lang: locale,
        locale: node_locale,
        nodeLocale: node_locale,
        jsLocale: node_locale,
        momentJsLocale: node_locale.toLowerCase(),
        key: contentful_id,
      },
    };

    createPage(pageOpts);
  });

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
