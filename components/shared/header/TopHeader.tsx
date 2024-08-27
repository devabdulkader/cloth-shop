"use client";
import MotionHeight from "@/components/motion/MotionHeight";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { GiWorld } from "react-icons/gi"; // For country flag
import { MdLanguage } from "react-icons/md"; // For language flag

const TopHeader = () => {
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
    <div className="bg-gray-800 text-white py-2 px-6 xl:flex justify-between items-center relative lg:pl-28 lg:pr-20 lg:py-5 hidden">
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
      <div className="flex space-x-6 justify-end relative ">
        {/* Country Select */}
        <div className="">
          <button
            className="flex items-center text-white bg-gray-700 px-3 py-1 rounded-lg"
            onClick={() =>
              setOpenDropdown(openDropdown === "country" ? null : "country")
            }
          >
            <GiWorld className="mr-2" />
            {selectedCountry}
          </button>
          {openDropdown === "country" && (
            <div className="absolute top-16 mt-2  bg-white text-black shadow-lg rounded-lg z-50">
              <MotionHeight>
                {countries.map((country, idx) => (
                  <button
                    key={idx}
                    className="block w-full text-left px-10 py-2 "
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
          )}
        </div>

        {/* Language Select */}
        <div className="">
          <button
            className="flex items-center text-white bg-gray-700 px-3 py-1 rounded-lg"
            onClick={() =>
              setOpenDropdown(openDropdown === "language" ? null : "language")
            }
          >
            <MdLanguage className="mr-2" />
            {selectedLanguage}
          </button>

          {openDropdown === "language" && (
            <div className="absolute  top-16 mt-2 left-20    bg-white  text-black shadow-lg rounded-lg z-50 ">
              <MotionHeight>
                {languages.map((language, idx) => (
                  <button
                    key={idx}
                    className="block w-full text-left  px-10 py-2 hover:bg-green-300"
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
          )}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
