import React from "react";
import { SearchInput } from "./SearchInput/SearchInput";
import "./Search.css";
import { SearchList } from "./SearchList/SearchList";

export const Search = () => {
  return (
    <div className="search-container">
      <div className="heading-section">
        <img
          src="public/searchbar-images/search-glass.png"
          alt="Search for a movie"
        />
        <h1>Looking for a movie?</h1>
      </div>
      <SearchInput />
      <SearchList />
    </div>
  );
};
