// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { createRef, Component } from 'react';
import { Link } from 'gatsby';
import axios from 'axios';
import { SearchIcon } from '@primer/octicons-react';
import * as JsSearch from 'js-search';
import styled from 'styled-components';

const events = ['mousedown', 'touchstart'];

const Icon = styled(SearchIcon)`
  width: 1em;
  height: auto;
  margin: 0.3em;
  color: var(--color-text);
  pointer-events: none;
`;

const SearchResults = styled.div`
  display: ${(props) => (props.show ? `block` : `none`)};
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

  .hit-count {
    display: flex;
    justify-content: flex-end;
  }

  .hits {
    ul.hits-list {
      list-style: none;
      margin-left: 0;
      padding-inline-start: 0;
    }

    li.hits-item {
      margin-bottom: 1em;

      a {
        color: var(--color-link);

        h4 {
          margin-bottom: 0.2em;
        }
      }
    }
  }
`;

class SearchContainer extends Component {
  state = {
    pageList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: '',
    hasFocus: false,
  };

  constructor(props) {
    super(props);
    this.rootRef = createRef();
  }

  /**
   * React lifecycle method to fetch the data
   */
  async componentDidMount() {
    axios
      .get(
        `${
          process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : this.props.siteUrl
        }/search/pages-${this.props.lang}.json`,
      )
      .then((result) => {
        const pageData = result.data;
        this.setState({ pageList: pageData.pages });
        this.rebuildIndex();
      })
      .catch((err) => {
        this.setState({ isError: true });
        console.log('====================================');
        console.log(`Something bad happened while fetching the data\n${err}`);
        console.log('====================================');
      });
    events.forEach((event) => {
      document.addEventListener(event, this.onClickOutside);
    });
  }

  componentDidUpdate() {
    events.forEach((event) => {
      document.addEventListener(event, this.onClickOutside);
    });
  }

  componentWillUnmount() {
    events.forEach((event) => {
      document.removeEventListener(event, this.onClickOutside);
    });
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { pageList } = this.state;

    const dataToSearch = new JsSearch.Search('id');
    /**
     * defines a indexing strategy for the data
     * more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy();
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer();
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex('id');

    dataToSearch.addIndex('title'); // sets the index attribute for the data
    dataToSearch.addIndex('content'); // sets the index attribute for the data

    dataToSearch.addDocuments(pageList); // adds the data to be searched
    this.setState({ search: dataToSearch, isLoading: false });
  };

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData = (e) => {
    const { search } = this.state;
    const queryResult = search.search(e.target.value);
    this.setState({ searchQuery: e.target.value, searchResults: queryResult });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  isOutside = (element) => !this.rootRef.current || !this.rootRef.current.contains(element);

  onClickOutside = (event) => {
    if (this.isOutside(event.target)) {
      this.setState({ hasFocus: false });
    }
  };

  render() {
    const { i } = this.props;
    const { pageList, searchResults, searchQuery, hasFocus } = this.state;
    const queryResults = searchQuery === '' ? pageList : searchResults;

    console.log(pageList);

    return (
      <div className={this.props.className}>
        <form className="search-form">
          <input
            className="search-input"
            type="text"
            placeholder={i('searchPlaceholder')}
            aria-label={i('searchPlaceholder')}
            onChange={this.searchData}
            value={searchQuery}
            onFocus={() => this.setState({ hasFocus: true })}
          />
          <Icon />
        </form>
        <SearchResults show={queryResults && searchQuery.length > 0 && hasFocus}>
          <div className="inner-search-results">
            {(() => {
              if (queryResults && queryResults.length > 0) {
                return (
                  <div className="hit-count">
                    {queryResults.length}{' '}
                    {queryResults.length !== 1 ? i('searchResults') : i('searchResult')}
                  </div>
                );
              }
            })()}
            <div className="hits">
              <ul className="hits-list">
                {queryResults.map((result) => (
                  <li className="hits-item" key={result.id}>
                    <Link to={result.slug}>
                      <h4>{result.title}</h4>
                    </Link>
                    <div>{result.excerpt}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SearchResults>
      </div>
    );
  }
}

export default SearchContainer;
