import React from "react";
import "./SearchInput.css";

export const SearchInput = () => {
  return (
    <div className="search-input-container">
      <input type="text" placeholder="Search here" />
      <button>
        <img src="../searchbar-images/close.png" alt="close" />
      </button>
    </div>
  );
};
