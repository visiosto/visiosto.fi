// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useStaticQuery } from 'gatsby';

import PersonalServerDomainServiceRegistrationForm from '../PersonalServerDomainServiceRegistrationForm';

import localizedLinkQuery from '../../../../test/data/localizedLinkQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Client register person form component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(localizedLinkQuery));

  it('renders correctly', () => {
    const { container } = renderWithProviders(
      <PersonalServerDomainServiceRegistrationForm locale="fi" />,
      'fi',
    );

    expect(container).toMatchSnapshot();
  });

  it('works correctly', () => {
    renderWithProviders(<PersonalServerDomainServiceRegistrationForm locale="fi" />, 'fi');

    userEvent.type(screen.getByLabelText('Etunimi'), 'John');
    expect(screen.getByLabelText('Etunimi')).toHaveValue('John');

    userEvent.type(screen.getByLabelText('Sukunimi'), 'Doe');
    expect(screen.getByLabelText('Sukunimi')).toHaveValue('Doe');
  });
});
