// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import AnchorLink from './AnchorLink';

import allFiles from '../__generated__/all-pages';
import pageIds from '../data/page-ids.json';
import pageSlugs from '../data/page-slugs.json';

import stripHashedLocation from '../utils/anchor-link/stripHashedLocation';

const pageKeySlashIndex = 1;

export default (currentLocale) => {
  const paths = allFiles;
  const ids = pageIds;
  const slugs = pageSlugs;

  return (linkProps) => {
    const hashedLocation = linkProps.to.split('#')[1];
    const pageKey = stripHashedLocation(linkProps.to).substring(pageKeySlashIndex);
    let { to } = linkProps;

    if (pageKey in slugs && currentLocale in slugs[pageKey]) {
      to = `/${slugs[pageKey][currentLocale]}`;
    }

    const localeVersion = pageKey === '' ? `/${currentLocale}` : `/${currentLocale}${to}`;

    if (currentLocale !== 'fi' && paths.includes(localeVersion)) {
      to = localeVersion;
    }

    const pageKeyFull = pageKey === '' ? 'index' : pageKey;

    if (pageKeyFull in ids && hashedLocation in ids[pageKeyFull] && currentLocale in ids[pageKeyFull][hashedLocation]) {
      if (currentLocale === 'fi' && pageKeyFull === 'index') {
        to = `/#${ids[pageKeyFull][hashedLocation][currentLocale]}`;
      } else {
        to = `${to}#${ids[pageKeyFull][hashedLocation][currentLocale]}`;
      }
    }

    return <AnchorLink {...linkProps} to={to} />;
  };
};
