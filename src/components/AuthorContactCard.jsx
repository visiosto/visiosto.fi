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

export default (props) => {
  const { author } = props;

  // TODO Add the image and a 'read more' button
  return (
    <Card>
      <ImageDiv>
        <Image alt={author.name} image={getImage(author.profileImage)} />
      </ImageDiv>
      {(() => {
        if (props.htmlTitle) {
          return <H3 dangerouslySetInnerHTML={{ __html: author.name }} />;
        } else {
          return <H3>{author.name}</H3>;
        }
      })()}
      <Div>
        <p>{author.job}</p>
        <p>
          <a href={`mailto:${author.email}`}>{author.email}</a>
        </p>
      </Div>
      {props.children}
    </Card>
  );
};
