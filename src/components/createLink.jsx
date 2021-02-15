// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import blogSlugs from '../../data/blog-slugs.json';
import allFiles from '../__generated__/all-pages';
import pageSlugs from '../data/page-slugs.json';

const pageKeySlashIndex = 1;

const createLocalizedSlug = (locale, slug) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultLocale
          }
        }
      }
    `,
  );

  const { defaultLocale } = site.siteMetadata;

  const pageKey = slug.substring(pageKeySlashIndex);
  let localized = slug;

  if (pageKey in pageSlugs && locale in pageSlugs[pageKey]) {
    localized = `/${pageSlugs[pageKey][locale]}`;
  }

  const localeVersion = pageKey === '' ? `/${locale}` : `/${locale}${localized}`;

  if (locale !== defaultLocale && allFiles.includes(localeVersion)) {
    localized = localeVersion;
  }

  return localized;
};

export default (currentLocale) => {
  return (linkProps) => {
    if (linkProps.to.startsWith('/blog/')) {
      const page = createLocalizedSlug(currentLocale, '/blog');

      let { to } = linkProps;

      const blogPostFilenameRegex = /(.+)\/(.+)/;

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
