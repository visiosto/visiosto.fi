// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';

import LocalizedLink from './LocalizedLink';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  pageID: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const defaultProps = { className: null };

function LocaleLink({ children, className, pageID, to }) {
  return <LocalizedLink children={children} className={className} to={pageID} locale={to} />;
}

LocaleLink.propTypes = propTypes;
LocaleLink.defaultProps = defaultProps;

export default LocaleLink;
