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
      <LocaleLink to="en-GB" pageID="3N71KokEFuP1VCArc8GpKw">
        Linkki
      </LocaleLink>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Linkki')).toBeInTheDocument();
  });

  it('renders English correctly', () => {
    const { container, getByText } = renderWithProviders(
      <LocaleLink to="fi" pageID="3N71KokEFuP1VCArc8GpKw">
        A link
      </LocaleLink>,
      'en',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('A link')).toBeInTheDocument();
  });
});
