// components/CustomImage.tsx

import React from "react";
import Image, { ImageProps } from "next/image";

interface CustomImageProps extends ImageProps {
  className?: string; // Optional prop for additional class names
}

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  className = "",
  ...rest
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      // layout="responsive"
      width={300}
      height={300}
      // priority
      // quality={80}
      className={` transition-transform duration-[3s] ease-in-out group-hover:scale-110 object-cover w-full h-full ${className}`}
      {...rest}
    />
  );
};

export default CustomImage;
