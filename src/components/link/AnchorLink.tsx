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
  gatsbyLinkProps: PropTypes.shape({
    activeClassName: PropTypes.string,
    activeStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
    onClick: PropTypes.func,
    partiallyActive: PropTypes.bool,
    replace: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    state: PropTypes.object,
    to: PropTypes.string,
  }),
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

  // TODO See if the props should be set without spreading
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Link {...linkProps}>{children}</Link>;
}

AnchorLink.propTypes = propTypes;
AnchorLink.defaultProps = defaultProps;

export default AnchorLink;
