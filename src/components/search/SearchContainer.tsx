// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { graphql, useStaticQuery } from 'gatsby';
import * as JsSearch from 'js-search';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

const events = ['mousedown', 'touchstart'];

const withSiteURL = function withSiteURLFromQueryData(WrappedComponent) {
  function WithSiteURL(props) {
    const data = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              siteURL
            }
          }
        }
      `,
    );

    return <WrappedComponent siteURL={data.site.siteMetadata.siteURL} {...props} />;
  }

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithSiteURL.displayName = `withSiteURL(${wrappedComponentName})`;

  return WithSiteURL;
};

type State = {
  pageList: Array<Object>;
  search: JsSearch.Search;
  searchResults: Array<Object>;
  isLoading: boolean;
  isError: boolean;
  searchQuery: string;
  hasFocus: boolean;
};

type Props = {
  className?: string;
  locale: string;
  siteURL: string;
}

class SearchContainer extends React.Component<Props, State> {
  rootRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.state = {
      pageList: [],
      search: null,
      searchResults: [],
      isLoading: true,
      isError: false,
      searchQuery: '',
      hasFocus: false,
    };

    this.rootRef = createRef();
    this.rebuildIndex = this.rebuildIndex.bind(this);
    this.searchData = this.searchData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  /**
   * React lifecycle method to fetch the data
   */
  async componentDidMount() {
    const { locale, siteURL } = this.props;

    axios
      .get(
        `${
          process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : siteURL
        }/search/pages-${locale.toLowerCase()}.json`,
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
  rebuildIndex() {
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
  }

  /**
   * handles the input change and perform a search with js-search
   * in which the results will be added to the state
   */
  searchData(event) {
    const { search, isLoading, isError } = this.state;

    if (isLoading || isError) {
      this.setState({ searchQuery: event.target.value, searchResults: [] });
    } else {
      const queryResult = search.search(event.target.value);
      this.setState({ searchQuery: event.target.value, searchResults: queryResult });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleClickOutside(event) {
    if (this.rootRef && !this.rootRef.current!.contains(event.target)) {
      this.setState({ hasFocus: false });
    }
  }

  render() {
    const { pageList, searchResults, searchQuery, hasFocus } = this.state;
    const queryResults = searchQuery === '' ? pageList : searchResults;
    const { className } = this.props;

    if (this.state.isLoading) {
      return (
        <div
          ref={this.rootRef}
          className={hasFocus || searchQuery.length > 0 ? `${className} focus` : className}
        >
          <SearchForm
            searchData={this.searchData}
            searchQuery={searchQuery}
            onFocus={() => this.setState({ hasFocus: true })}
            loading
          />
          <SearchResults show={searchQuery.length > 0 && hasFocus} loading />
        </div>
      );
    } else if (this.state.isError) {
      return (
        <div
          ref={this.rootRef}
          className={hasFocus || searchQuery.length > 0 ? `${className} focus` : className}
        >
          <SearchForm
            searchData={this.searchData}
            searchQuery={searchQuery}
            onFocus={() => this.setState({ hasFocus: true })}
            error
          />
          <SearchResults show={searchQuery.length > 0 && hasFocus} error />
        </div>
      );
    } else {
      return (
        <div
          ref={this.rootRef}
          className={hasFocus || searchQuery.length > 0 ? `${className} focus` : className}
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
}

export default withSiteURL(SearchContainer);
