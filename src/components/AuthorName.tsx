// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LocalizedLink from './link/LocalizedLink';

import blogMetaLinksStyle from '../styles/blogMetaLinksStyle';

const Link = styled(LocalizedLink)`
  ${blogMetaLinksStyle}
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
    <Link locale={locale} to={authorID}>
      {name}
    </Link>
  );
}

AuthorName.propTypes = propTypes;

export default AuthorName;
