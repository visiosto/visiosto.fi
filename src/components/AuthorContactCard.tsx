// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
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

const propTypes = {
  author: PropTypes.shape({
    email: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profileImage: PropTypes.object.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

const defaultProps = { children: null };

function AuthorContactCard({ author, children }) {
  const { email, job, name, profileImage } = author;

  return (
    <Card>
      <ImageDiv>
        <Image alt={name} image={getImage(profileImage)!} />
      </ImageDiv>
      <H3>{name}</H3>
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

AuthorContactCard.propTypes = propTypes;
AuthorContactCard.defaultProps = defaultProps;

export default AuthorContactCard;
