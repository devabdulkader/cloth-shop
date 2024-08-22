"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowReturnLeft } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const navigationData = [
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

const MobileNav = () => {
  const [menuStack, setMenuStack] = useState([
    { items: navigationData, title: "" },
  ]);
  const [isNavigatingForward, setIsNavigatingForward] = useState(true);

  const currentMenu = menuStack[menuStack.length - 1];

  const navigateToSubMenu = (subMenu, title) => {
    setIsNavigatingForward(true);
    setMenuStack([...menuStack, { items: subMenu, title }]);
  };

  const navigateBack = () => {
    setIsNavigatingForward(false);
    setMenuStack(menuStack.slice(0, -1));
  };

  const variants = {
    enter: {
      x: isNavigatingForward ? "100%" : "-100%",
      opacity: 0,
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: isNavigatingForward ? "-100%" : "100%",
      opacity: 0,
    },
  };

  return (
    <section className="w-full h-screen xl:hidden fixed top-0 left-0">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-md z-10" />

      <main className="w-full overflow-hidden h-full relative">
        <div className="w-[90vw] h-full bg-white shadow-lg relative text-xl overflow-hidden z-20">
          <motion.div
            key={menuStack.length}
            initial="enter"
            animate="center"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute w-full h-full"
          >
            <div className="px-4 py-6 flex items-center justify-between">
              <h2 className="text-xl uppercase font-bold">
                {currentMenu.title}
              </h2>
              {menuStack.length > 1 && (
                <button onClick={navigateBack} className="ml-4">
                  <BsArrowReturnLeft className="text-2xl" />
                </button>
              )}
            </div>
            <ul className="flex flex-col space-y-4 px-4">
              {currentMenu.items.map((item, index) => (
                <li key={index} className="relative">
                  {item.subMenu ? (
                    <button
                      className="w-full text-left flex justify-between items-center"
                      onClick={() =>
                        navigateToSubMenu(item.subMenu, item.buttonText)
                      }
                    >
                      {item.buttonText} <IoIosArrowForward className="ml-4" />
                    </button>
                  ) : (
                    <a href={item.href} className="block w-full ">
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default MobileNav;
