// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import { defineMessages } from 'react-intl';

import authorMessages from './en/author';
import blogMessages from './en/blog';
import categoryMessages from './en/category';
import clientRegisterBusinessMessages from './fi/client-register-business';
import clientRegisterPersonMessages from './fi/client-register-person';
import contactFormMessages from './en/contact-form';
import cookieNoticeMessages from './en/cookie-notice';
import footerMessages from './en/footer';
import headerMessages from './en/header';
import managementMessages from './en/management';
import metaMessages from './en/meta';
import notFoundMessages from './en/not-found';
import searchMessages from './en/search';

export const messages = {
  ...authorMessages,
  ...blogMessages,
  ...categoryMessages,
  ...clientRegisterBusinessMessages,
  ...clientRegisterPersonMessages,
  ...contactFormMessages,
  ...cookieNoticeMessages,
  ...footerMessages,
  ...headerMessages,
  ...managementMessages,
  ...metaMessages,
  ...notFoundMessages,
  ...searchMessages,
};

export const locale = defineMessages(messages);
