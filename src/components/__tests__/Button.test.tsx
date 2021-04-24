// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import Button from '../Button';

import renderWithProviders from '../../../test/renderWithProviders';

describe('Button component', () => {
  it('renders normal colours correctly', () => {
    const { container, getByText } = renderWithProviders(<Button>Button</Button>, 'fi');

    expect(container).toMatchSnapshot();

    expect(getByText('Button')).toBeInTheDocument();
  });

  it('renders green colours correctly', () => {
    const { container, getByText } = renderWithProviders(
      <Button color="green">Button</Button>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Button')).toBeInTheDocument();
  });
});
