"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import { closeSidebar } from "@/lib/store/features/userSidebar/userSidebarSlice";
import { RootState } from "@/lib/store/store";
import Logo from "../header/Logo";
import { motion, AnimatePresence } from "framer-motion";
import UserDropdown from "./UserDropdown";

// Define the interface for a single sidebar item
interface SidebarItem {
  title: string;
  link: string;
}

// Define the interface for a category of sidebar items
interface SidebarCategory {
  category: string;
  items: SidebarItem[];
}
const sidebarItems: SidebarCategory[] = [
  {
    category: "Customer Account",
    items: [
      { title: "Login", link: "#" },
      { title: "Register", link: "#" },
      { title: "Wishlist", link: "#" },
      { title: "Check out", link: "#" },
    ],
  },
  {
    category: "Customer Care",
    items: [
      { title: "FAQs", link: "#" },
      { title: "Terms of Service", link: "#" },
      { title: "Privacy Policy", link: "#" },
      { title: "Contact Us", link: "#" },
      { title: "Gift Card", link: "#" },
    ],
  },
];

const currencies = ["EUR €", "USD $", "GBP £"];
const languages = ["English", "German", "French"];

const UserAccountSidebar: React.FC = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(
    (state: RootState) => state.userSidebar.isSidebarOpen
  );

  const [showCurrencyOptions, setShowCurrencyOptions] = useState(false);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const handleCurrencyClick = () => {
    setShowCurrencyOptions(!showCurrencyOptions);
    if (showLanguageOptions) setShowLanguageOptions(false);
  };

  const handleLanguageClick = () => {
    setShowLanguageOptions(!showLanguageOptions);
    if (showCurrencyOptions) setShowCurrencyOptions(false);
  };

  return (
    <>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 cursor-crosshair ${
          isSidebarOpen ? "opacity-80 backdrop-blur-md" : "opacity-0"
        } ${isSidebarOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        onClick={() => dispatch(closeSidebar())}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-layer-1 h-full w-96 py-4 px-8 shadow-lg bg-white transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <main className="relative z-20  h-full">
          <div className="flex justify-between items-center py-8  border-b">
            <Logo />
            <button
              onClick={() => dispatch(closeSidebar())}
              className="text-lg"
            >
              <FaTimes size={24} />
            </button>
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
                      <a href={item.link} className="">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="py-8">
            <UserDropdown
              isOpen={showCurrencyOptions}
              toggleDropdown={() => {
                setShowCurrencyOptions(!showCurrencyOptions);
                if (showLanguageOptions) setShowLanguageOptions(false);
              }}
              items={currencies}
              title="Currency"
              defaultItem="EUR €"
            />

            <UserDropdown
              isOpen={showLanguageOptions}
              toggleDropdown={() => {
                setShowLanguageOptions(!showLanguageOptions);
                if (showCurrencyOptions) setShowCurrencyOptions(false);
              }}
              items={languages}
              title="Language"
              defaultItem="English"
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default UserAccountSidebar;
