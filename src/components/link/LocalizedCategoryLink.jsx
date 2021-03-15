// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { CATEGORY_SLUG } from '../../constants';

import pageSlugs from '../../data/page-slugs.json';

const LocalizedCategoryLink = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultLocale
          }
        }
        allContentfulCategory {
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

  const node = data.allContentfulCategory.edges.filter(
    ({ node }) =>
      node.contentful_id === props.to &&
      (props.locale === 'en' ? node.node_locale === 'en-GB' : node.node_locale === props.locale),
  )[0].node;

  console.log(node);

  const categorySlug =
    props.locale === defaultLocale
      ? `/${pageSlugs[CATEGORY_SLUG][props.locale]}`
      : `/${props.locale}/${pageSlugs[CATEGORY_SLUG][props.locale]}`;

  return <Link {...props} to={`${categorySlug}/${node.slug}`} />;
};

export default LocalizedCategoryLink;
