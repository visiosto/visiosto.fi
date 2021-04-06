// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useContext } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import ThemeContext from './ThemeContext';

export default function SchemedImage({ light, dark, alt, ...imageProps }) {
  const { colorMode } = useContext(ThemeContext);

  const altText = alt && alt !== '' ? alt : '';

  if (colorMode === 'dark') {
    if (altText === '') {
      return <GatsbyImage image={dark} alt="" role="presentation" {...imageProps} />;
    } else {
      return <GatsbyImage image={dark} alt={altText} {...imageProps} />;
    }
  } else {
    if (altText === '') {
      return <GatsbyImage image={light} alt="" role="presentation" {...imageProps} />;
    } else {
      return <GatsbyImage image={light} alt={altText} {...imageProps} />;
    }
  }
}
