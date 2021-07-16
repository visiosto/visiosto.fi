// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import { defineMessages } from 'react-intl';

import authorMessages from './en/authorMessages';
import blogMessages from './en/blogMessages';
import categoryMessages from './en/categoryMessages';
import clientRegisterBusinessMessages from './fi/clientRegisterBusinessMessages';
import clientRegisterPersonMessages from './fi/clientRegisterPersonMessages';
import contactFormMessages from './en/contactFormMessages';
import cookieNoticeMessages from './en/cookieNoticeMessages';
import footerMessages from './en/footerMessages';
import headerMessages from './en/headerMessages';
import headMessages from './en/headMessages';
import managementMessages from './en/managementMessages';
import notFoundMessages from './en/notFoundMessages';
import portfolioMessages from './en/portfolioMessages';
import searchMessages from './en/searchMessages';

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
  ...headMessages,
  ...managementMessages,
  ...notFoundMessages,
  ...portfolioMessages,
  ...searchMessages,
};

export const locale = defineMessages(messages);
