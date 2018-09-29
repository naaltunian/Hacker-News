import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search.js';
import Table from './Components/Table.js';
import Button from './Components/Button.js';

const DEFAULT_QUERY = 'react';
const DEFAULT_HPP = '100';
const BASE_PATH = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";
const PARAM_PAGE = "page=";
const PARAM_HPP = "hitsPerPage=";

class App extends Component {
  state = {
    result: null,
    searchTerm: DEFAULT_QUERY
  }

  setSearchTopStories = (result) => {
    const {hits, page} = result;
    const oldHits = page !==0 ? this.state.result.hits : [];
    const updatedHits = [...oldHits, ...hits];
    this.setState({ result: { hits:updatedHits, page } });
  }

// change list to result?
  onDismiss = (id) => {
    const isNotID = item => item.objectID !== id;
    const updatedHits = this.state.result.hits.filter(isNotID);
    this.setState({result: { ...this.state.result, hits: updatedHits }});
  }

  onSearchChange = (e) => {
    this.setState({searchTerm: e.target.value});
  }

  onSearchSubmit = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }

  fetchSearchTopStories = (searchTerm, page = 0) => {
    fetch(`${BASE_PATH}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
    .then(response => response.json())
    .then(result => this.setSearchTopStories(result))
    .catch(error => error);
  }

  componentDidMount() {
    const {searchTerm} = this.state;
    this.fetchSearchTopStories(searchTerm);
  }

  render() {
    const {searchTerm, result} = this.state
    const page = (result && result.page) || 0;
    if(!result) {return null;}
    return (
      <div className="page">
        <div className="interactions">
          <Search value={searchTerm} onChange={this.onSearchChange} onSubmit={this.onSearchSubmit}>
            Search
          </Search>
        </div>
        { result ? <Table list={result.hits} onDismiss={this.onDismiss} /> : null }
        <div className="interactions">
          <Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}>
            More
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
