// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { AUTHOR_SLUG, BLOG_SLUG } from '../../constants';

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
  if (props.to.startsWith(`/${BLOG_SLUG}/`)) {
    const page = createLocalizedSlug(props.locale, `/${BLOG_SLUG}`);

    let { to } = props;

    const filename = /(.+)\/(.+)/.exec(props.to.substring(pageKeySlashIndex))[2];

    const linkPath = `${page}/${blogSlugs[filename][props.locale]}`;

    if (filename in blogSlugs && props.locale in blogSlugs[filename]) {
      to = linkPath;
    }

    return <Link {...props} to={to} />;
  } else if (props.to.startsWith(`/${AUTHOR_SLUG}/`)) {
    const page = createLocalizedSlug(props.locale, `/${AUTHOR_SLUG}`);

    let { to } = props;

    const filename = /(.+)\/(.+)/.exec(props.to.substring(pageKeySlashIndex))[2];

    const linkPath = `${page}/${filename}`;

    to = linkPath;

    return <Link {...props} to={to} />;
  } else {
    return <Link {...props} to={createLocalizedSlug(props.locale, props.to)} />;
  }
};

export default LocalizedLink;
