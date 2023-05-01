import React, { useState, useEffect } from "react";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";
import axios from "axios";
import "./Search.css";

const API_URL =
  "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

// 2- Solutions

// 1) Fetch API => Filter Locally
//  Filter from local array (but the data is initially loaded by the API)

// 2) Filter Data based on API call in each keystroke

export const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchList, setSearchList] = useState([]);

  // Used for local filter
  /* const [filteredList, setFilteredList] = useState([]); */

  // Handle onChange event in input
  const handleChange = (event) => {
    setSearchInputValue(event.target.value);

    //Filtering the input data from the result-used for local-filter
    /* const newFilteredItems = searchList.filter((data) => {
      return data.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setFilteredList(newFilteredItems); */
  };

  // Clear input filed when close button is clicked
  const clearSearch = () => {
    setSearchInputValue("");
    /* setFilteredList([]); */
    setSearchList([]);
  };

  // Fetch Movies API
  const fetchMovies = async () => {
    try {
      const response = await axios(API_URL, {
        params: {
          // query: "movie",
          query: searchInputValue,
        },
      });
      setSearchList(response.data.results);
      // setFilteredList(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (searchInputValue) fetchMovies();
    }, 300);
  }, [searchInputValue]);

  return (
    <div className="search-container">
      <div className="heading-section">
        <img
          src="public/searchbar-images/search-glass.png"
          alt="Search for a movie"
        />
        <h1>Looking for a movie?</h1>
      </div>
      <SearchInput
        searchInputValue={searchInputValue}
        handleChange={handleChange}
        clearSearch={clearSearch}
      />
      {/* <SearchList searchList={filteredList} /> */}

      <SearchList searchList={searchList} />
    </div>
  );
};
