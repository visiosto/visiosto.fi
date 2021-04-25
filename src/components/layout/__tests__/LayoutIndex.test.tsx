// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import '../../../../test/matchMedia';

import React from 'react';
import { screen } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';

import LayoutIndex from '../LayoutIndex';

import layoutQuery from '../../../../test/data/layoutQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Index layout component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(layoutQuery));

  it('renders correctly', () => {
    const { container } = renderWithProviders(
      <LayoutIndex locale="fi" pageID="rXFgpak6HKjCuUXjFo9KW" title="Etusivu">
        <p>Test content</p>
      </LayoutIndex>,
      'fi',
    );

    expect(container).toMatchSnapshot();
  });
});
