"use client";
import MotionHeight from "@/components/motion/MotionHeight";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

// Define the type for social media links with icon component and className
type IconType = {
  href: string;
  icon: React.ElementType;
  className?: string;
};

// Type for currency and language
type ItemType = {
  label: string;
  flagImg: string;
};

const TopNav = () => {
  const [openDropdown, setOpenDropdown] = useState<
    "currency" | "language" | null
  >(null);

  // Data for currencies and languages
  const currencies: ItemType[] = [
    { flagImg: "/flags/usa.svg", label: "USD $ | United States" },
    { flagImg: "/flags/france.svg", label: "EUR € | France" },
    { flagImg: "/flags/germany.svg", label: "EUR € | Germany" },
  ];

  const languages: ItemType[] = [
    { flagImg: "/flags/uk.svg", label: "English" },
    { flagImg: "/flags/germany.svg", label: "Deutsch" },
    { flagImg: "/flags/france.svg", label: "Français" },
  ];

  // Separate states for selected currency and language
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  // Social media links with icon component and className
  const socialLinks: IconType[] = [
    { href: "#", icon: FaFacebookF },
    { href: "#", icon: FaInstagram },
    { href: "#", icon: BsTwitterX },
    { href: "#", icon: FaTiktok },
  ];

  return (
    <div className="bg-gray-800 text-white py-3 px-5 xl:px-10 2xl:px-20 flex justify-between items-center relative">
      {/* Left: Social Icons */}
      <div className="flex space-x-4">
        {socialLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-gray-100 hover:text-blue-600"
          >
            <item.icon className="text-sm" />
          </Link>
        ))}
      </div>

      {/* Center: Free Shipping Text */}
      <div className="text-center text-sm">
        Free shipping on orders over $50
      </div>

      {/* Right: Dropdown Items */}
      <div className="flex space-x-6 justify-end items-center relative">
        {/* Currency Select */}
        <div className="relative">
          <button
            className="flex items-center text-white px-3 py-1 gap-3"
            onClick={() =>
              setOpenDropdown(openDropdown === "currency" ? null : "currency")
            }
          >
            <Image
              src={selectedCurrency.flagImg}
              alt="Selected Currency Flag"
              height={300}
              width={300}
              className="w-[14px] h-[11px]"
            />
            <span className="uppercase text-[10px]">
              {selectedCurrency.label}
            </span>
          </button>
          <div className="absolute z-50 top-8 mt-1 bg-white text-black shadow-sm border-t border-r border-l border-[#e5e5e5]">
            <MotionHeight
              isVisible={openDropdown === "currency"}
              className="w-52"
            >
              {currencies.map((currency, idx) => (
                <button
                  key={idx}
                  className="w-full cursor-pointer text-left py-3 px-4 shadow-sm flex gap-2 border-b border-[#e5e5e5] bg-gray-50 hover:bg-white items-center"
                  onClick={() => {
                    setSelectedCurrency(currency);
                    setOpenDropdown(null); // Close dropdown after selection
                  }}
                >
                  <Image
                    src={currency.flagImg}
                    alt="Currency Flag"
                    height={300}
                    width={300}
                    className="w-[15px] h-[11px]"
                  />
                  <span className="uppercase text-[10px] w-full">
                    {currency.label}
                  </span>
                </button>
              ))}
            </MotionHeight>
          </div>
        </div>

        {/* Language Select */}
        <div className="relative">
          <button
            className="flex items-center cursor-pointer text-white px-3 py-1 gap-3"
            onClick={() =>
              setOpenDropdown(openDropdown === "language" ? null : "language")
            }
          >
            <Image
              src={selectedLanguage.flagImg}
              alt="Selected Language Flag"
              height={300}
              width={300}
              className="w-[14px] h-[11px]"
            />
            <span className="uppercase text-[10px]">
              {selectedLanguage.label}
            </span>
          </button>

          <div className="absolute top-8 mt-1 right-0 bg-white text-black shadow-sm z-50 border-t border-r border-l border-[#e5e5e5]">
            <MotionHeight
              isVisible={openDropdown === "language"}
              className="w-52"
            >
              {languages.map((language, idx) => (
                <button
                  key={idx}
                  className="w-full cursor-pointer text-left py-3 px-4 pr-10 shadow-sm flex gap-2 border-b border-[#e5e5e5] bg-gray-50 hover:bg-white items-center"
                  onClick={() => {
                    setSelectedLanguage(language);
                    setOpenDropdown(null); // Close dropdown after selection
                  }}
                >
                  <Image
                    src={language.flagImg}
                    alt="Language Flag"
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
