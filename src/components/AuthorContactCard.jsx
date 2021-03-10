// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import Card from './Card';

export default (props) => {
  const H3 = styled.h3`
    clear: none;
    margin: 2rem 0;
    font-size: 1.5rem;
    text-align: center;
  `;

  const Div = styled.div`
    text-align: center;
  `;

  // TODO Add the image and a 'read more' button
  return (
    <Card>
      {(() => {
        if (props.htmlTitle) {
          return <H3 dangerouslySetInnerHTML={{ __html: props.name }} />;
        } else {
          return <H3>{props.name}</H3>;
        }
      })()}
      <Div>
        <p>{props.job}</p>
        <p>
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </p>
      </Div>
      {props.children}
    </Card>
  );
};
