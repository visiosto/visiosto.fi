// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import SearchContainer from '../SearchContainer';

import searchQuery from '../../../../test/data/searchQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Search container component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(searchQuery));

  it('renders correctly', () => {
    const { container } = renderWithProviders(<SearchContainer locale="fi" />, 'fi');

    expect(container).toMatchSnapshot();
  });
});
