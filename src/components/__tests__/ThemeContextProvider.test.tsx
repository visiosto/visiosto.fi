// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { render } from '@testing-library/react';

import ThemeContextProvider from '../ThemeContextProvider';

describe('Theme context provider component', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<ThemeContextProvider>Content</ThemeContextProvider>);

    expect(container).toMatchSnapshot();

    expect(getByText('Content')).toBeInTheDocument();
  });
});
