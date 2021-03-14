// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import LocalizedLink from './link/LocalizedLink';

import authorNames from '../../data/author-names.json';

const Link = styled(LocalizedLink)`
  text-decoration: none;
  color: var(--color-text);

  &:visited {
    color: var(--color-text);
  }

  &:hover,
  &:focus,
  &:active {
    text-decoration: underline;
    color: var(--color-link-text);
  }
`;

const AuthorName = (props) => {
  const localizedName = authorNames[props.name][props.locale];

  return <Link to={`/author/${props.name}`} locale={props.locale}>{localizedName}</Link>;
};

export default AuthorName;
