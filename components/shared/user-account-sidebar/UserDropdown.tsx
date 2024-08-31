"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownProps {
  isOpen: boolean;
  toggleDropdown: () => void;
  items: string[];
  title: string;
  defaultItem: string;
}

const UserDropdown: React.FC<DropdownProps> = ({
  isOpen,
  toggleDropdown,
  items,
  title,
  defaultItem,
}) => {
  const [selectedItem, setSelectedItem] = useState(defaultItem);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    toggleDropdown(); // Close the dropdown after selecting an item
  };

  return (
    <div className="relative flex flex-col gap-5 mb-5">
      <div>
        <span>{title}</span>
      </div>

      <main className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-full bg-white w-full left-0 z-10 overflow-hidden"
            >
              <ul className="bg-white border shadow-sm">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className=" border-b hover:bg-gray-200 p-2 bg-white shadow-sm cursor-pointer"
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          onClick={toggleDropdown}
          className="cursor-pointer flex justify-between items-center py-2 px-4 border rounded bg-gray-200 relative"
        >
          <span>{selectedItem}</span>
        </div>
      </main>
    </div>
  );
};

export default UserDropdown;
