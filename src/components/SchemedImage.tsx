// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { CSSProperties, useContext } from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import ThemeContext from './ThemeContext';

type SchemedImageProps = {
  alt?: string;
  className?: string;
  dark: IGatsbyImageData;
  light: IGatsbyImageData;
  loading?: 'eager' | 'lazy';
  objectFit?: CSSProperties['objectFit'];
  style?: object;
};

const defaultProps = {
  alt: '',
  className: null,
  loading: null,
  objectFit: null,
  style: null,
};

function SchemedImage({
  alt,
  className,
  dark,
  light,
  loading,
  objectFit,
  style,
}: SchemedImageProps) {
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
        alt={alt!}
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
      alt={alt!}
      className={className}
      image={light}
      loading={loading}
      objectFit={objectFit}
      style={style}
    />
  );
}

SchemedImage.defaultProps = defaultProps;

export default SchemedImage;
