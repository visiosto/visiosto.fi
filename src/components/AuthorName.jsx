// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import LocalizedLink from './link/LocalizedLink';

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

export default function AuthorName({ author: { contentful_id: authorID, name }, locale }) {
  return (
    <Link to={authorID} locale={locale}>
      {name}
    </Link>
  );
}
