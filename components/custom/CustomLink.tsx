// components/CustomLink.tsx
import Link from "next/link";
import { useDispatch } from "react-redux";
import React from "react";

interface CustomLinkProps {
  href: string;
  onClose?: () => void; // Make onClose a function that returns any type (action object or thunk)
  children: React.ReactNode;
  className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  onClose,
  children,
  className = "",
  ...rest
}) => {
  return (
    <Link href={`/${href}`} {...rest} className={className} onClick={onClose}>
      {/* Use the handleClick function on the anchor tag's onClick event */}

      {children}
    </Link>
  );
};

export default CustomLink;
