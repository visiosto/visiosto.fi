// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Based on code by Chase Ohlson.
// Original code is available at https://github.com/brohlson/gatsby-plugin-anchor-links.

import React from 'react';
import { Link } from 'gatsby';

import handleLinkClick from '../../util/anchor-link/handleLinkClick';
import stripHashedLocation from '../../util/anchor-link/stripHashedLocation';
import handleStrippedLinkClick from '../../util/anchor-link/handleStrippedLinkClick';

export default function AnchorLink(props) {
  const onClickHandler = props.stripHash ? handleStrippedLinkClick : handleLinkClick;
  const linkProps = {
    ...props.gatsbyLinkProps,
    /**
     * Spread optional gatsbyLinkProps object in fist, so our specific props will override
     */
    to: props.stripHash ? stripHashedLocation(props.to) : props.to,
    onClick: (e) => onClickHandler(props.to, e, props.onAnchorLinkClick),
  };

  /**
   * Optional props
   */
  if (props.title) {
    linkProps.title = props.title;
  }

  if (props.className) {
    linkProps.className = props.className;
  }

  return <Link {...linkProps}>{props.children ? props.children : props.title}</Link>;
}
