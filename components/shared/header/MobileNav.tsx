"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowReturnLeft } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import NavIcons from "./NavIcons";
import Logo from "./Logo";
import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { toggleNav } from "@/lib/store/features/nav/navSlice";
import { FaSearch } from "react-icons/fa";
import Contact from "./Contact";

// Define TypeScript interfaces for navigation data
interface SubMenuItem {
  title?: string;
  href?: string;
  buttonText?: string;
  subMenu?: SubMenuItem[];
}

interface MenuStackItem {
  items: SubMenuItem[];
  title: string;
}

const navigationData: SubMenuItem[] = [
  {
    title: "Home",
    href: "#",
  },
  {
    buttonText: "Collections",
    subMenu: [
      {
        buttonText: "Spring Collection",
        subMenu: [
          { title: "T-Shirts", href: "#" },
          { title: "Hoodies", href: "#" },
        ],
      },
      {
        buttonText: "Summer Collection",
        subMenu: [
          { title: "Shorts", href: "#" },
          { title: "Swimwear", href: "#" },
        ],
      },
    ],
  },
  {
    buttonText: "Products",
    subMenu: [
      {
        buttonText: "Electronics",
        subMenu: [
          { title: "Laptops", href: "#" },
          { title: "Mobile Phones", href: "#" },
        ],
      },
      {
        buttonText: "Home Appliances",
        subMenu: [
          { title: "Refrigerators", href: "#" },
          { title: "Microwaves", href: "#" },
        ],
      },
    ],
  },
  {
    buttonText: "Pages",
    subMenu: [
      {
        title: "About Us",
        href: "#",
      },
      {
        title: "Contact Us",
        href: "#",
      },
    ],
  },
  {
    buttonText: "Blog",
    subMenu: [
      {
        buttonText: "Tech",
        subMenu: [
          { title: "AI", href: "#" },
          { title: "Blockchain", href: "#" },
        ],
      },
      {
        buttonText: "Lifestyle",
        subMenu: [
          { title: "Travel", href: "#" },
          { title: "Food", href: "#" },
        ],
      },
    ],
  },
];
const MobileNav: React.FC = () => {
  const dispatch = useDispatch();
  const isNavOpen = useSelector((state: RootState) => state.nav.isOpen);

  const [menuStack, setMenuStack] = useState<MenuStackItem[]>([
    { items: navigationData, title: "" },
  ]);
  const [isNavigatingForward, setIsNavigatingForward] = useState<boolean>(true);

  const currentMenu = menuStack[menuStack.length - 1];

  const navigateToSubMenu = (subMenu: SubMenuItem[], title: string) => {
    setIsNavigatingForward(true);
    setMenuStack([...menuStack, { items: subMenu, title }]);
  };

  const navigateBack = () => {
    setIsNavigatingForward(false);
    setMenuStack(menuStack.slice(0, -1));
  };

  return (
    <section className="w-full xl:hidden fixed top-0 left-0 h-20 flex justify-center items-center px-10 bg-white z-20">
      <div className="flex justify-center items-center space-x-5">
        <FaBars
          className="text-3xl cursor-pointer"
          onClick={() => dispatch(toggleNav())}
        />
        <Logo />
      </div>
      <div className="flex-grow flex items-end justify-end space-x-4 lg:space-x-6 w-auto">
        <NavIcons />
      </div>
      <div
        className={`absolute inset-0 bg-white bg-opacity-30 backdrop-blur-md z-10 h-screen transition-opacity duration-300 ${
          isNavOpen ? "opacity-80 cursor-crosshair block" : "opacity-0 hidden"
        }`}
        onClick={() => dispatch(toggleNav())}
      />

      <main
        className={`h-screen fixed top-0 w-[80%] sm:w-[60vw] md:w-[40vw] left-0 z-10 bg-white border transition-transform duration-300 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* section taking full height */}
        <section className="w-full h-full  relative">
          <div className="h-full relative shadow-lg  text-xl overflow-hidden z-30">
            <div
              key={menuStack.length}
              className="w-full h-full text-sm flex flex-col"
            >
              {/* search input */}
              <div className="px-5 py-10">
                <div className="relative   border">
                  <input
                    type="search"
                    name="serch"
                    placeholder="ENTER YOUR KEYWORDS"
                    className="h-10 px-5 bg-gray-200 pr-10 w-full  text-xs focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-3 mr-4"
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>
              {/* navItems */}
              <section className="flex-grow flex flex-col justify-between">
                <motion.ul
                  className="flex flex-col px-5 gap-5 flex-grow"
                  initial={{ x: isNavigatingForward ? "100%" : "-100%" }}
                  animate={{ x: "0%" }}
                  exit={{ x: isNavigatingForward ? "-100%" : "100%" }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className={`flex items-center justify-between pb-5  ${
                      menuStack.length > 1
                        ? "border-b border-gray-300 "
                        : "hidden"
                    } `}
                  >
                    <h2 className={`uppercase font-bold `}>
                      {currentMenu.title}
                    </h2>
                    {menuStack.length > 1 && (
                      <button
                        onClick={() => {
                          navigateBack();
                          console.log("Back button clicked");
                        }}
                        className="ml-5 "
                      >
                        <BsArrowReturnLeft className="text-2xl" />
                      </button>
                    )}
                  </div>
                  {currentMenu.items.map((item, index) => (
                    <motion.li
                      key={index}
                      className={`flex items-center  pb-5  ${
                        menuStack.length > 1 ? "border-b border-gray-300 " : ""
                      }`}
                    >
                      {item.subMenu ? (
                        <button
                          className="w-full text-left flex justify-between items-center transition-transform  duration-300 "
                          onClick={() => {
                            navigateToSubMenu(item.subMenu!, item.buttonText!);
                            console.log(
                              "Sub-menu button clicked:",
                              item.buttonText
                            );
                          }}
                        >
                          {item.buttonText}
                          <IoIosArrowForward className="ml-4" />
                        </button>
                      ) : (
                        <a href={item.href} className="block w-full ">
                          {item.title}
                        </a>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="mt-auto">
                  <Contact />
                </div>
              </section>
            </div>
          </div>
        </section>
        {/* <div className="absolute bottom-0">
          <Contact />
        </div> */}
      </main>
    </section>
  );
};

export default MobileNav;
