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

class App extends Component {
  state = {
    list: list
  }

  onDismiss = (id) => {
    const isNotID = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotID);
    this.setState({list: updatedList});
  }

  render() {
    return (
      <div>
        {this.state.list.map((item) => {
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
