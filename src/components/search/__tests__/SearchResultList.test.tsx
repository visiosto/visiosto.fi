// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import SearchResultList from '../SearchResultList';

import renderWithProviders from '../../../../test/renderWithProviders';

describe('Search result list component', () => {
  it('renders correctly', () => {
    const { container } = renderWithProviders(<SearchResultList queryResults={[]} />, 'fi');

    expect(container).toMatchSnapshot();
  });
});
