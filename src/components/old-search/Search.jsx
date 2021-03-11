// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { createRef, useState } from 'react';
import { InstantSearch } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import styled from 'styled-components';

import SearchBox from './SearchBox';
import SearchResult from './SearchResult';

import useClickOutside from './useClickOutside';

const SearchRoot = styled.div`
  display: inline-block;
  position: relative;
  margin: 0.6em 0;
  border-radius: 0.25rem;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.04), 0px 1px 1px rgba(0, 0, 0, 0.08),
    0px 3px 8px rgba(0, 0, 0, 0.08), 0px 15px 22px rgba(0, 0, 0, 0.06);
  transition: box-shadow 100ms ease-in;
`;

const Search = (props) => {
  const rootRef = createRef();
  const [query, setQuery] = useState();
  const [hasFocus, setFocus] = useState(false);
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  );

  useClickOutside(rootRef, () => setFocus(false));

  return (
    <SearchRoot ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={props.indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchBox onFocus={() => setFocus(true)} hasFocus={hasFocus} />
        <SearchResult show={query && query.length > 0 && hasFocus} indices={props.indices} />
      </InstantSearch>
    </SearchRoot>
  );
};

export default Search;
