// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const config = require('../../../gatsby-config');
const pageSlugs = require('../../../src/data/page-slugs.json');

module.exports = (locale, filename, reporter) => {
  const defaultLanguage = config.siteMetadata.defaultLocale;

  // prettier-ignore
  const authorPath = locale === defaultLanguage
    ? `${pageSlugs.author[locale]}`
    : `${locale}/${pageSlugs.author[locale]}`;

  reporter.verbose('Set the author path to', authorPath);

  const slug = `/${authorPath}/${filename}`;

  reporter.verbose('The slug path for the author page is', slug);

  return slug;
};
