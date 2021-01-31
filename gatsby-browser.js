// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Based on code by Chase Ohlson.
// Original code is available at https://github.com/brohlson/gatsby-plugin-anchor-links.

import 'normalize.css';

import checkHash from './src/utils/anchor-link/checkHash';
import scroller from './src/utils/anchor-link/scroller';

const onRouteUpdate = ({ location }, { offset = 0, duration = 1000 }) => {
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

export default { onRouteUpdate };
