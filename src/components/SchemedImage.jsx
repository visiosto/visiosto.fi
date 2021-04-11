// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

import ThemeContext from './ThemeContext';

const propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  dark: PropTypes.object.isRequired,
  light: PropTypes.object.isRequired,
  objectFit: PropTypes.string,
  style: PropTypes.object,
};

const defaultProps = {
  alt: '',
  className: null,
  objectFit: null,
  style: null,
};

function SchemedImage({ alt, className, dark, light, objectFit, style }) {
  const { colorMode } = useContext(ThemeContext);

  if (colorMode === 'dark') {
    if (alt === '') {
      return (
        <GatsbyImage
          className={className}
          image={dark}
          alt=""
          role="presentation"
          objectFit={objectFit}
          style={style}
        />
      );
    } else {
      return (
        <GatsbyImage
          className={className}
          image={dark}
          alt={alt}
          objectFit={objectFit}
          style={style}
        />
      );
    }
  } else {
    if (alt === '') {
      return (
        <GatsbyImage
          className={className}
          image={light}
          alt=""
          role="presentation"
          objectFit={objectFit}
          style={style}
        />
      );
    } else {
      return (
        <GatsbyImage
          className={className}
          image={light}
          alt={alt}
          objectFit={objectFit}
          style={style}
        />
      );
    }
  }
}

SchemedImage.propTypes = propTypes;
SchemedImage.defaultProps = defaultProps;

export default SchemedImage;
