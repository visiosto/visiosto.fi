// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Based on code by Chase Ohlson.
// Original code is available at https://github.com/brohlson/gatsby-plugin-anchor-links.

import errorTypes from './errorTypes';
import logWarning from './logWarning';
import scroller from './scroller';

export default function checkHash(location, offset) {
  const { hash } = location;
  const selector = hash ? hash.substr(1) : null;
  const validElement = selector ? document.getElementById(selector) : null;

  if (hash && Boolean(validElement)) {
    scroller(hash, offset);
  } else if (hash && selector && !validElement) {
    logWarning(errorTypes.INVALID_HASH);
  }
}
