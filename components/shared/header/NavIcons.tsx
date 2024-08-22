// components/NavIcons.tsx
"use client";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaSearch, FaUserCog, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import { MdOutlineShop, MdOutlineShoppingBag } from "react-icons/md";

const NavIcons = () => {
  return (
    <div className="flex space-x-8 ">
      <a href="#">
        <IoMdSearch className="text-3xl" />
      </a>
      <a href="#">
        <AiOutlineUser className="text-3xl" />
      </a>
      <a href="#">
        <IoStarOutline className="text-3xl" />
      </a>
      <a href="#" className="text-3xl">
        <MdOutlineShoppingBag />
      </a>
    </div>
  );
};

export default NavIcons;
