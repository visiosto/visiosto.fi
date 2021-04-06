// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import LocalizedLink from './LocalizedLink';

export default function LocaleLink(props) {
  const { pageId, to: toLocale, ...linkProps } = props;
  return <LocalizedLink {...linkProps} to={pageId} locale={toLocale} />;
}
