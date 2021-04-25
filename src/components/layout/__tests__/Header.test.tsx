// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { screen } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';

import Header from '../Header';

import headerQuery from '../../../../test/data/headerQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Header component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(headerQuery));

  it('renders index page header correctly', () => {
    const { container } = renderWithProviders(
      <Header locale="fi" pageID="rXFgpak6HKjCuUXjFo9KW" home />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByAltText('Visioston logo')).toBeInTheDocument();
  });

  it('renders page header correctly', () => {
    const { container } = renderWithProviders(
      <Header locale="fi" pageID="3rPdaUCw3nKo73b5Z6thWW" />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByAltText('Visioston logo')).toBeInTheDocument();
  });
});
