// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import { defineMessages } from 'react-intl';

import authorMessages from './fi/authorMessages';
import blogMessages from './fi/blogMessages';
import categoryMessages from './fi/categoryMessages';
import clientRegisterBusinessMessages from './fi/clientRegisterBusinessMessages';
import clientRegisterPersonMessages from './fi/clientRegisterPersonMessages';
import contactFormMessages from './fi/contactFormMessages';
import cookieNoticeMessages from './fi/cookieNoticeMessages';
import footerMessages from './fi/footerMessages';
import headerMessages from './fi/headerMessages';
import managementMessages from './fi/managementMessages';
import metaMessages from './fi/metaMessages';
import notFoundMessages from './fi/notFoundMessages';
import searchMessages from './fi/searchMessages';

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
