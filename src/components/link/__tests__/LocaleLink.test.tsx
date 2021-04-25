// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import LocaleLink from '../LocaleLink';

import localizedLinkQuery from '../../../../test/data/localizedLinkQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Locale link component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(localizedLinkQuery));

  it('renders Finnish correctly', () => {
    const { container, getByText } = renderWithProviders(
      <LocaleLink pageID="3N71KokEFuP1VCArc8GpKw" to="en-GB">
        Linkki
      </LocaleLink>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Linkki')).toBeInTheDocument();
  });

  it('renders English correctly', () => {
    const { container, getByText } = renderWithProviders(
      <LocaleLink pageID="3N71KokEFuP1VCArc8GpKw" to="fi">
        A link
      </LocaleLink>,
      'en',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('A link')).toBeInTheDocument();
  });
});
