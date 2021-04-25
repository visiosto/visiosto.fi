// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import GlobalStyle from '../GlobalStyle';

import renderWithProviders from '../../../../test/renderWithProviders';

describe('Global style component', () => {
  it('renders correctly', () => {
    const { container } = renderWithProviders(<GlobalStyle />, 'fi');

    expect(container).toMatchSnapshot();
  });
});
