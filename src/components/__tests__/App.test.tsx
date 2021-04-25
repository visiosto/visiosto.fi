// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { render } from '@testing-library/react';

import App from '../App';

describe('App component', () => {
  it('renders correctly', () => {
    const { container, getByText } = render(<App>Content</App>);

    expect(container).toMatchSnapshot();

    expect(getByText('Content')).toBeInTheDocument();
  });
});
