// components/CategoryButton.tsx
"use client";
import React from "react";
import Link from "next/link";

type CategoryButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string; // Additional classes for customization
};

const CategoryButton: React.FC<CategoryButtonProps> = ({
  href,
  onClick,
  children,
  className = "",
}) => {
  // Default classes for styling
  const defaultClasses =
    "py-2 px-4 bg-gray-100 rounded-md hover:bg-gray-200 inline-block";

  // Render a link if 'href' is provided, otherwise render a button
  return href ? (
    <Link href={href} className={`${defaultClasses} ${className}`}>
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={`${defaultClasses} ${className}`}>
      {children}
    </button>
  );
};

export default CategoryButton;
