// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const pageSlugs = require('../../../data/markdown-page-slugs.json');
const config = require('../../../gatsby-config');

module.exports = (locale, filename, reporter) => {
  const defaultLanguage = config.siteMetadata.defaultLocale;

  // prettier-ignore
  const path = locale === defaultLanguage
    ? `/${pageSlugs[filename][locale]}`
    : `/${locale}/${pageSlugs[filename][locale]}`;

  reporter.verbose('Set the path to', path);

  return path;
};
