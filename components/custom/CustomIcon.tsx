import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface CustomIconProps {
  Icon: IconType; // The icon component from react-icons
  iconClassName?: string; // Optional class name for the icon
  quantity?: string | number; // Value to display inside the span (optional)
  onClick?: () => void; // Optional click event handler
  href?: string; // Optional href for linking
}

const CustomIcon: React.FC<CustomIconProps> = ({
  Icon,
  iconClassName = "",
  quantity,
  onClick,
  href,
}) => {
  const content = (
    <div
      className="relative cursor-pointer"
      onClick={onClick} // Assign onClick event if provided
    >
      <Icon className={` ${iconClassName}`} />
      {quantity !== undefined && (
        <span className="absolute text-xs -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex justify-center items-center">
          {quantity}
        </span>
      )}
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      {content}
    </Link>
  ) : (
    content
  );
};

export default CustomIcon;
