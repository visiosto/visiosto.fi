// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

const config = require('../../../gatsby-config');
const pageSlugs = require('../../../src/data/page-slugs.json');
const blogSlugs = require('../../../data/blog-slugs.json');

module.exports = (locale, filename, reporter) => {
  const defaultLanguage = config.siteMetadata.defaultLocale;

  // prettier-ignore
  const blogPath = locale === defaultLanguage
    ? `${pageSlugs.blog[locale]}`
    : `${locale}/${pageSlugs.blog[locale]}`;

  reporter.verbose('Set the blog path to', blogPath);

  const slug = `/${blogPath}/${blogSlugs[filename][locale]}`;

  reporter.verbose('The slug path for the blog post page is', slug);

  return slug;
};
