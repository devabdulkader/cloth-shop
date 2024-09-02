// components/FilterSidebar.tsx
"use client";
import React, { useState } from "react";
import { HiBars4 } from "react-icons/hi2";
import { motion } from "framer-motion";
import CategoryButton from "./CategoryButton";
import {
  RiCheckboxBlankCircleFill,
  RiDeleteBin5Line,
  RiMenuAddLine,
} from "react-icons/ri";
import { GoChevronUp, GoDotFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { FaAngleUp } from "react-icons/fa6";

import CustomCheckboxGroup from "./CustomCheckboxGroup";
import ColorCheckList from "./ColorCheckList";
import SizeCheckList from "./SizeCheckList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { closeFilterSidebar } from "@/lib/store/features/filterSidebar/filterSidebarSlice";
import CustomBackDrop from "../custom/CustomBackDrop";

const categoriesData = [
  { title: "Bikini", href: "/bikini" },
  { title: "Running Shoes", href: "/running-shoes" },
  { title: "Mate Shoes", href: "/mate-shoes" },
  { title: "T-shirt", href: "/t-shirt" },
  { title: "Sneakers", href: "/sneakers" },
  { title: "Women", href: "/women" },
  { title: "Summer Fashion", href: "/summer-fashion" },
];
const categoriesOptions = [
  { name: "Cargo Pants", count: 1 },
  { name: "Cup Sleeves", count: 1 },
  { name: "Denim", count: 1 },
  { name: "Denim Shorts", count: 1 },
  { name: "Dresses", count: 3 },
  { name: "Hoodies", count: 1 },
  { name: "Pants", count: 4 },
  { name: "Shirts", count: 2 },
  { name: "Skirts", count: 1 },
  { name: "T-Shirts", count: 9 },
  { name: "Trousers", count: 1 },
];
const availabilityOptions = [
  { name: "In Stock", count: 23 },
  { name: "Out of Stock", count: 12 },
];
const productTypeOptions = [
  { name: "Dresses", count: 3 },
  { name: "Hoodie", count: 2 },
  { name: "Pants", count: 5 },
  { name: "Shirts", count: 2 },
  { name: "Skirts", count: 1 },
  { name: "Sleeves", count: 1 },
  { name: "T-Shirts", count: 9 },
];
const moreFiltersOptions = [
  { name: "Brown", count: 23 },
  { name: "Pants", count: 23 },
  { name: "Summer", count: 23 },
  { name: "Women", count: 23 },
];
const brandOptions = [
  { name: "Chanel", count: 3 },
  { name: "Creative", count: 5 },
  { name: "Dior", count: 6 },
  { name: "Nova", count: 2 },
  { name: "Pranda", count: 7 },
];

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const isFilterSidebarOpen = useSelector(
    (state: RootState) => state.filterSidebar.isFilterSidebarOpen
  );
  const handleClose = () => {
    dispatch(closeFilterSidebar());
  };

  const [visibleItems, setVisibleItems] = useState<number>(5); // Number of items to show initially
  const [showMore, setShowMore] = useState<boolean>(false); // State to track if the remaining items should be shown

  // Function to handle "See More +" click
  const handleSeeMore = () => {
    setShowMore(!showMore); // Toggle the state
  };
  const handleReset = () => {
    console.log("Reset clicked");
    // You can implement the reset logic here if needed
  };
  return (
    <>
      {isFilterSidebarOpen && <CustomBackDrop onClose={handleClose} />}

      {/* Sidebar */}

      <div
        className={`fixed  min-h-screen overflow-y-auto lg:min-h-max lg:relative top-0 left-0 z-layer-2 lg:z-0 bg-white h-full w-[80%] lg:w-96 py-4 px-8 shadow-lg lg:shadow-none transform transition-transform duration-500 ${
          isFilterSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex-col gap-6">
          {/* Categories */}
          <div className="flex flex-col">
            <p className="flex space-x-3 mb-6 items-center ">
              <HiBars4 className="text-2xl" />
              <span className="uppercase text-xl font-semibold">
                Categories
              </span>
            </p>
            <div className="flex flex-col gap-1">
              {categoriesData.slice(0, visibleItems).map((category, index) => (
                <CategoryButton key={index} href={category.href}>
                  {category.title}
                </CategoryButton>
              ))}
              {/* Conditionally render the remaining items with height transition */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: showMore ? "auto" : 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden flex flex-col gap-1"
              >
                {categoriesData.slice(visibleItems).map((category, index) => (
                  <CategoryButton key={index} href={category.href}>
                    {category.title}
                  </CategoryButton>
                ))}
              </motion.div>
              {/* Show "See More +" button */}
              <CategoryButton onClick={handleSeeMore}>
                {showMore ? "See Less -" : "See More +"}
              </CategoryButton>
            </div>
          </div>

          {/* Filter By */}
          <section className="flex flex-col space-y-6">
            <p className="flex space-x-3 items-center mt-6">
              <RiMenuAddLine className="text-2xl" />
              <span className="uppercase text-xl font-semibold">filter by</span>
            </p>

            {/* Divider */}
            <div className="h-px w-full bg-[#d9d9d9]"></div>
            <div className="w-full">
              <button className="flex space-x-2 w-full py-3 bg-slate-800 text-white text-sm justify-center items-center rounded-full">
                <RiDeleteBin5Line /> <span>Clear All</span>
              </button>
            </div>
            <div className="flex justify-between items-center">
              {" "}
              <p className="flex items-center space-x-2">
                {" "}
                <RiCheckboxBlankCircleFill size={6} />
                <span>Color: White </span>
              </p>
              <RxCross2 />
            </div>

            <CustomCheckboxGroup
              title="Availability"
              items={availabilityOptions}
              onReset={handleReset}
            />

            <CustomCheckboxGroup
              title="Category"
              items={categoriesOptions}
              onReset={handleReset}
            />

            <CustomCheckboxGroup
              title="Product Type"
              items={productTypeOptions}
              onReset={handleReset}
            />
            <CustomCheckboxGroup
              title="More Filters"
              items={moreFiltersOptions}
              onReset={handleReset}
            />
            <CustomCheckboxGroup
              title="Brand"
              items={brandOptions}
              onReset={handleReset}
            />
            <ColorCheckList title="Color" onReset={handleReset} />

            {/* Size Filter Section */}
            <SizeCheckList title="Size" onReset={handleReset} />
          </section>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
