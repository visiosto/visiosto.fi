// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useStaticQuery } from 'gatsby';

import ContactForm from '../ContactForm';

import localizedLinkQuery from '../../../../test/data/localizedLinkQuery';
import renderWithProviders from '../../../../test/renderWithProviders';

describe('Contact form component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(localizedLinkQuery));

  it('renders correctly', () => {
    const { container, getByText } = renderWithProviders(<ContactForm locale="fi" />, 'fi');

    expect(container).toMatchSnapshot();

    expect(getByText('Nimi')).toBeInTheDocument();
    expect(getByText('sähköposti')).toBeInTheDocument();
    expect(getByText('puhelinnumero')).toBeInTheDocument();
    expect(getByText('Viestisi meille')).toBeInTheDocument();
  });

  it('works correctly', () => {
    renderWithProviders(<ContactForm locale="fi" />, 'fi');

    userEvent.type(screen.getByLabelText('Nimi'), 'John Doe');
    expect(screen.getByLabelText('Nimi')).toHaveValue('John Doe');

    userEvent.type(screen.getByLabelText('sähköposti'), 'john.doe@example.com');
    expect(screen.getByLabelText('sähköposti')).toHaveValue('john.doe@example.com');

    userEvent.type(screen.getByLabelText('puhelinnumero'), '123-456-7890');
    expect(screen.getByLabelText('puhelinnumero')).toHaveValue('123-456-7890');

    userEvent.type(screen.getByLabelText('Viestisi meille'), 'Hello,\nWorld!');
    expect(screen.getByLabelText('Viestisi meille')).toHaveValue('Hello,\nWorld!');

    userEvent.click(screen.getByText('Lähetä'));
    expect(screen.getByText('Lähetys onnistui. Kiitos viestistäsi!')).toBeInTheDocument();
  });

  it('displays error', () => {
    renderWithProviders(<ContactForm locale="fi" />, 'fi');

    userEvent.type(screen.getByLabelText('Nimi'), 'John Doe');
    expect(screen.getByLabelText('Nimi')).toHaveValue('John Doe');

    userEvent.type(screen.getByLabelText('sähköposti'), 'john.doe@example.com');
    expect(screen.getByLabelText('sähköposti')).toHaveValue('john.doe@example.com');

    userEvent.type(screen.getByLabelText('puhelinnumero'), '123-456-7890');
    expect(screen.getByLabelText('puhelinnumero')).toHaveValue('123-456-7890');

    userEvent.click(screen.getByText('Lähetä'));
    expect(screen.getByText('Kirjoita jokin viesti')).toBeInTheDocument();
  });
});
