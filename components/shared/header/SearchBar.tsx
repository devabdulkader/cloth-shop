import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div>
      <div className=" border-t bg-blue-100 z-50 py-20 absolute top-full w-full left-0">
        <div className="relative border">
          <input
            type="search"
            name="search"
            placeholder="ENTER YOUR KEYWORDS"
            className="h-10 px-5 bg-gray-200  w-full text-xs focus:outline-none"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
