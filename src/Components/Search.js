import React from "react";

const Search = ({value, onChange, onSubmit, children}) => {
  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} type="text" />
      <button type='submit'>{children}</button>
    </form>
  )
}

export default Search;
