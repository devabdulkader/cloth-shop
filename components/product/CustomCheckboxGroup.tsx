"use client";
import React, { useState } from "react";
import { GoChevronUp } from "react-icons/go";

// Define the type for each checkbox item
type CheckboxItem = {
  name: string;
  count: number;
};

// Define the props type for the CustomCheckboxGroup component
type CustomCheckboxGroupProps = {
  title: string;
  items: CheckboxItem[];
  onReset?: () => void;
};

const CustomCheckboxGroup: React.FC<CustomCheckboxGroupProps> = ({
  title,
  items,
  onReset,
}) => {
  // State to manage the checked state of each checkbox item
  const [checkedItems, setCheckedItems] = useState(
    new Array(items.length).fill(false)
  );

  // Handle checkbox change event
  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Divider */}
      <div className="h-px w-full bg-[#d9d9d9]"></div>
      <div className="flex justify-between items-center">
        <p className="font-semibold flex items-center space-x-2">
          <GoChevronUp />
          <span className="uppercase">{title}</span>
        </p>
        {onReset && (
          <button className="uppercase text-xs" onClick={onReset}>
            Reset
          </button>
        )}
      </div>

      <div className="overflow-y-auto max-h-52 custom-scrollbar flex flex-col space-y-3 pr-3  ">
        {items.map((item, index) => (
          <label
            key={index}
            className="flex items-center justify-between text-sm font-medium cursor-pointer"
          >
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={checkedItems[index]}
                onChange={() => handleCheckboxChange(index)}
                className="h-5 w-5 cursor-pointer rounded-sm border border-solid"
              />
              <span>{item.name}</span>
            </div>
            <span>({item.count})</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CustomCheckboxGroup;
