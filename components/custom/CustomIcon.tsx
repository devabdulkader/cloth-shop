"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";

interface CustomIconProps {
  Icon: IconType; // The icon component from react-icons
  iconClassName?: string; // Optional class name for the icon
  quantity?: string | number; // Value to display inside the span (optional)
  onClick?: () => void; // Optional click event handler
  href?: string; // Optional href for linking
  title?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({
  Icon,
  iconClassName = "",
  quantity,
  onClick,
  href,
  title,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  // Fix hydration issue by checking if mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null; // Wait until mounted to render

  const content = (
    <div
      className="relative cursor-pointer flex flex-col justify-center items-center"
      onClick={onClick} // Assign onClick event if provided
    >
      <Icon className={` ${iconClassName}`} />
      {quantity !== undefined && (
        <span className="absolute text-xs -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex justify-center items-center">
          {quantity}
        </span>
      )}
      {title && <span className="text-xs block">{title}</span>}{" "}
    </div>
  );

  return href ? (
    <Link
      href={href}
      className="flex flex-col items-center justify-center relative"
    >
      {content}
      {/* Title is displayed here */}
    </Link>
  ) : (
    content
  );
};

export default CustomIcon;
