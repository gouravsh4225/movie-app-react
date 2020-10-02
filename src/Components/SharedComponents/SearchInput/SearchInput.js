import React, { useState } from "react";
import Fontawesome from "react-fontawesome";
import "./SearchInput.css";

function SearchInput({ searchMovie }) {
  const [searchValue, setsearchValue] = useState("");
  const onChangeSearch = (event) => {
    let { value } = event.target;
    setsearchValue(value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(event, "---");
    searchMovie(searchValue);
  };

  return (
    <div className="search-container">
      <form className="search-input" onSubmit={submitForm}>
        <Fontawesome className="fa-search" name="search-icon" size="2x" />
        <input
          type="text"
          className="search-text"
          name="search-input"
          value={searchValue}
          onChange={onChangeSearch}
          placeholder="Search the movie"
        />
      </form>
    </div>
  );
}
export default SearchInput;
