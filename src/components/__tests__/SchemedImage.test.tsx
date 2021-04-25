// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { getImage } from 'gatsby-plugin-image';

import SchemedImage from '../SchemedImage';

import ImageData from '../../ImageData';

import renderWithProviders from '../../../test/renderWithProviders';
import schemedImageQuery from '../../../test/data/schemedImageQuery';

describe('Schemed image component', () => {
  it('renders correctly', () => {
    const { container, getByAltText } = renderWithProviders(
      <SchemedImage
        alt="Test"
        dark={getImage(schemedImageQuery.imageDark as ImageData)!}
        light={getImage(schemedImageQuery.imageLight as ImageData)!}
      />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByAltText('Test')).toBeInTheDocument();
  });

  it('renders presentation images correctly', () => {
    const { container, getByRole } = renderWithProviders(
      <SchemedImage
        dark={getImage(schemedImageQuery.imageDark as ImageData)!}
        light={getImage(schemedImageQuery.imageLight as ImageData)!}
      />,
      'fi',
    );

    expect(container).toMatchSnapshot();

    expect(getByRole('presentation')).toBeInTheDocument();
  });
});
