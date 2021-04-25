// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useStaticQuery } from 'gatsby';

import CookieNotice from '../CookieNotice';

import localizedAnchorLinkQuery from '../../../../test/data/localizedAnchorLinkQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Cookie notice component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(localizedAnchorLinkQuery));

  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(<CookieNotice locale="fi" />, 'fi');

    expect(container).toMatchSnapshot();

    expect(getByText('Evästeasetukset')).toBeInTheDocument();
  });

  it('opens when clicked', () => {
    renderWithProviders(<CookieNotice locale="fi" />, 'fi');

    userEvent.click(screen.getByText('Evästeasetukset'));
    expect(screen.getByText('Asetukset')).toBeInTheDocument();
    expect(screen.getByText('Toiminnalliset evästeet')).toBeInTheDocument();
  });
});
