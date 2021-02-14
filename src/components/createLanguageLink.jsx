// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link } from 'gatsby';

import pageSlugs from '../data/page-slugs.json';
import { DEFAULT_LANGUAGE } from '../constants';

const createLanguageLink = (pageKey) => {
  const slugs = pageSlugs;

  return (linkProps) => {
    const toLang = linkProps.to;
    let to = toLang === DEFAULT_LANGUAGE ? '/' : `/${toLang}`;

    if (pageKey in slugs && toLang in slugs[pageKey]) {
      to = `/${toLang}/${slugs[pageKey][toLang]}`;

      if (toLang === DEFAULT_LANGUAGE) {
        to = `/${slugs[pageKey][toLang]}`;
      }
    }

    return <Link {...linkProps} to={to} />;
  };
};

export default createLanguageLink;
