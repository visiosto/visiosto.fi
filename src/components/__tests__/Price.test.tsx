// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { screen } from '@testing-library/react';

import Price from '../Price';

import pricingQuery from '../../../test/data/pricingQuery';
import renderWithProviders from '../../../test/renderWithProviders';

describe('Price component', () => {
  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(
      <Price
        locale="fi"
        localizations={pricingQuery.contentfulPage.pageDataLocalization}
        localizationsList="additionalWork"
        price={15}
        rate="hourly"
        title="Test title"
      />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('heading')).toHaveTextContent('Test title');
    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('15,00 €/h')).toBeInTheDocument();
  });
});
