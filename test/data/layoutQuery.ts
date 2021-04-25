// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import footerQuery from './footerQuery';
import headerQuery from './headerQuery';
import headQuery from './headQuery';
import localizedLinkQuery from './localizedLinkQuery';
import navigationQuery from './navigationQuery';

const { site: linkSite, ...pages } = localizedLinkQuery;

export default {
  ...footerQuery,
  ...headerQuery,
  ...headQuery,
  ...navigationQuery,
  ...pages,
  site: {
    siteMetadata: {
      ...linkSite.siteMetadata,
      ...headerQuery.site.siteMetadata,
      ...headQuery.site.siteMetadata,
      ...footerQuery.site.siteMetadata,
      simpleLocales: {
        en_GB: 'en',
        fi: 'fi',
      },
    },
  },
};
