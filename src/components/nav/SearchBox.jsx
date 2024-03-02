import React from "react";
import { CiSearch } from "react-icons/ci";

export const SearchBox = () => {
  return (
    <div className="search-box">
      <input type="text" />
      <button type="button">
        <CiSearch />
      </button>
    </div>
  );
};
