// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import '../../../../test/matchMedia';

import React from 'react';
import { useStaticQuery } from 'gatsby';

import LayoutPost from '../LayoutPost';

import layoutPostQuery from '../../../../test/data/layoutPostQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Post layout component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(layoutPostQuery));

  it('renders correctly', () => {
    const { container } = renderWithProviders(
      <LayoutPost
        locale="fi"
        pageID="3DHvsGXmIHod7y6FZgtln6"
        post={layoutPostQuery.contentfulBlogPost}
      >
        <p>Test content</p>
      </LayoutPost>,
      'fi',
    );

    expect(container).toMatchSnapshot();
  });
});
