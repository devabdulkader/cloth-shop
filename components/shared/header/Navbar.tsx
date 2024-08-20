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

const navigationData = [
  {
    buttonText: "Home",
    href: "#",
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
    <section className="lg:relative hidden xl:block ">
      <nav className="font-inter mx-auto h-auto w-full lg:top-0 relative z-0">
        <div className="flex items-center px-6 py-6 lg:px-10 lg:py-4 xl:px-20">
          {/* Logo */}
          <div className="w-40 flex-shrink-0 flex items-center justify-center ">
            <Logo />
          </div>
          {/* NavLinks */}
          <div className="flex-grow flex items-center justify-center space-x-4 lg:space-x-6 w-full  ">
            {navigationData.map((navItem, index) => (
              <div
                key={index}
                className={`${index !== 1 && index !== 2 ? "relative" : ""}`}
                onMouseEnter={() =>
                  navItem.dropdown && setOpenDropdownIndex(index)
                }
                onMouseLeave={() =>
                  navItem.dropdown && setOpenDropdownIndex(null)
                }
              >
                <button
                  className={`flex items-center rounded-lg px-4 py-2 text-lg ${
                    openDropdownIndex === index
                      ? "text-black font-bold"
                      : "text-gray-900"
                  }`}
                >
                  {navItem.buttonText}
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
                  <div className="absolute z-50 w-full rounded-lg  top-10 left-0">
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
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
