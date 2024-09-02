"use client";
import React, { useState } from "react";
import { GoChevronUp } from "react-icons/go";

interface SizeCheckListProps {
  title: string;
  onReset?: () => void;
}

const sizes = ["S", "M", "L", "XL"];

const SizeCheckList: React.FC<SizeCheckListProps> = ({ title, onReset }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handleSizeSelect = (size: string) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
  };

  return (
    <div className="space-y-4">
      {/* Divider */}
      <div className="h-px w-full bg-[#d9d9d9]"></div>

      {/* Header */}
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

      {/* Size Selection */}
      <div className="grid grid-cols-2 gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            className={`p-2 text-center font-semibold rounded border transition-colors duration-300 ${
              selectedSize === size
                ? "bg-gray-300 border-black text-black"
                : "bg-white border-gray-300 text-gray-800 hover:bg-slate-800 hover:text-white"
            }`}
            onClick={() => handleSizeSelect(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeCheckList;
