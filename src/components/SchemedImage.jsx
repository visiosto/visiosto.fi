// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useContext } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import ThemeContext from './ThemeContext';

const SchemedImage = (props) => {
  const { colorMode } = useContext(ThemeContext);

  const { light, dark, alt, ...imageProps } = props;

  const createImage = (image) => () =>
    alt ? (
      <GatsbyImage image={image} alt={alt} {...imageProps} />
    ) : (
      <GatsbyImage image={image} alt="" role="presentation" {...imageProps} />
    );

  const LightImage = createImage(light);
  const DarkImage = createImage(dark);

  return colorMode === 'dark' ? <DarkImage /> : <LightImage />;
};

export default SchemedImage;
