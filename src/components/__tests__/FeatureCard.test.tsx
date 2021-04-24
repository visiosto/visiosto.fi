// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { screen } from '@testing-library/react';
import { NorthStarIcon } from '@primer/octicons-react';

import Button from '../Button';
import FeatureCard from '../FeatureCard';

import renderWithProviders from '../../../test/renderWithProviders';

describe('Feature card component', () => {
  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(
      <FeatureCard button={<Button>Click here</Button>} icon={<NorthStarIcon />} title="Test title">
        Some text here
      </FeatureCard>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('heading')).toHaveTextContent('Test title');
    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('Some text here')).toBeInTheDocument();
  });
});
