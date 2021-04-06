// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import LocalizedLink from './LocalizedLink';

const Link = styled(LocalizedLink)`
  text-decoration: none;
`;

export default function LocalizedLinkButton(props) {
  return (
    <Link to={props.to} locale={props.locale}>
      <Button>{props.children}</Button>
    </Link>
  );
}
