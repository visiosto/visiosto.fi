// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Based on code by Chase Ohlson.
// Original code is available at https://github.com/brohlson/gatsby-plugin-anchor-links.

import errorTypes from './errorTypes';
import logWarning from './logWarning';
import scroller from './scroller';

export default function handleStrippedLinkClick(to, event, onAnchorLinkClick) {
  /**
   * Log warnings on click
   */
  const improperFormatting = !to.includes('/') || !to.includes('#');
  if (improperFormatting) {
    logWarning(errorTypes.IMPROPPER_FORMATTING);
  }

  const [anchorPath, anchor] = to.split('#');

  const isBrowser = typeof window !== 'undefined';

  /**
   * Determine location, run scroller or set window variable
   */

  const isSamePage = isBrowser && window.location.pathname === anchorPath;
  const isDifferentPage = isBrowser && window.location.pathname !== anchorPath;

  if (isSamePage) {
    event.preventDefault();
    scroller(`#${anchor}`, window.visiostoScrollOffset, window.visiostoScrollDuration);
  }

  if (isDifferentPage) {
    window.visiostoScrollHash = `#${anchor}`;
  }

  if (onAnchorLinkClick) {
    onAnchorLinkClick();
  }
}
