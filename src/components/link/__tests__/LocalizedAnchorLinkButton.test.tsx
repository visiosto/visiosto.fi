// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import LocalizedAnchorLinkButton from '../LocalizedAnchorLinkButton';

import localizedLinkQuery from '../../../../test/data/localizedAnchorLinkQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Localized anchor link button component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(localizedLinkQuery));

  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(
      <LocalizedAnchorLinkButton locale="fi" to="3N71KokEFuP1VCArc8GpKw#portfolio">
        A link
      </LocalizedAnchorLinkButton>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('A link')).toBeInTheDocument();
  });
});
