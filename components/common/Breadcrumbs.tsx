// Breadcrumbs.tsx
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

// Define the type for each breadcrumb item
interface BreadcrumbItem {
  name: string;
}

// Define the props type for the Breadcrumbs component
interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav
      aria-label="breadcrumb"
      className="flex items-center space-x-2 text-md font-medium text-gray-600"
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span>{item.name}</span>
          {index < items.length - 1 && <GoDotFill />}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
