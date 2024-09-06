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
import DesktopSearchBar from "./searchBar/DesktopSearchBar";
import Nav from "./Nav";

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
  const [isScrolledUp, setIsScrolledUp] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false); // Track if the nav should be sticky
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Log the scroll position
      // console.log("Current scroll position:", scrollTop);
      // Check if scrolled down more than 300px to activate sticky
      if (scrollTop > 130) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Determine if scrolling up or down
      if (scrollTop > lastScrollTop) {
        setIsScrolledUp(false); // Hide fixed navbar on scroll down
      } else {
        setIsScrolledUp(true); // Show fixed navbar on scroll up
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // Reset at the top
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div>
      {/* Regular Nav (relative) */}
      <div className="relative w-full">
        <Nav />
      </div>

      {/* Fixed Nav (appears on scroll up if sticky is true) */}
      {isSticky && (
        <div
          className={`fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out ${
            isScrolledUp ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Nav />
        </div>
      )}
    </div>
  );
};

export default Navbar;
