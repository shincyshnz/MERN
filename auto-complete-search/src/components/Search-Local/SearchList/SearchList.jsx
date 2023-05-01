import React from "react";
import "./SearchList.css";

export const SearchList = () => {
  return (
    <div className="search-list-container">
      <div className="search-items">
        <img
          width="50"
          height="50"
          style={{ objectFit: "contain" }}
          src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
          alt="movie poster"
        />
        <p className="title">
          TitleTitleTitleTitlitleTitleTitleTitleTitleTitleTitlTitleTitleTitleTitleTitle
          Title Title Title Title Title Title
        </p>
      </div>
    </div>
  );
};
