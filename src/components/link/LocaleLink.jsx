// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';

import LocalizedLink from './LocalizedLink';

const propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  pageId: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const defaultProps = { className: null };

function LocaleLink({ children, className, pageId, to }) {
  return <LocalizedLink children={children} className={className} to={pageId} locale={to} />;
}

LocaleLink.propTypes = propTypes;
LocaleLink.defaultProps = defaultProps;

export default LocaleLink;
