import React, { Component } from 'react';
import './App.css';
import Search from './Components/Search.js';
import Table from './Components/Table.js';

const DEFAULT_QUERY = 'react';
const BASE_PATH = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";

class App extends Component {
  state = {
    result: null,
    searchTerm: DEFAULT_QUERY
  }

  setSearchTopStories = (result) => {
    this.setState({result});
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

  fetchSearchTopStories = (searchTerm) => {
    fetch(`${BASE_PATH}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
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
    if(!result) {return null;}
    return (
      <div className="page">
        <div className="interactions">
          <Search value={searchTerm} onChange={this.onSearchChange} onSubmit={this.onSearchSubmit}>
            Search
          </Search>
        </div>
        { result ? <Table list={result.hits} onDismiss={this.onDismiss} /> : null }
      </div>
    );
  }
}

export default App;
