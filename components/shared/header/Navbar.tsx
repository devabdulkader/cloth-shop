"use client";
import React, { useState, useEffect } from "react";
import { FaDownLong } from "react-icons/fa6";
import Collections from "./dropdown/Collections";
import Products from "./dropdown/Products";
import Logo from "./Logo";
import NavIcons from "./NavIcons";
import Pages from "./dropdown/Pages";
import Blogs from "./dropdown/Blogs";
import MotionTransition from "@/components/motion/MotionTransition";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import DesktopSearchBar from "./searchBar/DesktopSearchBar";

// const navigationData = [
//   {
//     buttonText: "Home",
//     href: "/",
//   },
//   {
//     buttonText: "Collections",
//     icon: FaDownLong,
//     dropdown: <Collections />,
//   },
//   {
//     buttonText: "Products",
//     icon: FaDownLong,
//     dropdown: <Products />,
//     href: "#",
//   },
//   {
//     buttonText: "Pages",
//     icon: FaDownLong,
//     dropdown: <Pages />,
//     href: "#",
//   },
//   {
//     buttonText: "Blog",
//     icon: FaDownLong,
//     dropdown: <Blogs />,
//     href: "#",
//   },
// ];

const navigationData = [
  {
    buttonText: "Home",
    href: "/",
  },
  {
    buttonText: "Product",
    href: "/products",
  },

  {
    buttonText: "About Us",
    icon: FaDownLong,
    dropdown: <Pages />, // Dropdown component for Pages
    href: "#",
  },
  {
    buttonText: "Contact Us",
    href: "/contact-us",
  },
];

const Navbar = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [isScrolledUp, setIsScrolledUp] = useState<boolean>(true); // Initialize to true
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setIsScrolledUp(false);
      } else if (scrollTop < lastScrollTop) {
        // Scrolling up
        setIsScrolledUp(true);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <section
      className={`w-full h-auto fixed top-0 transition-transform duration-300 ease-in-out ${
        isScrolledUp ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-full h-auto bg-white px-5 xl:px-10 2xl:px-20">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <div>
            <Logo />
          </div>
          {/* NavLinks */}
          <div className="flex space-x-10 h-full justify-center items-center">
            {navigationData.map((navItem, index) => (
              <div
                key={index}
                className={`relative ${
                  index !== 1 && index !== 2
                    ? "relative cursor-pointer"
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
                  className={`flex items-center rounded-lg py-6 lg:py-8 text-lg ${
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
                  <div className="absolute w-full rounded-lg left-0 z-0">
                    <MotionTransition>{navItem.dropdown}</MotionTransition>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* NavIcons */}
          <div className="flex justify-center items-center space-x-4 lg:space-x-6 w-auto">
            <NavIcons />
          </div>

          {/* Blur effect behind the dropdown */}
          {/* {(openDropdownIndex === 1 || openDropdownIndex === 2) && (
            <div className="absolute inset-0 z-0 h-screen top-24 bg-white bg-opacity-60 backdrop-blur-lg"></div>
          )} */}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
