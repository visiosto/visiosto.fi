// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import AuthorName from '../AuthorName';

import authorNameQuery from '../../../test/data/authorNameQuery';
import renderWithProviders from '../../../test/renderWithProviders';

describe('Author name component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(authorNameQuery));

  const { author } = authorNameQuery.allContentfulBlogPost.edges[0].node;

  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(
      <AuthorName author={author} locale="fi" />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Antti Kivi')).toBeInTheDocument();
  });
});
