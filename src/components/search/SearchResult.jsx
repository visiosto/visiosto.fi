// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import { Link } from 'gatsby';
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from 'react-instantsearch-dom';
import styled, { css } from 'styled-components';
import { useIntl } from 'react-intl';

import createIntl from '../../utils/createIntl';

const HitCount = connectStateResults(({ searchResults }) => {
  const i = createIntl(useIntl());
  const hitCount = searchResults && searchResults.nbHits;

  return hitCount > 0 ? (
    <div className="hit-count">
      {hitCount} {hitCount !== 1 ? i('searchResults') : i('searchResult')}
    </div>
  ) : null;
});

const PageHit = ({ hit }) => (
  <div>
    <Link to={hit.slug}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
);

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits hitComponent={PageHit} />
  </Index>
);

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    <div className="inner-search-results">
      {indices.map((index) => (
        <HitsInIndex index={index} key={index.name} />
      ))}
      <PoweredBy />
    </div>
  </div>
);

const Popover = css`
  position: absolute;
  z-index: 2;
  left: 50%;
  top: 100%;
  margin-top: 0.5em;

  .inner-search-results {
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
  }
`;

export default styled(SearchResult)`
  display: ${(props) => (props.show ? `block` : `none`)};
  ${Popover}

  .hit-count {
    display: flex;
    justify-content: flex-end;
  }

  .ais-Hits {
    ul {
      list-style: none;
      margin-left: 0;
      padding-inline-start: 0;
    }

    li.ais-Hits-item {
      margin-bottom: 1em;

      a {
        color: var(--color-link);

        h4 {
          margin-bottom: 0.2em;
        }
      }
    }
  }

  .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    font-size: 80%;

    svg {
      width: 70px;
    }
  }
`;
