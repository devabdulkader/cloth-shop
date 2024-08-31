import Link from "next/link";
import React from "react";

// Define the prop types for the component
interface CustomButtonProps {
  href: string; // URL for the link
  buttonText: string; // Text to display on the button
  buttonClassName?: string; // Optional class names for the button
  buttonAnimation?: string; // Optional animation classes for the button
}

const CustomButton: React.FC<CustomButtonProps> = ({
  href,
  buttonText,
  buttonClassName = "",
  buttonAnimation = "", 
}) => {
  return (
    <div>
      <Link href={href}>
        <button className={`${buttonClassName} ${buttonAnimation}`}>
          {buttonText}
        </button>
      </Link>
    </div>
  );
};

export default CustomButton;
