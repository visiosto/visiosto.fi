// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

// Based on code by Chase Ohlson.
// Original code is available at https://github.com/brohlson/gatsby-plugin-anchor-links.

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import handleLinkClick from '../../util/anchor-link/handleLinkClick';
import stripHashedLocation from '../../util/anchor-link/stripHashedLocation';
import handleStrippedLinkClick from '../../util/anchor-link/handleStrippedLinkClick';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  gatsbyLinkProps: PropTypes.object,
  onAnchorLinkClick: PropTypes.func,
  stripHash: PropTypes.bool,
  to: PropTypes.string.isRequired,
};

const defaultProps = {
  className: '',
  gatsbyLinkProps: {},
  onAnchorLinkClick: null,
  stripHash: false,
};

function AnchorLink({ children, className, gatsbyLinkProps, onAnchorLinkClick, stripHash, to }) {
  const handleClick = stripHash ? handleStrippedLinkClick : handleLinkClick;
  const linkProps = {
    ...gatsbyLinkProps,
    /**
     * Spread optional gatsbyLinkProps object in fist, so our specific props will override
     */
    to: stripHash ? stripHashedLocation(to) : to,
    onClick: (event) => handleClick(to, event, onAnchorLinkClick),
  };

  /**
   * Optional props
   */
  if (className !== '') {
    linkProps.className = className;
  }

  return <Link {...linkProps}>{children}</Link>;
}

AnchorLink.propTypes = propTypes;
AnchorLink.defaultProps = defaultProps;

export default AnchorLink;
