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
import SideBarMobile from "./SideBarMobile";
import { toggleCartSidebar } from "@/lib/store/features/cartSidebar/cartSidebarSlice";

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

  const handleCartClick = () => {
    dispatch(toggleCartSidebar());
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
    <nav className="relative ">
      {isNavOpen && <CustomBackDrop onClose={handleClose} zIndex="z-layer-2" />}
      <div
        className={`w-full fixed top-0  left-0 h-[60px] flex bg-white z-50  transition-transform duration-300 ease-in-out ${
          isScrolledUp && !isNavOpen
            ? "md:translate-y-0"
            : "md:-translate-y-full"
        }`}
      >
        <BottomNav />
        {/* Conditionally rendered search input */}
        <MobileSearchBar />
        <div className="flex justify-between items-center space-x-5 w-full  bg-white px-5 xl:px-10 2xl:px-20">
          <div className="flex  items-center sm:space-x-2 w-1/3">
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

          <div className="w-1/3">
            <Logo />
          </div>
          <div className="hidden md:flex space-x-4 justify-center items-center lg:space-x-6">
            <NavIcons />
          </div>
          <div className="md:hidden relative w-1/3  flex justify-end">
            <CustomIcon
              Icon={RiLuggageCartFill}
              iconClassName="text-2xl"
              quantity={2}
              onClick={handleCartClick}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
