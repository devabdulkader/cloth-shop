"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import {
  closeMobileSearchBar,
  openMobileSearchBar,
  toggleMobileSearchBar,
} from "@/lib/store/features/searchBar/mobileSearchBarSlice";
import CustomBackDrop from '../../../custom/CustomBackDrop'
const MobileSearchBar: React.FC = () => {
  const dispatch = useDispatch();

  // Use useSelector to get the state from the Redux store
  const isMobileSearchBarOpen = useSelector(
    (state: RootState) => state.mobileSearchBar.isMobileSearchbarOpen
  );

  // State to handle input focus
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  // Function to close the mobile search bar and reset focus state
  const closeSearchBar = () => {
    setIsInputFocused(false);
    dispatch(toggleMobileSearchBar());
  };
  const handleFocus = () => {
    setIsInputFocused(true);
  };

  return (
    <AnimatePresence>
      {isMobileSearchBarOpen && (
        <>
          {/* Background blur overlay */}
          {isInputFocused &&  <CustomBackDrop onClose={closeSearchBar} top="top-60" zIndex="z-10" />}
          <motion.div
            className="border bg-white z-20 py-20 absolute top-full w-full left-0"
            initial={{ y: "20%" }} // Adjust this value for shorter slide-in
            animate={{ y: 0 }}
            exit={{ y: "20%" }} // Adjust this value for shorter slide-out
            transition={{
              duration: 0.3,
              ease: "easeInOut", // Add ease-in-out easing
            }}
          >
            <div className="relative border">
              <input
                type="search"
                name="search"
                placeholder="ENTER YOUR KEYWORDS"
                className="h-10 px-5 bg-white border w-full relative text-xs focus:outline-none z-50"
                onFocus={handleFocus}
              />
              {isInputFocused && (
                <button
                  type="button"
                  className="absolute right-0 top-0 mt-3 mr-4 text-blue-500"
                >
                  <FaSearch />
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSearchBar;
