// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import LocalizedAnchorLink from './LocalizedAnchorLink';

const Link = styled(LocalizedAnchorLink)`
  text-decoration: none;
`;

export default function LocalizedAnchorLinkButton(props) {
  return (
    <Link to={props.to} locale={props.locale}>
      <Button>{props.children}</Button>
    </Link>
  );
}
