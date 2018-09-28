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

  onDismiss = (id) => {
    const isNotID = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotID);
    this.setState({list: updatedList});
  }

  onSearchChange = (e) => {
    this.setState({searchTerm: e.target.value});
  }

  componentDidMount() {
    const {searchTerm} = this.state;
    fetch(`${BASE_PATH}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`)
    .then(response => response.json())
    .then(result => this.setSearchTopStories(result))
    .catch(error => error);
  }

  render() {
    const {searchTerm, result} = this.state
    if(!result) {return null;}
    return (
      <div className="page">
        <div className="interactions">
          <Search value={searchTerm} onChange={this.onSearchChange} >
            Search
          </Search>
        </div>
        <Table list={result.hits} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

export default App;
