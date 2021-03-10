// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useContext } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import ThemeContext from './ThemeContext';

export default (props) => {
  const { colorMode } = useContext(ThemeContext);

  const LightImage = () => <GatsbyImage image={props.light} {...props} />;
  const DarkImage = () => <GatsbyImage image={props.dark} {...props} />;

  return colorMode === 'dark' ? <DarkImage /> : <LightImage />;
};
