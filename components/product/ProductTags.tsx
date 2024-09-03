"use client";
import React, { useState } from "react";
import { FaTags } from "react-icons/fa"; // Assuming you're using react-icons
import MotionHeight from "../motion/MotionHeight";

const ProductTags: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md py-14">
      <div className="container w-full mx-auto flex flex-col gap-5">
        {/* Icon and Text */}
        <div className="flex items-center mb-4">
          <FaTags className="text-2xl text-gray-700 mr-2" />
          <span className="text-xl font-semibold">Tags</span>
        </div>

        {/* Buttons */}
        <div className="mb-4 flex gap-5">
          <button
            className={`p-2 bg-white text-center font-semibold rounded border transition-colors duration-30`}
          >
            Brown{" "}
          </button>
          <button
            className={`p-2 bg-white text-center font-semibold rounded border transition-colors duration-30`}
          >
            Pants{" "}
          </button>
          <button
            className={`p-2 bg-white text-center font-semibold rounded border transition-colors duration-30`}
          >
            Summer{" "}
          </button>
          <button
            className={`p-2 bg-white text-center font-semibold rounded border transition-colors duration-30`}
          >
            Women{" "}
          </button>
        </div>

        {/* Heading Text */}
        <h2 className="text-2xl font-bold mb-4">Fashion</h2>

        {/* Paragraph Text */}
        <div className="relative">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu ipsum
            eu quam blandit maximus. Donec at lacus lacus. Donec ultricies lacus
            libero, fermentum mollis velit accumsan ac. Morbi in nunc erat. Sed
            a ligula tristique mi aliquam pellentesque. Ut malesuada nisl eros,
            ut sollicitudin ex mattis quis. Praesent cursus a augue ac placerat.
            Nam mattis mi ac dui suscipit egestas. Vestibulum lorem libero,
            feugiat dapibus urna id, gravida varius tellus. Nam sed congue quam.
            Sed sit amet libero augue. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Nam et
            efficitur ante. Vestibulum quis volutpat felis, volutpat ornare
            nunc. Vivamus ac aliquam justo. Mauris ultrices posuere velit, eu
            elementum mauris.
          </p>
          {!isExpanded && (
            <div className="absolute  bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent z-0" />
          )}
          {/* Conditionally render additional text */}
          <MotionHeight isVisible={isExpanded}>
            {isExpanded && (
              <>
                Phasellus vitae egestas orci. Pellentesque mi ex, vestibulum nec
                neque mollis, ultricies mollis elit. Sed purus elit, aliquet at
                erat id, efficitur vehicula velit. Fusce tristique lectus a
                velit finibus, sed facilisis odio placerat. Ut quis efficitur
                mi, quis porttitor ipsum. Phasellus euismod est vitae neque
                consectetur, nec laoreet enim pharetra. Aliquam non sem sit amet
                nunc consectetur ultrices. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam sed orci non magna consectetur
                viverra. Suspendisse at lectus lacus. Suspendisse eget ultricies
                mi. Pellentesque rutrum porta lorem, ac interdum nisl faucibus
                at. Aliquam turpis metus, aliquam at bibendum scelerisque,
                posuere blandit urna. Nunc sit amet lacus purus. In mattis
                laoreet purus eget pulvinar. Quisque non enim mollis, ultricies
                quam efficitur, efficitur nunc. Mauris sollicitudin, est nec
                volutpat placerat, ex quam dignissim risus, et aliquam lacus
                ante vitae nulla. Suspendisse mattis luctus nulla, quis
                tincidunt erat aliquam auctor. Fusce non felis pellentesque nisl
                egestas ornare non in enim. Duis sed purus a tellus tempor
                pharetra. Suspendisse vel velit nec mauris mattis maximus in sed
                ipsum. Nulla eu augue in mauris porttitor tincidunt in non
                metus. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas. Nullam a laoreet sapien,
                vel tristique risus. Fusce rhoncus, nibh vel pharetra suscipit,
                odio justo consectetur mi, sit amet ullamcorper ex nulla ac
                elit. Phasellus feugiat mi augue, eu convallis nisi iaculis nec.
              </>
            )}
          </MotionHeight>
        </div>
        {/* Toggle Button */}
        <div className="flex justify-center items-center">
          <button
            onClick={handleToggle}
            className="text-blue-500 hover:underline mt-2"
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTags;
