// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import LocalizedLink from './LocalizedLink';

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
  console.log('The page key for the locale link is', props.pageId);

  const contentfulIdMatches = data.allContentfulEntry.edges.filter(
    ({ node }) => node.contentful_id === props.pageId,
  );

  console.log('The Contentful matches are', contentfulIdMatches);

  if (contentfulIdMatches.length === 0) {
    if (props.pageId.startsWith(`/${AUTHOR_SLUG}/`)) {
      const page = createLocalizedSlug(data.site, toLang, AUTHOR_SLUG);

      const filename = /(.+)\/(.+)/.exec(props.pageId.substring(pageKeySlashIndex))[2];

      const linkPath = `${page}/${filename}`;

      return <Link to={linkPath} {...props} />;
    } else {
      return <Link to={createLocalizedSlug(data.site, toLang, props.pageId)} {...props} />;
    }
  } else {
    console.log('Creating Contentful locale link to', toLang, 'for id', props.pageId);

    console.log(data);

    const node = data.allContentfulEntry.edges.filter(
      ({ node }) => node.contentful_id === props.pageId && node.node_locale === toLang,
    )[0].node;

    console.log(node);

    return <LocalizedLink to={props.pageId} locale={toLang} />;

    // switch (node.internal.type) {
    //   case 'ContentfulAuthor': {
    //     return <LocalizedAuthorLink to={props.pageId} locale={toLang} {...props} />;
    //   }
    //   case 'ContentfulBlogPost': {
    //     return <LocalizedBlogLink to={props.pageId} locale={toLang} {...props} />;
    //   }
    //   case 'ContentfulCategory': {
    //     return <LocalizedCategoryLink to={props.pageId} locale={toLang} {...props} />;
    //   }
    //   case 'ContentfulPage': {
    //     return <LocalizedPageLink to={props.pageId} locale={toLang} {...props} />;
    //   }
    //   default:
    //     break;
    // }
  }
};

export default LocaleLink;
