import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { closeMobileSearchBar } from "@/lib/store/features/searchBar/mobileSearchBarSlice";
import CustomBackDrop from "../../../custom/CustomBackDrop";

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
    dispatch(closeMobileSearchBar());
    setIsInputFocused(false);
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  // Handle clicks within the motion.div but outside the input
  const handleClickInsideMotionDiv = (event: React.MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setIsInputFocused(false);
    }
  };
  return (
    <AnimatePresence>
      {isMobileSearchBarOpen && (
        <div className="">
          {/* Background blur overlay */}
          {isInputFocused && (
            <CustomBackDrop
              // onClose={closeSearchBar}
              top="top-0"
              zIndex="z-10"
              onClose={closeSearchBar}
            />
          )}
          <motion.div
            className="border z-30 bg-white  py-10 absolute top-full w-full left-0 "
            initial={{ y: "20%" }} // Adjust this value for shorter slide-in
            animate={{ y: 0 }}
            exit={{ y: "20%" }} // Adjust this value for shorter slide-out
            transition={{
              duration: 0.3,
              ease: "easeInOut", // Add ease-in-out easing
            }}
            onClick={handleClickInsideMotionDiv} // Click handler for motion.div
          >
            <div className="relative  z-30 bg-white">
              <input
                ref={inputRef} // Attach ref to input
                type="search"
                name="search"
                placeholder="ENTER YOUR KEYWORDS"
                className="h-10 px-10 bg-white border w-full relative text-xs focus:outline-none "
                onFocusCapture={() => setIsInputFocused(true)}
              />
              {isInputFocused && (
                <button
                  type="button"
                  className="absolute right-0 top-0 mt-3 mr-3 text-blue-500"
                >
                  <FaSearch />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileSearchBar;
