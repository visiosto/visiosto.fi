// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import SearchForm from '../SearchForm';

import searchQuery from '../../../../test/data/searchQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Search form component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(searchQuery));

  it('renders correctly', () => {
    const { container } = renderWithProviders(
      <SearchForm
        error={false}
        loading={false}
        onFocus={jest.fn()}
        searchData={jest.fn()}
        searchQuery="Searching"
      />,
      'fi',
    );

    expect(container).toMatchSnapshot();
  });
});
