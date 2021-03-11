// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useContext } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import ThemeContext from './ThemeContext';

const SchemedImage = (props) => {
  const { colorMode } = useContext(ThemeContext);

  const createImage = (image) => () =>
    props.alt ? (
      <GatsbyImage image={image} alt={props.alt} {...props} />
    ) : (
      <GatsbyImage image={props.light} alt="" role="presentation" {...props} />
    );

  const LightImage = createImage(props.light);
  const DarkImage = createImage(props.dark);

  return colorMode === 'dark' ? <DarkImage /> : <LightImage />;
};

export default SchemedImage;
