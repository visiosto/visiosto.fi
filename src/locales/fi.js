// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import { defineMessages } from 'react-intl';

import blogMessages from './fi/blog';
import footerMessages from './fi/footer';
import headerMessages from './fi/header';
import indexMessages from './fi/index';
import managementMessages from './fi/management';
import metaMessages from './fi/meta';
import navigationMessages from './fi/navigation';
import notFoundMessages from './fi/not-found';
import searchMessages from './fi/search';

export const messages = {
  ...blogMessages,
  ...footerMessages,
  ...headerMessages,
  ...indexMessages,
  ...managementMessages,
  ...metaMessages,
  ...navigationMessages,
  ...notFoundMessages,
  ...searchMessages,
};

export const locale = defineMessages(messages);
