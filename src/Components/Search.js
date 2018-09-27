import React from "react";

class Search extends React.Component {
  render() {
    const {value, onChange, children} = this.props;
    return (
      <form>
        {children}
        <input value={value} onChange={onChange} type="text"></input>
      </form>
    )
  }
}

export default Search;
