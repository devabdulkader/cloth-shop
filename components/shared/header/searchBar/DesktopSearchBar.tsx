"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { BUTTON_ANIMATION_CLASSES } from "@/lib/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleDesktopSearchBar } from "@/lib/store/features/searchBar/desktopSearchBarSlice";
import CustomButton from "@/components/custom/CustomButton";

const DesktopSearchBar: React.FC = () => {
  const dispatch = useDispatch();
  // Access the correct part of the state
  const isDesktopSearchBarOpen = useSelector(
    (state: any) => state.desktopSearchBar.isDesktopSearchBarOpen
  );

  return (
    <>
      <AnimatePresence>
        {isDesktopSearchBarOpen && (
          <div className="fixed top-0 left-0 h-screen w-full z-layer-2">
            <motion.div
              className="relative left-0 transform bg-white p-8 rounded-lg shadow-lg z-20 w-full px-20 flex flex-col gap-10"
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5 }}
              // onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-3 pl-14 pr-12 outline-2 border-2 border-black rounded-full text-lg"
                />
                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 flex justify-center items-center cursor-pointer">
                  <FaSearch className="text-gray-600" size={16} />
                </div>
                <div className="absolute right-5 top-1/2 transform -translate-y-1/2 flex justify-center items-center cursor-pointer">
                  <FaSearch className="text-gray-600" size={16} />
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-lg uppercase font-medium">Hot Search</p>
                <CustomButton
                  buttonText="man"
                  href="/"
                  buttonClassName="text-sm rounded-full font-semibold py-2 px-4 bg-gray-200 text-black hover:bg-black hover:text-white"
                  buttonAnimation={`${BUTTON_ANIMATION_CLASSES}`}
                />
              </div>
            </motion.div>
            <motion.div
              className="fixed inset-0 bg-white bg-opacity-0 backdrop-blur-md cursor-crosshair z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => dispatch(toggleDesktopSearchBar())}
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DesktopSearchBar;
