// const navigationData: SubMenuItem[] = [
//   {
//     title: "Home",
//     href: "#",
//   },
//   {
//     buttonText: "Collections",
//     subMenu: [
//       {
//         buttonText: "Spring Collection",
//         subMenu: [
//           { title: "T-Shirts", href: "#" },
//           { title: "Hoodies", href: "#" },
//         ],
//       },
//       {
//         buttonText: "Summer Collection",
//         subMenu: [
//           { title: "Shorts", href: "#" },
//           { title: "Swimwear", href: "#" },
//         ],
//       },
//     ],
//   },
//   {
//     buttonText: "Products",
//     subMenu: [
//       {
//         buttonText: "Electronics",
//         subMenu: [
//           { title: "Laptops", href: "#" },
//           { title: "Mobile Phones", href: "#" },
//         ],
//       },
//       {
//         buttonText: "Home Appliances",
//         subMenu: [
//           { title: "Refrigerators", href: "#" },
//           { title: "Microwaves", href: "#" },
//         ],
//       },
//     ],
//   },
//   {
//     buttonText: "Pages",
//     subMenu: [
//       {
//         title: "About Us",
//         href: "#",
//       },
//       {
//         title: "Contact Us",
//         href: "#",
//       },
//     ],
//   },
//   {
//     buttonText: "Blog",
//     subMenu: [
//       {
//         buttonText: "Tech",
//         subMenu: [
//           { title: "AI", href: "#" },
//           { title: "Blockchain", href: "#" },
//         ],
//       },
//       {
//         buttonText: "Lifestyle",
//         subMenu: [
//           { title: "Travel", href: "#" },
//           { title: "Food", href: "#" },
//         ],
//       },
//     ],
//   },
// ];

"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowReturnLeft } from "react-icons/bs";
import { IoIosArrowForward, IoMdSearch } from "react-icons/io";
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
import { closeNav, toggleNav } from "@/lib/store/features/nav/navSlice";
import { FaSearch, FaShoppingBag, FaTimes } from "react-icons/fa";
import Contact from "./Contact";
import CustomFabars from "./CustomFabars";
import { RiLuggageCartFill } from "react-icons/ri";
import MobileSearchBar from "./searchBar/MobileSearchBar";
import {
  closeButton,
  openButton,
  toggleButtonClick,
} from "@/lib/store/features/buttonToggle/buttonToggleSlice";
import {
  closeMobileSearchBar,
  toggleMobileSearchBar,
} from "@/lib/store/features/searchBar/mobileSearchBarSlice";
import { RxCross2 } from "react-icons/rx";

import MobileSideBarSearch from "./searchBar/MobileSideBarSearch";
import CustomLink from "@/components/custom/CustomLink";
import CustomIcon from "@/components/custom/CustomIcon";
import CustomSearchIcon from "@/components/custom/CustomSearchIcon";
import CustomBackDrop from "@/components/custom/CustomBackDrop";
import BottomNav from "./BottomNav";

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

const MobileNav: React.FC = () => {
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
    <section
      className={`w-full fixed top-0 z-layer-1 left-0 h-[60px] flex bg-white  px-5 xl:px-10 2xl:px-20 transition-transform duration-300 ease-in-out ${
        isScrolledUp ? "xl:translate-y-0" : "xl:-translate-y-full"
      }`}
    >
      <BottomNav />
      {/* Conditionally rendered search input */}
      <MobileSearchBar />
      <div className="flex justify-between items-center space-x-5 w-full">
        <div className="flex justify-center items-center space-x-2">
          <div
            onClick={() => {
              dispatch(toggleNav());
              dispatch(closeMobileSearchBar());
            }}
          >
            <CustomFabars />
          </div>
          {/* Search icon for small nav */}
          {!isMobileSearchbarOpen && (
            <button
              className="md:hidden cursor-pointer"
              onClick={() => dispatch(toggleMobileSearchBar())}
            >
              <CustomSearchIcon />
            </button>
          )}
          {isMobileSearchbarOpen && (
            <RxCross2
              className="text-2xl md:hidden cursor-pointer"
              onClick={() => dispatch(toggleMobileSearchBar())}
            />
          )}
        </div>

        <div>
          <Logo />
        </div>
        <div className="hidden md:flex space-x-4 justify-center items-center lg:space-x-6">
          <NavIcons />
        </div>
        <div className="md:hidden relative">
          <CustomIcon
            Icon={RiLuggageCartFill}
            iconClassName="text-2xl"
            quantity={2}
          />
        </div>
      </div>

      {isNavOpen && <CustomBackDrop onClose={handleClose} />}
      <main
        className={`h-screen fixed top-0 w-[80%] sm:w-[60vw] md:w-[40vw] left-0 z-layer-2 bg-white border transition-transform duration-300 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* section taking full height */}
        <section className="w-full h-full relative">
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
                      menuStack.length > 1
                        ? "border-b border-gray-300"
                        : "hidden"
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
    </section>
  );
};

export default MobileNav;
