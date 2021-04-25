// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { screen } from '@testing-library/react';

import SwitchCheckbox from '../SwitchCheckbox';

import renderWithProviders from '../../../../test/renderWithProviders';

describe('Switch checkbox component', () => {
  it('renders correctly', () => {
    const { container } = renderWithProviders(
      <SwitchCheckbox
        handleClick={jest.fn()}
        id="switch-checkbox"
        label="Switch checkbox"
        name="switch-checkbox"
        checked
      />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByLabelText('Switch checkbox')).toBeChecked();
  });

  it('renders correctly when not checked', () => {
    renderWithProviders(
      <SwitchCheckbox
        checked={false}
        handleClick={jest.fn()}
        id="switch-checkbox"
        label="Switch checkbox"
        name="switch-checkbox"
      />,
      'fi',
    );

    expect(screen.getByLabelText('Switch checkbox')).not.toBeChecked();
  });
});
