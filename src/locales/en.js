// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import { defineMessages } from 'react-intl';

import blogMessages from './en/blog';
import footerMessages from './en/footer';
import headerMessages from './en/header';
import indexMessages from './en/index';
import metaMessages from './en/meta';
import navigationMessages from './en/navigation';
import notFoundMessages from './en/not-found';
import searchMessages from './fi/search';

export const messages = {
  ...blogMessages,
  ...footerMessages,
  ...headerMessages,
  ...indexMessages,
  ...metaMessages,
  ...navigationMessages,
  ...notFoundMessages,
  ...searchMessages,
};

export const lang = defineMessages(messages);
