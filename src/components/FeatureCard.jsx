// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const Icon = styled.div`
  text-align: center;
`;

const H3 = styled.h3`
  clear: none;
  margin: 2rem 0;
  font-size: 1.5rem;
  text-align: center;
`;

export default (props) => {
  return (
    <Card>
      <Icon>{props.icon}</Icon>
      {(() => {
        if (props.htmlTitle) {
          return <H3 dangerouslySetInnerHTML={{ __html: props.title }} />;
        } else {
          return <H3>{props.title}</H3>;
        }
      })()}
      {props.children}
      {props.button}
    </Card>
  );
};
