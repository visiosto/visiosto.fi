// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import SearchResultList from './SearchResultList';

import createIntl from '../../util/createIntl';

const Div = styled.div`
  display: ${(props) => (props.show ? `block` : `none`)};
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

const SearchResults = (props) => {
  const i = createIntl(useIntl());
  const { show } = props;

  if (props.loading) {
    return (
      <Div show={show}>
        <Inner>
          <div>{i('searchLoading')}</div>
        </Inner>
      </Div>
    );
  } else if (props.error) {
    return (
      <Div show={show}>
        <Inner>
          <div>{i('searchError')}</div>
        </Inner>
      </Div>
    );
  } else if (props.searchResults.length > 0) {
    const { queryResults } = props;

    return (
      <Div show={show}>
        <Inner>
          <SearchResultList i={i} queryResults={queryResults} />
        </Inner>
      </Div>
    );
  } else {
    return (
      <Div show={show}>
        <Inner>
          <div>{i('searchNotFound')}</div>
        </Inner>
      </Div>
    );
  }
};

export default SearchResults;
