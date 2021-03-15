// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import LocalizedAuthorLink from './LocalizedAuthorLink';
import LocalizedBlogLink from './LocalizedBlogLink';
import LocalizedCategoryLink from './LocalizedCategoryLink';

import { AUTHOR_SLUG } from '../../constants';

import markdownPageSlugs from '../../../data/markdown-page-slugs.json';
import pageSlugs from '../../data/page-slugs.json';

const pageKeySlashIndex = 1;

const createLocalizedSlug = (site, locale, slug) => {
  const { defaultLocale } = site.siteMetadata;

  const pageKey = slug.substring(pageKeySlashIndex);

  if (pageKey) {
    return pageKey.split('/').reduce(
      (previous, current) => {
        const slugs = current in pageSlugs ? pageSlugs : markdownPageSlugs;
        return `${previous}/${slugs[current][locale]}`;
      },
      locale === defaultLocale ? '' : `/${locale}`,
    );
  } else {
    return locale === defaultLocale ? '/' : `/${locale}`;
  }
};

const LocalizedLink = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultLocale
          }
        }
        allContentfulEntry {
          edges {
            node {
              contentful_id
              node_locale
              internal {
                type
              }
            }
          }
        }
      }
    `,
  );

  console.log('Creating link to', props.to);

  if (props.to.startsWith('/')) {
    if (props.to.startsWith(`/${AUTHOR_SLUG}/`)) {
      const page = createLocalizedSlug(data.site, props.locale, `/${AUTHOR_SLUG}`);

      let { to } = props;

      const filename = /(.+)\/(.+)/.exec(props.to.substring(pageKeySlashIndex))[2];

      const linkPath = `${page}/${filename}`;

      to = linkPath;

      return <Link {...props} to={to} />;
    } else {
      return <Link {...props} to={createLocalizedSlug(data.site, props.locale, props.to)} />;
    }
  } else {
    console.log('Creating Contentful link to', props.to);

    console.log(data);

    const node = data.allContentfulEntry.edges.filter(
      ({ node }) =>
        node.contentful_id === props.to &&
        (props.locale === 'en' ? node.node_locale === 'en-GB' : node.node_locale === props.locale),
    )[0].node;

    console.log(node);

    switch (node.internal.type) {
      case 'ContentfulAuthor': {
        return <LocalizedAuthorLink {...props} />;
      }
      case 'ContentfulBlogPost': {
        return <LocalizedBlogLink {...props} />;
      }
      case 'ContentfulCategory': {
        return <LocalizedCategoryLink {...props} />;
      }
      default:
        break;
    }
  }
};

export default LocalizedLink;
