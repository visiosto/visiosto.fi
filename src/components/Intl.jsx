// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';

import { IntlProvider } from 'react-intl';

import { DEFAULT_LANGUAGE } from '../constants';

const Intl = ({ children, locale }) => {
  let messages = require(`../locales/${DEFAULT_LANGUAGE}`).lang; // eslint-disable-line global-require, no-undef

  try {
    messages = require(`../locales/${locale}`).lang; // eslint-disable-line global-require, no-undef
  } catch (error) {
    // Do nothing and use the default.
  }

  return (
    <IntlProvider locale={locale || DEFAULT_LANGUAGE} messages={messages}>
      {children}
    </IntlProvider>
  );
};

Intl.propTypes = {
  children: PropTypes.node,
  locale: PropTypes.string,
};

export default Intl;
