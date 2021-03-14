// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const path = require('path');

const createCategorySlug = require('./createCategorySlug');

const categories = require('../../../data/categories.json');

module.exports = async (actions, graphql, reporter) => {
  const { createPage } = actions;

  const query = await graphql(
    `
      {
        site {
          siteMetadata {
            locales
          }
        }
      }
    `,
  );

  if (query.errors) {
    reporter.panicOnBuild('Error while running GraphQL query');
    return;
  }

  const categoryTemplate = path.resolve('src', 'templates', 'category.jsx');

  Object.keys(categories).forEach((key) => {
    query.data.site.siteMetadata.locales.forEach((locale) => {
      const slug = createCategorySlug(locale, key, reporter);

      reporter.verbose(`The path for the category page is ${slug}`);

      const jsLocale = locale === 'en' ? 'en-GB' : locale;
      const momentJsLocale = locale === 'en' ? 'en-gb' : locale;

      reporter.verbose(`The Moment.js locale to ${momentJsLocale}`);

      const pageOpts = {
        path: slug,
        component: categoryTemplate,
        context: {
          lang: locale,
          jsLocale,
          momentJsLocale,
          key: `/category/${key}`,
          category: key,
        },
      };

      createPage(pageOpts);
    });
  });
};
