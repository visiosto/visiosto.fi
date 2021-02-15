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

      const blogPostFilenameRegex = /([0-9]+)\/([0-9]+)\/([0-9]+)\/(.+)/;

      // Blog posts don't have embedded permalinks.
      // Their slugs follow a pattern: /blog/<year>/<month>/<day>/<slug>
      // The date portion comes from the file name: <date>-<title>.md
      const match = blogPostFilenameRegex.exec(linkProps.to.substring(pageKeySlashIndex));
      const year = match[1];
      const month = match[2];
      const day = match[3];
      const filename = match[4];

      const date = `${year}-${month}-${day}`;

      const linkPath = `${page}/${year}/${month}/${day}/${blogSlugs[date][filename][currentLocale]}`;

      if (
        date in blogSlugs &&
        filename in blogSlugs[date] &&
        currentLocale in blogSlugs[date][filename] &&
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
