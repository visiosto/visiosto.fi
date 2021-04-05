// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Based on code by Chase Ohlson.
// Original code is available at https://github.com/brohlson/gatsby-plugin-anchor-links.

import scrollToElement from 'scroll-to-element';

export default function scroller(target, offset = 0, duration = 1000, ease = 'in-out-quint') {
  scrollToElement(target, {
    duration,
    offset,
    ease,
  });
}
