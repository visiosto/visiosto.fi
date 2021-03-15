// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { AUTHOR_SLUG, BLOG_SLUG, CATEGORY_SLUG } from '../../constants';

import blogSlugs from '../../../data/blog-slugs.json';
import categorySlugs from '../../../data/category-slugs.json';
import markdownPageSlugs from '../../../data/markdown-page-slugs.json';
import pageSlugs from '../../data/page-slugs.json';

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

  if (slug) {
    return slug.split('/').reduce(
      (previous, current) => {
        const slugs = current in pageSlugs ? pageSlugs : markdownPageSlugs;
        return `${previous}/${slugs[current][toLang]}`;
      },
      toLang === defaultLocale ? '' : `/${toLang}`,
    );
  } else {
    return toLang === defaultLocale ? '/' : `/${toLang}`;
  }
};

const LocaleLink = (props) => {
  const toLang = props.to;
  console.log('The page key for the locale link is', props.pageKey);
  if (props.pageKey.startsWith(`/${BLOG_SLUG}/`)) {
    const page = createLocalizedSlug(toLang, BLOG_SLUG);

    const filename = /(.+)\/(.+)/.exec(props.pageKey.substring(pageKeySlashIndex))[2];

    const linkPath = `${page}/${blogSlugs[filename][toLang]}`;

    return <Link {...props} to={linkPath} />;
  } else if (props.pageKey.startsWith(`/${AUTHOR_SLUG}/`)) {
    const page = createLocalizedSlug(toLang, AUTHOR_SLUG);

    const filename = /(.+)\/(.+)/.exec(props.pageKey.substring(pageKeySlashIndex))[2];

    const linkPath = `${page}/${filename}`;

    return <Link {...props} to={linkPath} />;
  } else if (props.pageKey.startsWith(`/${CATEGORY_SLUG}/`)) {
    const page = createLocalizedSlug(toLang, CATEGORY_SLUG);

    const filename = /(.+)\/(.+)/.exec(props.pageKey.substring(pageKeySlashIndex))[2];

    const linkPath = `${page}/${categorySlugs[filename][toLang]}`;

    return <Link {...props} to={linkPath} />;
  } else {
    return <Link {...props} to={createLocalizedSlug(toLang, props.pageKey)} />;
  }
};

export default LocaleLink;
