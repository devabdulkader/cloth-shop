import React from "react";
import { FaSearch } from "react-icons/fa";

const MobileSideBarSearch = () => {
  return (
    <div className="px-5 py-10">
      <div className="relative   border">
        <input
          type="search"
          name="serch"
          placeholder="ENTER YOUR KEYWORDS"
          className="h-10 px-5 bg-gray-200 pr-10 w-full  text-xs focus:outline-none"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default MobileSideBarSearch;
