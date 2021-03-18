// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import LocalizedLink from './LocalizedLink';

const LocaleLink = (props) => {
  const toLocale = props.to;
  const { pageId, ...linkProps } = props;
  return <LocalizedLink {...linkProps} to={pageId} locale={toLocale} />;
};

export default LocaleLink;
