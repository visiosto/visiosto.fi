// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import PortfolioCard from '../PortfolioCard';

import portfolioCardQuery from '../../../test/data/portfolioCardQuery';
import renderWithProviders from '../../../test/renderWithProviders';

describe('Portfolio reference card component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(portfolioCardQuery));

  const { portfolio } = portfolioCardQuery.allContentfulIndexPage.edges[0].node;

  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(
      <PortfolioCard locale="fi" reference={portfolio[0]} />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Aatu Itkonen')).toBeInTheDocument();
    expect(getByText('Verkkosivusto ja visuaalinen ilme')).toBeInTheDocument();
  });
});
