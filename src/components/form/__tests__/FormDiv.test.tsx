// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import FormDiv from '../FormDiv';

import renderWithProviders from '../../../../test/renderWithProviders';

describe('Form divider component', () => {
  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(<FormDiv>Content</FormDiv>, 'fi');

    expect(container).toMatchSnapshot();

    expect(getByText('Content')).toBeInTheDocument();
  });
});
