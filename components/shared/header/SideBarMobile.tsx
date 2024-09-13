"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowReturnLeft } from "react-icons/bs";
import { IoIosArrowForward, IoMdSearch } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import { closeNav } from "@/lib/store/features/nav/navSlice";
import Contact from "./Contact";

import MobileSideBarSearch from "./searchBar/MobileSideBarSearch";
import CustomLink from "@/components/custom/CustomLink";
import CustomBackDrop from "@/components/custom/CustomBackDrop";

// Define TypeScript interfaces for navigation data
interface SubMenuItem {
  title?: string;
  href?: string;
  buttonText?: string;
  subMenu?: SubMenuItem[]; // Ensuring that subMenu is always of type SubMenuItem[] or undefined
}

interface MenuStackItem {
  items: SubMenuItem[];
  title: string;
}

const navigationData: SubMenuItem[] = [
  {
    title: "Home",
    href: "",
  },
  {
    title: "Product",
    href: "products",
  },
  {
    buttonText: "About Us",
    subMenu: [
      { title: "Articles", href: "blogs" },
      { title: "Privacy Policy", href: "privacy-policy" },
      { title: "Deliver", href: "deliver" },
      { title: "Return and Refund", href: "return-and-refund" },
      { title: "FAQs", href: "frequently-asked-questions" },
      { title: "Testimonial", href: "testimonials" },
    ],
  },
  {
    title: "Contact Us",
    href: "contact-us",
  },
];

const SideBarMobile = () => {
  const dispatch = useDispatch();
  const isNavOpen = useSelector((state: RootState) => state.nav.isOpen);
  const isMobileSearchbarOpen = useSelector(
    (state: any) => state.mobileSearchBar.isMobileSearchbarOpen
  );

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
  const [showSearchInput, setShowSearchInput] = useState<boolean>(false);
  const handleClose = () => {
    dispatch(closeNav());
  };
  return (
    <main
      className={`h-screen fixed top-0 w-[80%] sm:w-96 left-0 z-layer-5  border transition-transform duration-300 ${
        isNavOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* section taking full height */}
      <section className={`w-full h-full relative bg-white`}>
        <div className="h-full relative shadow-lg text-xl overflow-hidden z-30">
          <div
            key={menuStack.length}
            className="w-full h-full text-sm flex flex-col"
          >
            {/* search input */}
            <MobileSideBarSearch />
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
                  className={`flex items-center justify-between pb-5 ${
                    menuStack.length > 1 ? "border-b border-gray-300" : "hidden"
                  }`}
                >
                  <h2 className="uppercase font-bold">{currentMenu.title}</h2>
                  {menuStack.length > 1 && (
                    <button
                      onClick={() => {
                        navigateBack();
                        console.log("Back button clicked");
                      }}
                      className="ml-5"
                    >
                      <BsArrowReturnLeft className="text-2xl" />
                    </button>
                  )}
                </div>
                {currentMenu.items.map((item, index) => (
                  <motion.li
                    key={index}
                    className={`flex items-center pb-5 ${
                      menuStack.length > 1 ? "border-b border-gray-300" : ""
                    }`}
                  >
                    {item.subMenu ? (
                      <button
                        className="w-full text-left flex justify-between items-center transition-transform duration-300"
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
                      <CustomLink
                        href={`${item.href}`}
                        className="block w-full"
                        onClose={handleClose} // Pass a function that dispatches the action
                      >
                        {item.title}
                      </CustomLink>
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
    </main>
  );
};

export default SideBarMobile;
