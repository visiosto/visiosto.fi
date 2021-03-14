// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import LocalizedLink from './link/LocalizedLink';

import categories from '../../data/categories.json';

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
  const localizedName = categories[props.name][props.locale];

  // TODO Add link
  return <>{localizedName}</>;
  // return (
  //   <Link to={`/author/${props.name}`} locale={props.locale}>
  //     {localizedName}
  //   </Link>
  // );
};

export default CategoryName;
