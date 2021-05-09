// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { Theme } from '@visiosto/components';

import App from '../src/components/App';

import theme from '../src/theme';

export default function renderWithProviders(component, locale) {
  // eslint-disable-next-line global-require, no-undef, import/no-dynamic-require
  const messages = require(`../src/locales/${locale}`).locale;

  return render(
    // eslint-disable-next-line react/jsx-filename-extension
    <App>
      <IntlProvider locale={locale} messages={messages}>
        <Theme theme={theme}>{component}</Theme>
      </IntlProvider>
    </App>,
  );
}
