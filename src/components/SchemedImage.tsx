// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

import ThemeContext from './ThemeContext';

const propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  // There is no need to define the shape for Gatsby images.
  // eslint-disable-next-line react/forbid-prop-types
  dark: PropTypes.object.isRequired,
  // There is no need to define the shape for Gatsby images.
  // eslint-disable-next-line react/forbid-prop-types
  light: PropTypes.object.isRequired,
  loading: PropTypes.oneOf(['eager', 'lazy']),
  objectFit: PropTypes.oneOf(['contain', 'cover', 'fill', 'none', 'scale-down']),
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
};

const defaultProps = {
  alt: '',
  className: null,
  loading: null,
  objectFit: null,
  style: null,
};

function SchemedImage({ alt, className, dark, light, loading, objectFit, style }) {
  const { colorMode } = useContext(ThemeContext);

  if (colorMode === 'dark') {
    if (alt === '') {
      return (
        <GatsbyImage
          alt=""
          className={className}
          image={dark}
          loading={loading}
          objectFit={objectFit}
          role="presentation"
          style={style}
        />
      );
    }
    return (
      <GatsbyImage
        alt={alt}
        className={className}
        image={dark}
        loading={loading}
        objectFit={objectFit}
        style={style}
      />
    );
  }
  if (alt === '') {
    return (
      <GatsbyImage
        alt=""
        className={className}
        image={light}
        loading={loading}
        objectFit={objectFit}
        role="presentation"
        style={style}
      />
    );
  }
  return (
    <GatsbyImage
      alt={alt}
      className={className}
      image={light}
      loading={loading}
      objectFit={objectFit}
      style={style}
    />
  );
}

SchemedImage.propTypes = propTypes;
SchemedImage.defaultProps = defaultProps;

export default SchemedImage;
