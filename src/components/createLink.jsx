// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link } from 'gatsby';

import blogSlugs from '../../data/blog-slugs.json';
import allFiles from '../__generated__/all-pages';
import pageSlugs from '../data/page-slugs.json';
import { DEFAULT_LANGUAGE } from '../constants';

const pageKeySlashIndex = 1;

const createLocalizedSlug = (locale, slug) => {
  const pageKey = slug.substring(pageKeySlashIndex);
  let localized = slug;

  if (pageKey in pageSlugs && locale in pageSlugs[pageKey]) {
    localized = `/${pageSlugs[pageKey][locale]}`;
  }

  const localeVersion = pageKey === '' ? `/${locale}` : `/${locale}${localized}`;

  if (locale !== DEFAULT_LANGUAGE && allFiles.includes(localeVersion)) {
    localized = localeVersion;
  }

  return localized;
};

const createLink = (currentLocale) => {
  return (linkProps) => {
    if (linkProps.to.startsWith('/blog/')) {
      const page = createLocalizedSlug(currentLocale, '/blog');

      let { to } = linkProps;

      const blogPostFilenameRegex = /(.+)\/(.+)/;

      // Blog posts don't have embedded permalinks.
      // Their slugs follow a pattern: /blog/<year>/<month>/<day>/<slug>
      // The date portion comes from the file name: <date>-<title>.md
      const filename = blogPostFilenameRegex.exec(linkProps.to.substring(pageKeySlashIndex))[2];

      const linkPath = `${page}/${blogSlugs[filename][currentLocale]}`;

      if (
        filename in blogSlugs &&
        currentLocale in blogSlugs[filename] &&
        allFiles.includes(linkPath)
      ) {
        to = linkPath;
      }

      return <Link {...linkProps} to={to} />;
    } else {
      return <Link {...linkProps} to={createLocalizedSlug(currentLocale, linkProps.to)} />;
    }
  };
};

export default createLink;
