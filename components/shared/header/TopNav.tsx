"use client";
import MotionHeight from "@/components/motion/MotionHeight";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { GiWorld } from "react-icons/gi"; // For country flag
import { MdLanguage } from "react-icons/md"; // For language flag

const TopNav = () => {
  const [openDropdown, setOpenDropdown] = useState<
    "country" | "language" | null
  >(null);
  const [selectedCountry, setSelectedCountry] = useState(
    "USD $ | United States"
  );
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const countries = [
    { flag: "🇺🇸", label: "USD $ | United States" },
    { flag: "🇫🇷", label: "EUR € | France" },
    { flag: "🇩🇪", label: "EUR € | Germany" },
  ];

  const languages = [
    { flag: "🇬🇧", label: "English" },
    { flag: "🇩🇪", label: "Deutsch" },
    { flag: "🇫🇷", label: "Français" },
  ];

  return (
    <div className="bg-gray-800 text-white py-2 px-6 flex justify-between items-center relative lg:pl-28 lg:pr-20 lg:py-5">
      {/* Left: Social Icons */}
      <div className="flex space-x-4">
        <a href="#" className="hover:text-gray-400 transition">
          <FaFacebookF />
        </a>
        <a href="#" className="hover:text-gray-400 transition">
          <FaInstagram />
        </a>
        <a href="#" className="hover:text-gray-400 transition">
          <FaTwitter />
        </a>
        <a href="#" className="hover:text-gray-400 transition">
          <FaTiktok />
        </a>
      </div>

      {/* Center: Free Shipping Text */}
      <div className="text-center text-sm">
        Free shipping on orders over $50
      </div>

      {/* Right: Dropdown Items */}
      <div className="flex space-x-6 justify-end relative">
        {/* Country Select */}
        <div>
          <button
            className="flex items-center text-white px-3 py-1 rounded-lg"
            onClick={() =>
              setOpenDropdown(openDropdown === "country" ? null : "country")
            }
          >
            <GiWorld className="mr-2" />
            {selectedCountry}
          </button>
          <div className="absolute top-12 mt-1 bg-white text-black shadow-lg rounded-lg z-50">
            <MotionHeight isVisible={openDropdown === "country"}>
              {countries.map((country, idx) => (
                <button
                  key={idx}
                  className="block w-full text-left px-10 py-2 border"
                  onClick={() => {
                    setSelectedCountry(country.label);
                    setOpenDropdown(null); // Close dropdown after selection
                  }}
                >
                  {country.flag} {country.label}
                </button>
              ))}
            </MotionHeight>
          </div>
        </div>

        {/* Language Select */}
        <div>
          <button
            className="flex items-center text-white px-3 py-1 rounded-lg"
            onClick={() =>
              setOpenDropdown(openDropdown === "language" ? null : "language")
            }
          >
            <MdLanguage className="mr-2" />
            {selectedLanguage}
          </button>

          <div className="absolute top-12 mt-1 right-0 bg-white text-black shadow-lg rounded-lg z-50">
            <MotionHeight isVisible={openDropdown === "language"}>
              {languages.map((language, idx) => (
                <button
                  key={idx}
                  className="block w-full text-left px-10 py-2 border"
                  onClick={() => {
                    setSelectedLanguage(language.label);
                    setOpenDropdown(null); // Close dropdown after selection
                  }}
                >
                  {language.flag} {language.label}
                </button>
              ))}
            </MotionHeight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
