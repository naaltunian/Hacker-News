import React from "react";

class Search extends React.Component {
  render() {
    const {value, onChange} = this.props;
    return (
      <form>
        <input value={value} onChange={onChange} type="text"></input>
      </form>
    )
  }
}

export default Search;
