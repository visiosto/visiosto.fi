// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import blogSlugs from '../../data/blog-slugs.json';
import pageSlugs from '../data/page-slugs.json';

const pageKeySlashIndex = 1;

const createLocalizedSlug = (toLang, slug) => {
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

  let localized = toLang === defaultLocale ? '/' : `/${toLang}`;

  if (slug in pageSlugs && toLang in pageSlugs[slug]) {
    localized = `/${toLang}/${pageSlugs[slug][toLang]}`;

    if (toLang === defaultLocale) {
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

      const blogPostFilenameRegex = /(.+)\/(.+)/;

      const filename = blogPostFilenameRegex.exec(pageKey.substring(pageKeySlashIndex))[2];

      const linkPath = `${page}/${blogSlugs[filename][toLang]}`;

      return <Link {...linkProps} to={linkPath} />;
    } else {
      return <Link {...linkProps} to={createLocalizedSlug(toLang, pageKey)} />;
    }
  };
};

export default createLanguageLink;
