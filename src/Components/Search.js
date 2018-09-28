import React from "react";

const Search = ({value, onChange, children}) => {
  return (
    <form>
      {children}
      <input value={value} onChange={onChange} type="text"></input>
    </form>
  )
}

export default Search;
