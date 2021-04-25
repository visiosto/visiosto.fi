// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useStaticQuery } from 'gatsby';

import RegisterBusinessForm from '../RegisterBusinessForm';

import localizedLinkQuery from '../../../../test/data/localizedLinkQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Client register business form component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(localizedLinkQuery));

  it('renders correctly', () => {
    const { container } = renderWithProviders(<RegisterBusinessForm locale="fi" />, 'fi');

    expect(container).toMatchSnapshot();
  });

  it('works correctly', () => {
    renderWithProviders(<RegisterBusinessForm locale="fi" />, 'fi');

    userEvent.type(screen.getByLabelText('Y-tunnus'), '3030303-1');
    expect(screen.getByLabelText('Y-tunnus')).toHaveValue('3030303-1');

    userEvent.type(screen.getByLabelText('Yrityksen tai yhteisön nimi'), 'Acme Corporation');
    expect(screen.getByLabelText('Yrityksen tai yhteisön nimi')).toHaveValue('Acme Corporation');
  });
});
