// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import { defineMessages } from 'react-intl';

import blogMessages from './fi/blog';
import footerMessages from './fi/footer';
import headerMessages from './fi/header';
import indexMessages from './fi/index';
import metaMessages from './fi/meta';
import navigationMessages from './fi/navigation';

export const messages = {
  ...blogMessages,
  ...footerMessages,
  ...headerMessages,
  ...indexMessages,
  ...metaMessages,
  ...navigationMessages,
};

export const lang = defineMessages(messages);
