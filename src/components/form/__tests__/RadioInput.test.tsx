// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { screen } from '@testing-library/react';

import RadioInput from '../RadioInput';

import renderWithProviders from '../../../../test/renderWithProviders';

describe('Radio input component', () => {
  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(
      <RadioInput
        description="Test input description"
        handleChange={jest.fn()}
        inputs={[
          {
            id: 'id1',
            label: 'Option 1',
            value: 'id1',
          },
          {
            id: 'id2',
            label: 'Option 2',
            value: 'id2',
          },
          {
            id: 'id3',
            label: 'Option 3',
            value: 'id3',
          },
        ]}
        name="testInput"
        title="Test input"
        value="id2"
      />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Test input description')).toBeInTheDocument();
    expect(getByText('Test input')).toBeInTheDocument();
    expect(getByText('Option 1')).toBeInTheDocument();
    expect(getByText('Option 2')).toBeInTheDocument();
    expect(getByText('Option 3')).toBeInTheDocument();

    expect(screen.getByLabelText('Option 2')).toBeChecked();
  });
});
