// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import LocalizedLink from './LocalizedLink';

const LocaleLink = (props) => {
  const toLocale = props.to;
  console.log('The page key for the locale link is', props.pageId);

  console.log('Creating Contentful locale link to', toLocale, 'for id', props.pageId);

  const { pageId, ...linkProps } = props;

  return <LocalizedLink {...linkProps} to={pageId} locale={toLocale} />;
};

export default LocaleLink;
