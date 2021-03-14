// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const config = require('../../../gatsby-config');
const pageSlugs = require('../../../src/data/page-slugs.json');
const categorySlugs = require('../../../data/category-slugs.json');

module.exports = (locale, filename, reporter) => {
  const defaultLanguage = config.siteMetadata.defaultLocale;

  // prettier-ignore
  const categoryPath = locale === defaultLanguage
    ? `${pageSlugs.category[locale]}`
    : `${locale}/${pageSlugs.category[locale]}`;

  reporter.verbose(`Set the category path to ${categoryPath}`);

  const slug = `/${categoryPath}/${categorySlugs[filename][locale]}`;

  reporter.verbose(`The slug path for the category page is ${slug}`);

  return slug;
};
