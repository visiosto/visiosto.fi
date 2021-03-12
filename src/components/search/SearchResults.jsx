// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import SearchResultList from './SearchResultList';

import createIntl from '../../utils/createIntl';

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
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.04), 0px 1px 1px rgba(0, 0, 0, 0.08),
    0px 3px 8px rgba(0, 0, 0, 0.08), 0px 15px 22px rgba(0, 0, 0, 0.06);
  background: var(--color-background);
`;

const SearchResults = (props) => {
  const i = createIntl(useIntl());
  const { show, queryResults, searchResults } = props;

  if (searchResults.length > 0) {
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
