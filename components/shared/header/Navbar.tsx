"use client";
import React, { useState } from "react";
import { FaDownLong } from "react-icons/fa6";
import Collections from "./dropdown/Collections";
import Products from "./dropdown/Products";
import Logo from "./Logo";
import NavIcons from "./NavIcons";
import Pages from "./dropdown/Pages";
import Blogs from "./dropdown/Blogs";
import MotionTransition from "@/components/motion/MotionTransition";
import Link from "next/link";
import UserAccountSidebar from "../user-account-sidebar/UserAccountSidebar";

const navigationData = [
  {
    buttonText: "Home",
    href: "/",
  },
  {
    buttonText: "Collections",
    icon: FaDownLong,
    dropdown: <Collections />, // Dropdown component for Collections
  },
  {
    buttonText: "Products",
    icon: FaDownLong,
    dropdown: <Products />, // Dropdown component for Products
    href: "#",
  },
  {
    buttonText: "Pages",
    icon: FaDownLong,
    dropdown: <Pages />, // Dropdown component for Products
    href: "#",
  },
  {
    buttonText: "Blog",
    icon: FaDownLong,
    dropdown: <Blogs />, // Dropdown component for Products
    href: "#",
  },
];

const Navbar = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  return (
    <section className="relative">
      <nav className="font-inter mx-auto h-auto w-full lg:top-0 relative ">
        <div className="flex items-center px-6  lg:px-10  xl:px-20">
          {/* Logo */}
          <div className="w-40 flex-shrink-0 flex items-center justify-center ">
            <Logo />
          </div>
          {/* NavLinks */}
          <div className="flex-grow flex items-center justify-center space-x-4 lg:space-x-10 ">
            {navigationData.map((navItem, index) => (
              <div
                key={index}
                className={`  ${
                  index !== 1 && index !== 2
                    ? "relative cursor-pointer "
                    : "cursor-pointer z-50"
                }`}
                onMouseEnter={() =>
                  navItem.dropdown && setOpenDropdownIndex(index)
                }
                onMouseLeave={() =>
                  navItem.dropdown && setOpenDropdownIndex(null)
                }
              >
                <button
                  className={`flex items-center rounded-lg py-6 lg:py-8 text-lg   ${
                    openDropdownIndex === index
                      ? "text-black font-bold"
                      : "text-gray-900"
                  }`}
                >
                  <Link href={`${navItem.href}`}>{navItem.buttonText}</Link>
                  {navItem.dropdown && (
                    <svg
                      className={`w-6 h-6 fill-current ml-2 transition-transform duration-300 ${
                        openDropdownIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                    </svg>
                  )}
                </button>
                {openDropdownIndex === index && navItem.dropdown && (
                  <div className="absolute w-full rounded-lg  left-0 z-0">
                    <MotionTransition>{navItem.dropdown}</MotionTransition>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* NavIcons */}
          <div className="flex-grow flex items-end justify-end space-x-4 lg:space-x-6 w-auto ">
            <NavIcons />
          </div>

          {/* Blur effect behind the dropdown */}
          {(openDropdownIndex === 1 || openDropdownIndex === 2) && (
            <div className="absolute inset-0 z-0 h-screen top-24 bg-white bg-opacity-60 backdrop-blur-lg"></div>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
