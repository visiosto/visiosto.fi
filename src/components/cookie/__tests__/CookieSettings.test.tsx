// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { useStaticQuery } from 'gatsby';

import CookieSettings from '../CookieSettings';

import localizedAnchorLinkQuery from '../../../../test/data/localizedAnchorLinkQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Cookie settings component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(localizedAnchorLinkQuery));

  it('renders correctly when closed', () => {
    const { container } = renderWithProviders(
      <CookieSettings locale="fi" settingsOpen={false} toggleSettings={jest.fn()} />,
      'fi',
    );

    expect(container).toMatchSnapshot();
  });

  it('renders correctly when opened', () => {
    const { container } = renderWithProviders(
      <CookieSettings locale="fi" toggleSettings={jest.fn()} settingsOpen />,
      'fi',
    );

    expect(container).toMatchSnapshot();
  });
});
