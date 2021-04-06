// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import Card from './Card';

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled(GatsbyImage)`
  > * {
    border-radius: 50%;
  }
`;

const H3 = styled.h3`
  clear: none;
  margin: 2rem 0;
  font-size: 1.5rem;
  text-align: center;
`;

const Div = styled.div`
  text-align: center;
`;

export default function AuthorContactCard({
  author: { email, job, name, profileImage },
  children,
  htmlTitle,
}) {
  return (
    <Card>
      <ImageDiv>
        <Image alt={name} image={getImage(profileImage)} />
      </ImageDiv>
      {(() => {
        if (htmlTitle) {
          return <H3 dangerouslySetInnerHTML={{ __html: name }} />;
        } else {
          return <H3>{name}</H3>;
        }
      })()}
      <Div>
        <p>{job}</p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
      </Div>
      {children}
    </Card>
  );
}
