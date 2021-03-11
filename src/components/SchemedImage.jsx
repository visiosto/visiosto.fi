// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

import ThemeContext from './ThemeContext';

const propTypes = {
  light: PropTypes.object.isRequired,
  dark: PropTypes.object.isRequired,
  alt: PropTypes.string,
};

const defaultProps = {
  alt: '',
};

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

SchemedImage.propTypes = propTypes;
SchemedImage.defaultProps = defaultProps;

export default SchemedImage;
