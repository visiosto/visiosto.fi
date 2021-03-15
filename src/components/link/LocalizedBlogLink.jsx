// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { BLOG_SLUG } from '../../constants';

import pageSlugs from '../../data/page-slugs.json';

const LocalizedBlogLink = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultLocale
          }
        }
        allContentfulBlogPost {
          edges {
            node {
              contentful_id
              node_locale
              slug
            }
          }
        }
      }
    `,
  );

  const { defaultLocale } = data.site.siteMetadata;

  console.log(data);

  const node = data.allContentfulBlogPost.edges.filter(
    ({ node }) =>
      node.contentful_id === props.to &&
      (props.locale === 'en' ? node.node_locale === 'en-GB' : node.node_locale === props.locale),
  )[0].node;

  console.log(node);

  const blogSlug =
    props.locale === defaultLocale
      ? `/${pageSlugs[BLOG_SLUG][props.locale]}`
      : `/${props.locale}/${pageSlugs[BLOG_SLUG][props.locale]}`;

  return <Link {...props} to={`${blogSlug}/${node.slug}`} />;
};

export default LocalizedBlogLink;
