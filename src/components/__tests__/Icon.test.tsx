// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import Icon from '../Icon';

import renderWithProviders from '../../../test/renderWithProviders';

describe('Icon component', () => {
  it('renders correctly', () => {
    const { container } = renderWithProviders(<Icon icon="tune" />, 'fi');

    expect(container).toMatchSnapshot();
  });
});
