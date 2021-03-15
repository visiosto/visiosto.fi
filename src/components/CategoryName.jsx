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

const CategoryName = (props) => {
  return (
    <Link to={props.category.contentful_id} locale={props.locale}>
      {props.category.name}
    </Link>
  );
};

export default CategoryName;
