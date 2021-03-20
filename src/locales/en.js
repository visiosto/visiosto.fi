// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import { defineMessages } from 'react-intl';

import blogMessages from './en/blog';
import footerMessages from './en/footer';
import headerMessages from './en/header';
import indexMessages from './en/index';
import managementMessages from './en/management';
import metaMessages from './en/meta';
import navigationMessages from './en/navigation';
import notFoundMessages from './en/not-found';
import searchMessages from './en/search';

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
