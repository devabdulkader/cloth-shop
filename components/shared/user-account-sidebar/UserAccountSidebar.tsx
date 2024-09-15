"use client";
import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { closeUserSidebar } from "@/lib/store/features/userSidebar/userSidebarSlice";
import { RootState } from "@/lib/store/store";
import Logo from "../header/Logo";
import { motion, AnimatePresence } from "framer-motion";
import UserDropdown from "./UserDropdown";
import CustomCrossBar from "@/components/custom/CustomCrossBar";
import CustomBackDrop from "@/components/custom/CustomBackDrop";
import { AuthContext } from "@/app/authProvider";
import Link from "next/link";
import CustomLink from "@/components/custom/CustomLink";

// Define the interface for a single sidebar item
interface SidebarItem {
  title: string;
  link: string;
}

// Define the interface for a category of sidebar items
interface SidebarCategory {
  category: string;
  items: SidebarItem[];
  // active:boolean;
}
const sidebarItems: SidebarCategory[] = [
  {
    category: "Customer Account",
    items: [
      { title: "Account", link: "account" },
      { title: "Wishlist", link: "wishlist" },
      { title: "Check out", link: "checkouts" },
    ],
  },
  {
    category: "Customer Care",
    items: [
      { title: "FAQs", link: "frequently-asked-questions" },
      { title: "Terms of Service", link: "terms-and-condition" },
      { title: "Privacy Policy", link: "privacy-policy" },
      { title: "Contact Us", link: "contact-us" },
      { title: "Gift Card", link: "" },
    ],
  },
];

const currencies = [
  { flagImg: "/flags/usa.svg", label: "USD $ | United States" },
  { flagImg: "/flags/france.svg", label: "EUR € | France" },
  { flagImg: "/flags/germany.svg", label: "EUR € | Germany" },
];

const languages = [
  { flagImg: "/flags/uk.svg", label: "English" },
  { flagImg: "/flags/germany.svg", label: "Deutsch" },
  { flagImg: "/flags/france.svg", label: "Français" },
];

const UserAccountSidebar: React.FC = () => {
  const { isLoggedIn, handleLogout } = useContext(AuthContext);
  const dispatch = useDispatch();
  const isUserSidebarOpen = useSelector(
    (state: RootState) => state.userSidebar.isUserSidebarOpen
  );
  const handleClose = () => {
    dispatch(closeUserSidebar());
  };

  // Manage which dropdown is open (null means no dropdown is open)
  const [openDropdown, setOpenDropdown] = useState<
    "currency" | "language" | null
  >(null);

  // Handle dropdown open/close
  const toggleDropdown = (dropdown: "currency" | "language") => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Background Overlay */}
      {isUserSidebarOpen && <CustomBackDrop onClose={handleClose} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-layer-5 w-[80%] sm:w-96 bg-white h-full  py-4 px-8 shadow-lg transform transition-transform duration-500 ${
          isUserSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <main className="relative z-20  h-full">
          <div className="flex justify-between items-center py-8  border-b">
            <Logo />

            <div
              onClick={handleClose}
              className="absolute top-4 sm:right-5 right-0 z-50"
            >
              <CustomCrossBar />
            </div>
          </div>

          {/* Sidebar Items */}
          <div className="">
            {sidebarItems.map((category, categoryIndex) => (
              <div key={categoryIndex} className="py-8 border-b">
                <p className="mb-3 text-gray-400 uppercase text-sm">
                  {category.category}
                </p>
                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-3 font-medium">
                      <CustomLink
                        onClose={handleClose}
                        href={item.link}
                        className=""
                      >
                        {item.title}
                      </CustomLink>
                    </li>
                  ))}
                  {/* Show Log In if the user is NOT logged in */}
                  {category.category === "Customer Account" && !isLoggedIn && (
                    <>
                      <li className="mb-3 font-medium">
                        <CustomLink
                          onClose={handleClose}
                          href="register"
                          className=""
                        >
                          Register
                        </CustomLink>
                      </li>
                      <li className="mb-3 font-medium">
                        <CustomLink
                          onClose={handleClose}
                          href="login"
                          className=""
                        >
                          Login
                        </CustomLink>
                      </li>
                    </>
                  )}
                  {/* Show Log Out if the user is logged in */}
                  {category.category === "Customer Account" && isLoggedIn && (
                    <li className="mb-3 font-medium">
                      <button onClick={() => handleLogout()}>Log Out</button>
                    </li>
                  )}
                </ul>
              </div>
            ))}
            {isLoggedIn && (
              <button
                className="mb-3 font-medium"
                onClick={() =>{
                  handleLogout()
                  handleClose()
                }}
              >
                Log Out
              </button>
            )}
          </div>

          <div className="py-8">
            <p className="mb-3 text-gray-400 uppercase text-sm">Currency</p>
            {/* Currency Dropdown */}
            <UserDropdown
              items={currencies}
              defaultItem={currencies[0]}
              isOpen={openDropdown === "currency"}
              onToggle={() => toggleDropdown("currency")}
            />

            <p className="mb-3 text-gray-400 uppercase text-sm">Country</p>

            {/* Language Dropdown */}
            <UserDropdown
              items={languages}
              defaultItem={languages[0]}
              isOpen={openDropdown === "language"}
              onToggle={() => toggleDropdown("language")}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default UserAccountSidebar;
