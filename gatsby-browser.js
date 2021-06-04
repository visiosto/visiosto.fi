// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import 'normalize.css';

import App from './src/components/App';

import checkHash from './src/util/anchor-link/checkHash';
import scroller from './src/util/anchor-link/scroller';

// Based on code by Chase Ohlson.
// Original code is available at https://github.com/brohlson/gatsby-plugin-anchor-links.

export const onRouteUpdate = function checkScrollOnRouteUpdate(
  { location },
  { offset = 0, duration = 1000 },
) {
  const isBrowser = typeof window !== 'undefined';

  const windowHash = isBrowser ? window.visiostoScrollHash : undefined;

  if (isBrowser) {
    window.visiostoScrollOffset = offset;
    window.visiostoScrollDuration = duration;
  }

  if (windowHash) {
    scroller(windowHash, offset);
  } else {
    checkHash(location, offset);
  }

  if (isBrowser && windowHash) {
    window.visiostoScrollHash = undefined;
  }
};

// Thanks to Joshua Comeau for the original code, licensed under MIT License:
// https://github.com/joshwcomeau/dark-mode-minimal

export const wrapRootElement = function wrapRootElementWithAppComponent({ element }) {
  // eslint-disable-next-line react/jsx-filename-extension
  return <App>{element}</App>;
};
