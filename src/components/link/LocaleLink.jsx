// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import LocalizedAuthorLink from './LocalizedAuthorLink';
import LocalizedBlogLink from './LocalizedBlogLink';
import LocalizedCategoryLink from './LocalizedCategoryLink';
import LocalizedPageLink from './LocalizedPageLink';

import { AUTHOR_SLUG } from '../../constants';

import pageSlugs from '../../data/page-slugs.json';

const pageKeySlashIndex = 1;

const createLocalizedSlug = (site, toLang, slug) => {
  const { defaultLocale } = site.siteMetadata;

  if (slug) {
    return slug.split('/').reduce(
      (previous, current) => {
        const slugs = pageSlugs;
        return `${previous}/${slugs[current][toLang]}`;
      },
      toLang === defaultLocale ? '' : `/${toLang}`,
    );
  } else {
    return toLang === defaultLocale ? '/' : `/${toLang}`;
  }
};

const LocaleLink = (props) => {
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

  const toLang = props.to;
  console.log('The page key for the locale link is', props.pageKey);

  const contentfulIdMatches = data.allContentfulEntry.edges.filter(
    ({ node }) => node.contentful_id === props.pageKey,
  );

  console.log('The Contentful matches are', contentfulIdMatches);

  if (contentfulIdMatches.length === 0) {
    if (props.pageKey.startsWith(`/${AUTHOR_SLUG}/`)) {
      const page = createLocalizedSlug(data.site, toLang, AUTHOR_SLUG);

      const filename = /(.+)\/(.+)/.exec(props.pageKey.substring(pageKeySlashIndex))[2];

      const linkPath = `${page}/${filename}`;

      return <Link {...props} to={linkPath} />;
    } else {
      return <Link {...props} to={createLocalizedSlug(data.site, toLang, props.pageKey)} />;
    }
  } else {
    console.log('Creating Contentful locale link to', toLang, 'for id', props.pageKey);

    console.log(data);

    const node = data.allContentfulEntry.edges.filter(
      ({ node }) =>
        node.contentful_id === props.pageKey &&
        (toLang === 'en' ? node.node_locale === 'en-GB' : node.node_locale === toLang),
    )[0].node;

    console.log(node);

    switch (node.internal.type) {
      case 'ContentfulAuthor': {
        return <LocalizedAuthorLink {...props} to={props.pageKey} locale={toLang} />;
      }
      case 'ContentfulBlogPost': {
        return <LocalizedBlogLink {...props} to={props.pageKey} locale={toLang} />;
      }
      case 'ContentfulCategory': {
        return <LocalizedCategoryLink {...props} to={props.pageKey} locale={toLang} />;
      }
      case 'ContentfulPage': {
        return <LocalizedPageLink {...props} to={props.pageKey} locale={toLang} />;
      }
      default:
        break;
    }
  }
};

export default LocaleLink;
