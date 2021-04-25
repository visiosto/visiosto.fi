// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { screen } from '@testing-library/react';

import Card from '../Card';

import renderWithProviders from '../../../test/renderWithProviders';

describe('Card component', () => {
  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(<Card>Test text</Card>, 'fi');

    expect(container).toMatchSnapshot();

    expect(getByText('Test text')).toBeInTheDocument();

    expect(screen.getByRole('article')).toHaveTextContent('Test text');
  });
});
