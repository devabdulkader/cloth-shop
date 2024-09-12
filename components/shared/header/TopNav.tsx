"use client";
import MotionHeight from "@/components/motion/MotionHeight";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { GiWorld } from "react-icons/gi"; // For country flag
import { MdLanguage } from "react-icons/md"; // For language flag

// Define the type for social media links with icon component and className
type IconType = {
  href: string;
  icon: React.ElementType; // Change to React.ElementType to hold the icon component
  className?: string;
};

const TopNav = () => {
  const [openDropdown, setOpenDropdown] = useState<
    "country" | "language" | null
  >(null);
  const [selectedCountry, setSelectedCountry] = useState(
    "USD $ | United States"
  );
  const [selectedCountryImg, setSelectedCountryImg] =
    useState("/flags/usa.svg");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedLanguageImg, setSelectedLanguageImg] =
    useState("/flags/uk.svg"); // Corrected the path with leading slash

  // Social media links with icon component and className
  const socialLinks: IconType[] = [
    { href: "#", icon: FaFacebookF },
    { href: "#", icon: FaInstagram },
    { href: "#", icon: BsTwitterX },
    { href: "#", icon: FaTiktok },
  ];

  const countries = [
    { flagImg: "/flags/usa.svg", label: "USD $ | United States" },
    { flagImg: "/flags/france.svg", label: "EUR € | France" },
    { flagImg: "/flags/germany.svg", label: "EUR € | Germany" },
  ];

  const languages = [
    { flagImg: "/flags/uk.svg", label: "English" },
    { flagImg: "/flags/germany.svg", label: "Deutsch" },
    { flagImg: "/flags/france.svg", label: "Français" },
  ];

  return (
    <div className="bg-gray-800 text-white py-3 px-5 xl:px-10 2xl:px-20 flex justify-between items-center relative ">
      {/* Left: Social Icons */}
      <div className="flex space-x-4">
        {socialLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-gray-100 hover:text-blue-600"
          >
            <item.icon className="text-sm" />{" "}
          </Link>
        ))}
      </div>

      {/* Center: Free Shipping Text */}
      <div className="text-center text-sm">
        Free shipping on orders over $50
      </div>

      {/* Right: Dropdown Items */}
      <div className="flex space-x-6 justify-end items-center relative ">
        {/* Country Select */}
        <div className="relative z-layer-2">
          <button
            className="flex items-center text-white px-3 py-1 gap-3"
            onClick={() =>
              setOpenDropdown(openDropdown === "country" ? null : "country")
            }
          >
            <Image
              src={selectedCountryImg}
              alt="Selected Country Flag"
              height={300}
              width={300}
              className="w-[14px] h-[11px]"
            />
            <span className="uppercase text-[10px]">{selectedCountry}</span>
          </button>
          <div className="absolute top-8 mt-1 bg-white  text-black shadow-sm border-t border-r border-l border-[#e5e5e5] z-50 ">
            <MotionHeight
              isVisible={openDropdown === "country"}
              className="w-52"
            >
              {countries.map((country, idx) => (
                <div
                  key={idx}
                  className="w-full text-left py-3 px-4 shadow-sm flex gap-2 border-b border-[#e5e5e5] bg-gray-50 hover:bg-white items-center"
                  onClick={() => {
                    setSelectedCountry(country.label);
                    setSelectedCountryImg(country.flagImg); // Update country flag image
                    setOpenDropdown(null); // Close dropdown after selection
                  }}
                >
                  <Image
                    src={country.flagImg}
                    alt=""
                    height={300}
                    width={300}
                    className="w-[15px] h-[11px]"
                  />
                  <span className="uppercase text-[10px] w-full">
                    {country.label}
                  </span>
                </div>
              ))}
            </MotionHeight>
          </div>
        </div>

        {/* Language Select */}
        <div className="relative z-layer-2">
          <button
            className="flex items-center text-white px-3 py-1 gap-3"
            onClick={() =>
              setOpenDropdown(openDropdown === "language" ? null : "language")
            }
          >
            <Image
              src={selectedLanguageImg}
              alt="Selected Language Flag"
              height={300}
              width={300}
              className="w-[14px] h-[11px]"
            />
            <span className="uppercase text-[10px]">{selectedLanguage}</span>
          </button>

          <div className="absolute top-8 mt-1 right-0 bg-white text-black shadow-sm z-50 border-t border-r border-l border-[#e5e5e5]">
            <MotionHeight
              isVisible={openDropdown === "language"}
              className="w-52"
            >
              {languages.map((language, idx) => (
                <button
                  key={idx}
                  className="w-full text-left py-3 px-4 pr-10 shadow-sm flex gap-2 border-b border-[#e5e5e5] bg-gray-50 hover:bg-white items-center"
                  onClick={() => {
                    setSelectedLanguage(language.label);
                    setSelectedLanguageImg(language.flagImg); // Update language flag image
                    setOpenDropdown(null); // Close dropdown after selection
                  }}
                >
                  <Image
                    src={language.flagImg}
                    alt=""
                    height={300}
                    width={300}
                    className="w-[14px] h-[11px]"
                  />
                  <span className="uppercase text-[10px]">
                    {language.label}
                  </span>
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
