// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import AuthorContactCard from '../AuthorContactCard';

import authorContactCardQuery from '../../../test/data/authorContactCardQuery';
import renderWithProviders from '../../../test/renderWithProviders';

describe('Author contact card component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(authorContactCardQuery));

  const { contacts } = authorContactCardQuery.allContentfulIndexPage.edges[0].node;

  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(
      <AuthorContactCard author={contacts[0]}>Author</AuthorContactCard>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByText('Antti Kivi')).toBeInTheDocument();
    expect(getByText('antti.kivi@visiosto.fi')).toBeInTheDocument();
    expect(getByText('Author')).toBeInTheDocument();
  });
});
