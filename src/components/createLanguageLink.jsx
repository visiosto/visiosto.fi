// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link } from 'gatsby';

import blogSlugs from '../../data/blog-slugs.json';
import pageSlugs from '../data/page-slugs.json';
import { DEFAULT_LANGUAGE } from '../constants';

const pageKeySlashIndex = 1;

const createLocalizedSlug = (toLang, slug) => {
  let localized = toLang === DEFAULT_LANGUAGE ? '/' : `/${toLang}`;

  if (slug in pageSlugs && toLang in pageSlugs[slug]) {
    localized = `/${toLang}/${pageSlugs[slug][toLang]}`;

    if (toLang === DEFAULT_LANGUAGE) {
      localized = `/${pageSlugs[slug][toLang]}`;
    }
  }

  return localized;
};

const createLanguageLink = (pageKey) => {
  return (linkProps) => {
    const toLang = linkProps.to;
    if (pageKey.startsWith('/blog/')) {
      const page = createLocalizedSlug(toLang, 'blog');

      const blogPostFilenameRegex = /([0-9]+)\/([0-9]+)\/([0-9]+)\/(.+)/;

      // Blog posts don't have embedded permalinks.
      // Their slugs follow a pattern: /blog/<year>/<month>/<day>/<slug>
      // The date portion comes from the file name: <date>-<title>.md
      const match = blogPostFilenameRegex.exec(pageKey.substring(pageKeySlashIndex));
      const year = match[1];
      const month = match[2];
      const day = match[3];
      const filename = match[4];

      const date = `${year}-${month}-${day}`;

      const linkPath = `${page}/${year}/${month}/${day}/${blogSlugs[date][filename][toLang]}`;

      return <Link {...linkProps} to={linkPath} />;
    } else {
      return <Link {...linkProps} to={createLocalizedSlug(toLang, pageKey)} />;
    }
  };
};

export default createLanguageLink;
