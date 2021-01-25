// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import pageSlugs from '../data/page-slugs.json';

export default (baseUrl, pageKey) => {
  const slugs = pageSlugs;

  return (locale) => {
    let url = locale === 'fi' ? '/' : `/${locale}`;

    if (pageKey in slugs && locale in slugs[pageKey]) {
      url = `/${locale}/${slugs[pageKey][locale]}`;

      if (locale === 'fi') {
        url = `/${slugs[pageKey][locale]}`;
      }
    }

    return `${baseUrl}${url}`;
  };
};
