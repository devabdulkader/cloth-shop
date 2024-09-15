"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa6";

// Define the structure of items with flagImg and label
interface DropdownItem {
  flagImg: string;
  label: string;
}

interface DropdownProps {
  items: DropdownItem[]; // List of dropdown items
  defaultItem: DropdownItem; // The default selected item
  isOpen: boolean; // Control dropdown visibility
  onToggle: () => void; // Handle dropdown toggle
}

const UserDropdown: React.FC<DropdownProps> = ({
  items,
  defaultItem,
  isOpen,
  onToggle,
}) => {
  const [selectedItem, setSelectedItem] =
    React.useState<DropdownItem>(defaultItem);

  // Handle item selection
  const handleItemClick = (item: DropdownItem) => {
    setSelectedItem(item); // Update the selected item
    onToggle(); // Close the dropdown after selecting
  };

  return (
    <div className="relative flex flex-col gap-5 mb-5">
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
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="w-full text-left py-3 px-4 shadow-sm flex gap-2 border-b border-[#e5e5e5] bg-gray-50 hover:bg-white items-center cursor-pointer"
                    onClick={() => handleItemClick(item)} // Handle item click
                  >
                    <Image
                      src={item.flagImg}
                      alt={item.label}
                      height={300}
                      width={300}
                      className="w-[15px] h-[11px]"
                    />
                    <span className="uppercase text-[10px] w-full">
                      {item.label}
                    </span>
                  </div>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Display the selected item and toggle the dropdown on click */}
        <div
          onClick={onToggle} // Toggle dropdown on click
          className="w-full text-left py-3 px-4 shadow-sm flex gap-2 border-b border-[#e5e5e5] bg-gray-50 hover:bg-white items-center cursor-pointer"
        >
          <Image
            src={selectedItem.flagImg}
            alt={selectedItem.label}
            height={300}
            width={300}
            className="w-[15px] h-[11px]"
          />
          <span className="uppercase text-[10px] w-full">
            {selectedItem.label}
          </span>

          <FaCaretDown/>

        </div>
      </main>
    </div>
  );
};

export default UserDropdown;
