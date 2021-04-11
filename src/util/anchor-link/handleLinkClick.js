// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Based on code by Chase Ohlson.
// Original code is available at https://github.com/brohlson/gatsby-plugin-anchor-links.

import { withPrefix } from 'gatsby';

import errorTypes from './errorTypes';
import logWarning from './logWarning';
import scroller from './scroller';

export default function handleLinkClick(to, event, onAnchorLinkClick) {
  /**
   * Log warnings on click
   */
  const improperFormatting = !to.includes('/') || !to.includes('#');

  if (improperFormatting) {
    logWarning(errorTypes.IMPROPPER_FORMATTING);
  }

  const isBrowser = typeof window !== 'undefined';

  if (isBrowser && to.includes('#')) {
    const [anchorPath, anchor] = to.split('#');
    if (window.location.pathname === withPrefix(anchorPath)) {
      event.preventDefault();
      scroller(`#${anchor}`, window.visiostoScrollOffset, window.visiostoScrollDuration);
    }
  }

  if (onAnchorLinkClick) {
    onAnchorLinkClick();
  }
}
