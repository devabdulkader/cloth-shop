// components/NavIcons.tsx
"use client";
import React from "react";
import { FaSearch, FaUserCog, FaHeart, FaShoppingCart } from "react-icons/fa";

const NavIcons = () => {
  return (
    <div className="flex space-x-4 ">
      <a href="#" aria-label="Search">
        <FaSearch className="text-xl" />
      </a>
      <a href="#" aria-label="Admin">
        <FaUserCog className="text-xl" />
      </a>
      <a href="#" aria-label="Wishlist">
        <FaHeart className="text-xl" />
      </a>
      <a href="#" aria-label="Cart">
        <FaShoppingCart className="text-xl" />
      </a>
    </div>
  );
};

export default NavIcons;
