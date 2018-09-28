import React from "react";
import Button from './Button.js';

const Search = ({value, onChange, onSubmit, children}) => {
  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={onChange} type="text" />
      <button type='submit'>{children}</button>
    </form>
  )
}

export default Search;
