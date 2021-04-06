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

export default function CategoryName({ category: { contentful_id: categoryID, name }, locale }) {
  // const { contentful_id: categoryID, name } = category;
  return (
    <Link to={categoryID} locale={locale}>
      {name}
    </Link>
  );
}
