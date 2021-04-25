// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import LocalizedAnchorLink from '../LocalizedAnchorLink';

import localizedLinkQuery from '../../../../test/data/localizedAnchorLinkQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Localized anchor link component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(localizedLinkQuery));

  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(
      <LocalizedAnchorLink to="3N71KokEFuP1VCArc8GpKw#portfolio" locale="fi">
        A link
      </LocalizedAnchorLink>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('A link')).toBeInTheDocument();
  });
});
