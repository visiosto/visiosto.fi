// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import SearchResultList from './SearchResultList';

import createINTL from '../../util/createINTL';

const Div = styled.div`
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 100%;
  margin-top: 0.5em;
`;

const Inner = styled.div`
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;
  left: -50%;
  max-height: 80vh;
  width: 80vw;
  max-width: 30em;
  padding: 1em;
  border-radius: 0.25em;
  box-shadow: var(--color-box-shadow);
  background: var(--color-background);
`;

const propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
  queryResults: PropTypes.array,
  searchResults: PropTypes.array,
  show: PropTypes.bool,
};

const defaultProps = {
  error: false,
  loading: false,
  queryResults: [],
  searchResults: [],
  show: false,
};

function SearchResults({ error, loading, queryResults, searchResults, show }) {
  const i = createINTL(useIntl());
  if (loading) {
    return (
      <Div hidden={!show}>
        <Inner>
          <div>{i('searchLoading')}</div>
        </Inner>
      </Div>
    );
  } else if (error) {
    return (
      <Div hidden={!show}>
        <Inner>
          <div>{i('searchError')}</div>
        </Inner>
      </Div>
    );
  } else if (searchResults.length > 0) {
    return (
      <Div hidden={!show}>
        <Inner>
          <SearchResultList queryResults={queryResults} />
        </Inner>
      </Div>
    );
  } else {
    return (
      <Div hidden={!show}>
        <Inner>
          <div>{i('searchNotFound')}</div>
        </Inner>
      </Div>
    );
  }
}

SearchResults.propTypes = propTypes;
SearchResults.defaultProps = defaultProps;

export default SearchResults;
