// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import AnchorLink from './AnchorLink';

import pageIds from '../../data/page-ids.json';
import pageSlugs from '../../data/page-slugs.json';

import stripHashedLocation from '../../util/anchor-link/stripHashedLocation';

const pageKeySlashIndex = 1;

const LocalizedAnchorLink = (props) => {
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

  const hashedLocation = props.to.split('#')[1];
  const pageKey = stripHashedLocation(props.to).substring(pageKeySlashIndex);
  let { to } = props;

  if (pageKey in pageSlugs && props.locale in pageSlugs[pageKey]) {
    to = `/${pageSlugs[pageKey][props.locale]}`;
  }

  const localeVersion = pageKey === '' ? `/${props.locale}` : `/${props.locale}${to}`;

  if (props.locale !== defaultLocale) {
    to = localeVersion;
  }

  const pageKeyFull = pageKey === '' ? 'index' : pageKey;

  if (
    pageKeyFull in pageIds &&
    hashedLocation in pageIds[pageKeyFull] &&
    props.locale in pageIds[pageKeyFull][hashedLocation]
  ) {
    if (props.locale === defaultLocale && pageKeyFull === 'index') {
      to = `/#${pageIds[pageKeyFull][hashedLocation][props.locale]}`;
    } else {
      to = `${to}#${pageIds[pageKeyFull][hashedLocation][props.locale]}`;
    }
  }

  return <AnchorLink {...props} to={to} />;
};

export default LocalizedAnchorLink;
