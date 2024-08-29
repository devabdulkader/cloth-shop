// components/NavIcons.tsx
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaSearch, FaUserCog, FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import { MdOutlineShop, MdOutlineShoppingBag } from "react-icons/md";
import UserSidebarToggler from "../user-account-sidebar/UserSidebarToggler";

const NavIcons = () => {
  return (
    <div className="space-x-8 flex justify-center items-center">
      <IoMdSearch className="text-2xl" />

      <UserSidebarToggler />

      <IoStarOutline className="text-2xl" />
    </div>
  );
};

export default NavIcons;
