// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import '../../../../test/matchMedia';

import React from 'react';
import { useStaticQuery } from 'gatsby';

import Layout from '../Layout';

import layoutQuery from '../../../../test/data/layoutQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Layout component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(layoutQuery));

  it('renders correctly', () => {
    const { container } = renderWithProviders(
      <Layout locale="fi" pageID="7yT76Msr4Ist4kaDUu82TQ" title="Tietosuoja">
        <p>Test content</p>
      </Layout>,
      'fi',
    );

    expect(container).toMatchSnapshot();
  });
});
