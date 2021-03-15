// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const pageSlugs = require('../../../data/markdown-page-slugs.json');
const config = require('../../../gatsby-config');

module.exports = (locale, filename, reporter) => {
  const defaultLanguage = config.siteMetadata.defaultLocale;

  reporter.verbose(`Resolving slug for ${filename} with locale ${locale}`);

  const path = filename.split('/').reduce(
    (previous, current) => {
      return `${previous}/${pageSlugs[current][locale]}`;
    },
    locale === defaultLanguage ? '' : `/${locale}`,
  );

  reporter.verbose(`Set the path to ${path}`);

  return path;
};
