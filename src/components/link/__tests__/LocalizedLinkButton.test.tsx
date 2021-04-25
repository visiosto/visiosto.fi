// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import LocalizedLinkButton from '../LocalizedLinkButton';

import localizedLinkQuery from '../../../../test/data/localizedLinkQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Localized link button component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(localizedLinkQuery));

  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(
      <LocalizedLinkButton to="3N71KokEFuP1VCArc8GpKw" locale="fi">
        A link
      </LocalizedLinkButton>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('A link')).toBeInTheDocument();
  });
});
