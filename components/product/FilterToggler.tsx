"use client";
import { toggleFilterSidebar } from "@/lib/store/features/filterSidebar/filterSidebarSlice";
import { RootState } from "@/lib/store/store";
import React from "react";
import { RiMenuAddLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const FilterToggler = () => {
  const dispatch = useDispatch();
  const isFilterSidebarOpen = useSelector(
    (state: RootState) => state.filterSidebar.isFilterSidebarOpen
  );
  const handleToggle = () => {
    dispatch(toggleFilterSidebar());
  };

  return (
    <div
      onClick={handleToggle}
      className="flex space-x-3 items-center mt-6 lg:hidden"
    >
      <RiMenuAddLine className="text-2xl" />
      <span className="uppercase text-xl font-semibold">filter by</span>
    </div>
  );
};

export default FilterToggler;
