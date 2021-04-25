// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import Navigation from '../Navigation';

import navigationQuery from '../../../../test/data/navigationQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Navigation component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(navigationQuery));

  it('renders Finnish correctly', () => {
    const { container, getByText } = renderWithProviders(<Navigation locale="fi" />, 'fi');

    expect(container).toMatchSnapshot();

    expect(getByText('Etusivu')).toBeInTheDocument();
    expect(getByText('Portfolio')).toBeInTheDocument();
    expect(getByText('Yhteystiedot')).toBeInTheDocument();
    expect(getByText('Blogi')).toBeInTheDocument();
  });

  it('renders English correctly', () => {
    const { container, getByText } = renderWithProviders(<Navigation locale="en-GB" />, 'en');

    expect(container).toMatchSnapshot();

    expect(getByText('Front Page')).toBeInTheDocument();
    expect(getByText('Portfolio')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
    expect(getByText('Blog')).toBeInTheDocument();
  });
});
