// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import AnchorLink from '../AnchorLink';

import renderWithProviders from '../../../../test/renderWithProviders';

describe('Anchor link component', () => {
  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(
      <AnchorLink to="/some-page#something">A link</AnchorLink>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('A link')).toBeInTheDocument();
  });
});
