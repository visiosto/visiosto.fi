// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useContext } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import ThemeContext from './ThemeContext';

export default (props) => {
  const { colorMode } = useContext(ThemeContext);

  const LightImg = () => <GatsbyImage image={props.fixedLight} {...props} />;
  const DarkImg = () => <GatsbyImage image={props.fixedDark} {...props} />;

  return colorMode === 'dark' ? <DarkImg /> : <LightImg />;
};
