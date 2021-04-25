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
  category: PropTypes.shape({
    contentful_id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  locale: PropTypes.string.isRequired,
};

function CategoryName({ category, locale }) {
  const { contentful_id: categoryID, name } = category;

  return (
    <Link locale={locale} to={categoryID}>
      {name}
    </Link>
  );
}

CategoryName.propTypes = propTypes;

export default CategoryName;
