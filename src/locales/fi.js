// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import { defineMessages } from 'react-intl';

import authorMessages from './fi/author';
import blogMessages from './fi/blog';
import categoryMessages from './fi/category';
import clientRegisterMessages from './fi/client-register';
import contactFormMessages from './fi/contact-form';
import cookieNoticeMessages from './fi/cookie-notice';
import footerMessages from './fi/footer';
import headerMessages from './fi/header';
import managementMessages from './fi/management';
import metaMessages from './fi/meta';
import navigationMessages from './fi/navigation';
import notFoundMessages from './fi/not-found';
import searchMessages from './fi/search';

export const messages = {
  ...authorMessages,
  ...blogMessages,
  ...categoryMessages,
  ...clientRegisterMessages,
  ...contactFormMessages,
  ...cookieNoticeMessages,
  ...footerMessages,
  ...headerMessages,
  ...managementMessages,
  ...metaMessages,
  ...navigationMessages,
  ...notFoundMessages,
  ...searchMessages,
};

export const locale = defineMessages(messages);
