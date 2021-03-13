// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { createRef, Component } from 'react';
import axios from 'axios';
import * as JsSearch from 'js-search';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const events = ['mousedown', 'touchstart'];

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
    this.handleClickOutside = this.handleClickOutside.bind(this);
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
      document.addEventListener(event, this.handleClickOutside);
    });
  }

  componentDidUpdate() {
    events.forEach((event) => {
      document.addEventListener(event, this.handleClickOutside);
    });
  }

  componentWillUnmount() {
    events.forEach((event) => {
      document.removeEventListener(event, this.handleClickOutside);
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

  handleClickOutside = (event) => {
    if (this.rootRef && !this.rootRef.current.contains(event.target)) {
      this.setState({ hasFocus: false });
    }
  };

  render() {
    const { pageList, searchResults, searchQuery, hasFocus } = this.state;
    const queryResults = searchQuery === '' ? pageList : searchResults;

    return (
      <div
        ref={this.rootRef}
        className={
          hasFocus || searchQuery.length > 0
            ? `${this.props.className} focus`
            : this.props.className
        }
      >
        <SearchForm
          searchData={this.searchData}
          searchQuery={searchQuery}
          onFocus={() => this.setState({ hasFocus: true })}
        />
        <SearchResults
          queryResults={queryResults}
          show={queryResults && searchQuery.length > 0 && hasFocus}
          searchResults={searchResults}
        />
      </div>
    );
  }
}

export default SearchContainer;
