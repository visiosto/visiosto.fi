// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import PriceList from '../PriceList';

import pricingQuery from '../../../test/data/pricingQuery';
import renderWithProviders from '../../../test/renderWithProviders';

describe('Price list component', () => {
  it('renders correctly', () => {
    const { container } = renderWithProviders(
      <PriceList
        list={pricingQuery.contentfulPage.pageData[0]}
        locale="fi"
        localizations={pricingQuery.contentfulPage.pageDataLocalization}
      />,
      'fi',
    );

    expect(container).toMatchSnapshot();
  });
});
