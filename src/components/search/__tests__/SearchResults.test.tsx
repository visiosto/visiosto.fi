// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import SearchResults from '../SearchResults';

import renderWithProviders from '../../../../test/renderWithProviders';

describe('Search results component', () => {
  it('renders correctly', () => {
    const { container } = renderWithProviders(
      <SearchResults error={false} loading={false} queryResults={[]} searchResults={[]} show />,
      'fi',
    );

    expect(container).toMatchSnapshot();
  });
});
