"use client";
import React, { useState } from "react";
import { GoChevronUp } from "react-icons/go";

interface ColorCheckListProps {
  title: string;
  onReset?: () => void;
}

// Updated colors array with lighter colors and white
const colors = [
  "#ffcccc", // Light Red
  "#ccffcc", // Light Green
  "#ccccff", // Light Blue
  "#ffffcc", // Light Yellow
  "#ffccff", // Light Magenta
  "#ccffff", // Light Cyan
  "#ffffff", // White
];

const ColorCheckList: React.FC<ColorCheckListProps> = ({ title, onReset }) => {
  // Set default selected color to white
  const [selectedColor, setSelectedColor] = useState<string | null>("#ffffff");

  const handleColorSelect = (color: string) => {
    setSelectedColor((prevColor) => (prevColor === color ? null : color));
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

      {/* Color Selection */}
      <div className="flex flex-wrap gap-3">
        {colors.map((color) => (
          <div
            key={color}
            className={`h-8 w-8 rounded-full cursor-pointer border-2 ${
              selectedColor === color
                ? "border-black" // Selected color border
                : color === "#ffffff"
                ? "border-gray-300" // Light border for white when not selected
                : "border-transparent" // No border for other colors when not selected
            }`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorSelect(color)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ColorCheckList;
