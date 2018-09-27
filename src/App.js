import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1
  }
]

function isSearched(searchTerm) {
  return function (item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

class App extends Component {
  state = {
    list: list,
    searchTerm: ""
  }

  onDismiss = (id) => {
    const isNotID = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotID);
    this.setState({list: updatedList});
  }

  onSearchChange = (e) => {
    this.setState({searchTerm: e.target.value});
  }

  render() {
    return (
      <div>
        <form>
          <input onChange={this.onSearchChange} type="text"></input>
        </form>
        {this.state.list.filter(isSearched(this.state.searchTerm)).map((item) => {
          return(
            <div key={item.objectID}>
              <span><a href={item.url}>{item.title}</a></span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>
                <button onClick={() => this.onDismiss(item.objectID)} type="button">Dismiss</button>
              </span>
            </div>
        )
      })
      }
      </div>
    );
  }
}

export default App;
