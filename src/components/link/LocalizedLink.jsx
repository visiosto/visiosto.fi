// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import blogSlugs from '../../../data/blog-slugs.json';
import markdownPageSlugs from '../../../data/markdown-page-slugs.json';
import pageSlugs from '../../data/page-slugs.json';

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
  } else if (pageKey in markdownPageSlugs && locale in markdownPageSlugs[pageKey]) {
    localized = `/${markdownPageSlugs[pageKey][locale]}`;
  }

  const localeVersion = pageKey === '' ? `/${locale}` : `/${locale}${localized}`;

  if (locale !== defaultLocale) {
    localized = localeVersion;
  }

  return localized;
};

const LocalizedLink = (props) => {
  if (props.to.startsWith('/blog/')) {
    const page = createLocalizedSlug(props.locale, '/blog');

    let { to } = props;

    const blogPostFilenameRegex = /(.+)\/(.+)/;

    const filename = blogPostFilenameRegex.exec(props.to.substring(pageKeySlashIndex))[2];

    const linkPath = `${page}/${blogSlugs[filename][props.locale]}`;

    if (filename in blogSlugs && props.locale in blogSlugs[filename]) {
      to = linkPath;
    }

    return <Link {...props} to={to} />;
  } else {
    return <Link {...props} to={createLocalizedSlug(props.locale, props.to)} />;
  }
};

export default LocalizedLink;
