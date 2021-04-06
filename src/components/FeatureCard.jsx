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

export default function FeatureCard({ button, children, htmlTitle, icon, title }) {
  return (
    <Card>
      <Icon>{icon}</Icon>
      {(() => {
        if (htmlTitle) {
          return <H3 dangerouslySetInnerHTML={{ __html: title }} />;
        } else {
          return <H3>{title}</H3>;
        }
      })()}
      {children}
      {button}
    </Card>
  );
}
