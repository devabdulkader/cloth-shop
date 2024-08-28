// components/NavIcons.tsx
"use client";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaSearch, FaUserCog, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import { MdOutlineShop, MdOutlineShoppingBag } from "react-icons/md";
import UserSidebarToggler from "../user-account-sidebar/UserSidebarToggler";

const NavIcons = () => {
  return (
    <div className="space-x-8 md:flex hidden">
      <a href="#">
        <IoMdSearch className="text-3xl" />
      </a>
      <UserSidebarToggler />
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
