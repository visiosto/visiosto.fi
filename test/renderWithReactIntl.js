// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

export default function renderWithReactIntl(component, locale) {
  // eslint-disable-next-line global-require, no-undef, import/no-dynamic-require
  const messages = require(`../src/locales/${locale}`).locale;

  return render(
    // eslint-disable-next-line react/jsx-filename-extension
    <IntlProvider locale={locale} messages={messages}>
      {component}
    </IntlProvider>,
  );
}
