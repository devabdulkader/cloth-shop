"use client"; // This directive tells Next.js that this is a client component

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedSectionProps } from "@/types";

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  title,
  description,
  buttonText,
  imageSrc,
  alt,
  containerClassName = "", // Custom class for container
  titleClassName = "", // Custom class for title
  descriptionClassName = "", // Custom class for description
  buttonClassName = "", // Custom class for button
  imageContainerClassName = "", // Custom class for image container
}) => {
  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.4 } },
  };

  const imageVariants = {
    hidden: { scale: 1 },
    visible: {
      scale: 1.1,
      transition: { duration: 4, ease: "easeInOut" },
    },
  };

  return (
    <div className={` ${containerClassName}`}>
      <motion.div
        className={`relative w-full h-full ${imageContainerClassName}`}
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={alt}
            className="object-cover rounded-2xl w-full h-full"
            layout="fill"
            objectFit="cover"
          />
        ) : null}
      </motion.div>
      <div className="absolute inset-0 flex flex-col p-7 md:p-10 lg:p-20 justify-center gap-3 ">
        <motion.h2
          style={{ lineHeight: "1.3" }}
          className={`text-2xl xl:text-5xl font-bold  md:max-w-lg ${titleClassName}`}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.h2>
        <motion.p
          className={`text-sm md:text-lg  ${descriptionClassName}`}
          variants={descriptionVariants}
          initial="hidden"
          animate="visible"
        >
          {description}
        </motion.p>
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <button className={`${buttonClassName}`}>{buttonText}</button>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedSection;
