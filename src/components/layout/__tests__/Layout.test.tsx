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
      <Layout locale="fi" pageID="3rPdaUCw3nKo73b5Z6thWW" title="Hallinto">
        <p>Test content</p>
      </Layout>,
      'fi',
    );

    expect(container).toMatchSnapshot();
  });
});
