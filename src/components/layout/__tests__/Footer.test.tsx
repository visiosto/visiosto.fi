// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import Footer from '../Footer';

import footerQuery from '../../../../test/data/footerQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Footer component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(footerQuery));

  it('renders correctly', () => {
    const { container, getByAltText, getByText } = renderWithProviders(
      <Footer locale="fi" pageID="rXFgpak6HKjCuUXjFo9KW" />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Tämä sivusto on tehty', { exact: false })).toBeInTheDocument();
    expect(getByText('Visioston', { exact: false })).toBeInTheDocument();
    expect(getByText('linssin läpi', { exact: false })).toBeInTheDocument();
    expect(getByText('In English')).toBeInTheDocument();

    expect(getByAltText('Visioston logo')).toBeInTheDocument();
    expect(getByAltText('Instagramin logo')).toBeInTheDocument();
    expect(getByAltText('Linkedinin logo')).toBeInTheDocument();
    expect(getByAltText('Twitterin logo')).toBeInTheDocument();
    // expect(getByAltText('Githubin logo')).toBeInTheDocument();
    expect(getByAltText('Facebookin logo')).toBeInTheDocument();
  });
});
