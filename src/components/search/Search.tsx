// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SearchContainer from './SearchContainer';

const Container = styled(SearchContainer)`
  display: inline-block;
  position: relative;
  margin: 0.6em 0;
  border-radius: 0.25rem;
  box-shadow: var(--color-box-shadow);
  transition: box-shadow 75ms ease-in;

  &.focus {
    box-shadow: var(--color-box-shadow-hover);
  }
`;

const propTypes = { locale: PropTypes.string.isRequired };

function Search({ locale }) {
  return <Container locale={locale} />;
}

Search.propTypes = propTypes;

export default Search;
