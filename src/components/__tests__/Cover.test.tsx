// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { screen } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';

import Cover from '../Cover';

import coverQuery from '../../../test/data/coverQuery';
import renderWithProviders from '../../../test/renderWithProviders';

describe('Cover component', () => {
  beforeAll(() => (useStaticQuery as jest.Mock).mockReturnValue(coverQuery));

  it('renders lens image with first blue rule correctly', () => {
    const { container, getByText } = renderWithProviders(
      <Cover imagesType="lens" rule={{ color: 'blue', mode: 1 }} title="Test title">
        Lot’s of text here
      </Cover>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('heading')).toHaveTextContent('Test title');
    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('Lot’s of text here')).toBeInTheDocument();
  });

  it('renders lens image with second blue rule correctly', () => {
    const { container, getByText } = renderWithProviders(
      <Cover imagesType="lens" rule={{ color: 'blue', mode: 2 }} title="Test title">
        Lot’s of text here
      </Cover>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('heading')).toHaveTextContent('Test title');
    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('Lot’s of text here')).toBeInTheDocument();
  });

  it('renders lens image with third blue rule correctly', () => {
    const { container, getByText } = renderWithProviders(
      <Cover imagesType="lens" rule={{ color: 'blue', mode: 3 }} title="Test title">
        Lot’s of text here
      </Cover>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('heading')).toHaveTextContent('Test title');
    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('Lot’s of text here')).toBeInTheDocument();
  });

  it('renders lens image with first peach rule correctly', () => {
    const { container, getByText } = renderWithProviders(
      <Cover imagesType="lens" rule={{ color: 'peach', mode: 1 }} title="Test title">
        Lot’s of text here
      </Cover>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('heading')).toHaveTextContent('Test title');
    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('Lot’s of text here')).toBeInTheDocument();
  });

  it('renders lens image with second peach rule correctly', () => {
    const { container, getByText } = renderWithProviders(
      <Cover imagesType="lens" rule={{ color: 'peach', mode: 2 }} title="Test title">
        Lot’s of text here
      </Cover>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('heading')).toHaveTextContent('Test title');
    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('Lot’s of text here')).toBeInTheDocument();
  });

  it('renders lens image with third peach rule correctly', () => {
    const { container, getByText } = renderWithProviders(
      <Cover imagesType="lens" rule={{ color: 'peach', mode: 3 }} title="Test title">
        Lot’s of text here
      </Cover>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('heading')).toHaveTextContent('Test title');
    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('Lot’s of text here')).toBeInTheDocument();
  });

  it('renders lines image with first blue rule correctly', () => {
    const { container, getByText } = renderWithProviders(
      <Cover imagesType="lines" rule={{ color: 'blue', mode: 1 }} title="Test title">
        Lot’s of text here
      </Cover>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('heading')).toHaveTextContent('Test title');
    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('Lot’s of text here')).toBeInTheDocument();
  });

  it('renders lines image with second blue rule correctly', () => {
    const { container, getByText } = renderWithProviders(
      <Cover imagesType="lines" rule={{ color: 'blue', mode: 2 }} title="Test title">
        Lot’s of text here
      </Cover>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('heading')).toHaveTextContent('Test title');
    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('Lot’s of text here')).toBeInTheDocument();
  });

  it('renders lines image with third blue rule correctly', () => {
    const { container, getByText } = renderWithProviders(
      <Cover imagesType="lines" rule={{ color: 'blue', mode: 3 }} title="Test title">
        Lot’s of text here
      </Cover>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('heading')).toHaveTextContent('Test title');
    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('Lot’s of text here')).toBeInTheDocument();
  });

  it('renders lines image with first peach rule correctly', () => {
    const { container, getByText } = renderWithProviders(
      <Cover imagesType="lines" rule={{ color: 'peach', mode: 1 }} title="Test title">
        Lot’s of text here
      </Cover>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('heading')).toHaveTextContent('Test title');
    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('Lot’s of text here')).toBeInTheDocument();
  });

  it('renders lines image with second peach rule correctly', () => {
    const { container, getByText } = renderWithProviders(
      <Cover imagesType="lines" rule={{ color: 'peach', mode: 2 }} title="Test title">
        Lot’s of text here
      </Cover>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('heading')).toHaveTextContent('Test title');
    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('Lot’s of text here')).toBeInTheDocument();
  });

  it('renders lines image with third peach rule correctly', () => {
    const { container, getByText } = renderWithProviders(
      <Cover imagesType="lines" rule={{ color: 'peach', mode: 3 }} title="Test title">
        Lot’s of text here
      </Cover>,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(screen.getByRole('heading')).toHaveTextContent('Test title');
    expect(getByText('Test title')).toBeInTheDocument();
    expect(getByText('Lot’s of text here')).toBeInTheDocument();
  });
});
