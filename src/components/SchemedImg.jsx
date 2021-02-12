// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useContext } from 'react';
import Img from 'gatsby-image';

import ThemeContext from './ThemeContext';

export default (props) => {
  const { colorMode } = useContext(ThemeContext);

  const LightImg = () => <Img fixed={props.fixedLight} {...props} />;
  const DarkImg = () => <Img fixed={props.fixedDark} {...props} />;

  return colorMode === 'dark' ? <DarkImg /> : <LightImg />;
};
