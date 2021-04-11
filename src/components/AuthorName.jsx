// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
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

const propTypes = {
  author: PropTypes.shape({
    contentful_id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  locale: PropTypes.string.isRequired,
};

function AuthorName({ author, locale }) {
  const { contentful_id: authorID, name } = author;

  return (
    <Link to={authorID} locale={locale}>
      {name}
    </Link>
  );
}

AuthorName.propTypes = propTypes;

export default AuthorName;
