// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from "react";
import {Link} from "gatsby";

import {allFiles} from "../__generated__/all-pages";

import pageSlugs from "../data/page-slugs.json";

const pageKeySlashIndex = 1;

const createLink = currentLocale => {
  const paths = allFiles;
  const slugs = pageSlugs;

  return linkProps => {
    const pageKey = linkProps.to.substring(pageKeySlashIndex);
    let {to} = linkProps;

    if (pageKey in slugs && currentLocale in slugs[pageKey]) {
      to = `/${slugs[pageKey][currentLocale]}`;
    }

    const localeVersion =
      pageKey === "" ? `/${currentLocale}` : `/${currentLocale}${to}`;

    if (currentLocale !== "fi" && paths.includes(localeVersion)) {
      to = localeVersion;
    }

    return <Link {...linkProps} to={to} />;
  };
};

export default createLink;
