// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import CategoryName from '../CategoryName';

import categoryNameQuery from '../../../test/data/categoryNameQuery';
import renderWithProviders from '../../../test/renderWithProviders';

describe('Category name component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(categoryNameQuery));

  const { category } = categoryNameQuery.allContentfulBlogPost.edges[0].node;

  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(
      <CategoryName category={category} locale="fi" />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Yleinen')).toBeInTheDocument();
  });
});
