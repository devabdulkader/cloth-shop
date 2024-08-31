import React from "react";
import { IconType } from "react-icons";

interface CustomIconProps {
  Icon: IconType; // The icon component from react-icons
  iconClassName?: string; // Optional class name for the icon
  quantity?: string | number; // Value to display inside the span
}

const CustomIcon: React.FC<CustomIconProps> = ({
  Icon,
  iconClassName = "",
  quantity = "0",
}) => {
  return (
    <div className="relative">
      <Icon className={` ${iconClassName}`} />
      <span className="absolute text-xs -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex justify-center items-center">
        {quantity}
      </span>
    </div>
  );
};

export default CustomIcon;
