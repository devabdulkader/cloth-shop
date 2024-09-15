"use client";
import React, { useState } from "react";
import {
  RiArrowDownSFill,
  RiArrowUpSFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

const Reviews = () => {
  const [highlight, setHighlight] = useState("");
  const [numberOption, setNumberOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="sm:w-[450px] w-full flex-grow flex flex-col gap-5 lg:w-auto">
      {/* Header */}
      <header className="flex justify-between items-center">
        {/* Dropdowns */}
        <div className="flex gap-5">
          <select
            id="highlights"
            name="highlights"
            value={highlight}
            onChange={(e) => setHighlight(e.target.value)}
            onClick={handleDropdownClick}
            className="block w-28 p-2 bg-white border border-gray-300 rounded-lg  shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Highlight</option>
            <option value="recent">Recent</option>
            <option value="highest">Highest</option>
            <option value="lowest">Lowest</option>
            <option value="review-media">Review with media</option>
          </select>

          <select
            id="number-options"
            name="number-options"
            value={numberOption}
            onChange={(e) => setNumberOption(e.target.value)}
            className="block p-2 w-20 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center gap-2">
         <div className="block bg-white border p-2 w-14 flex justify-center items-center  border-gray-300 rounded-lg shadow-sm "
         >
         <RiArrowLeftSLine
            size={24}
          />
          </div>
          <span className="text-sm">Page 1</span>
          <div className="block bg-white border p-2 w-14 flex justify-center items-center  border-gray-300 rounded-lg shadow-sm "
         >
          <RiArrowRightSLine size={24} className="cursor-pointer" />
          </div>
        </div>
      </header>

      <div className="rounded-md bg-white border-[1px] border-gray-300 shadow-lg h-32 flex justify-center items-center px-5">
        <p>No reviews yet, lead the way and share your thoughts!</p>
      </div>
    </div>
  );
};

export default Reviews;
