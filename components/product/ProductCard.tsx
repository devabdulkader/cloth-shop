// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { FaHeart, FaShoppingCart } from "react-icons/fa";
// import { FaRegStar } from "react-icons/fa6";
// import { MdOutlineShoppingBag } from "react-icons/md";
// import { FiEye } from "react-icons/fi";
// import IconButton from "../common/IconButton";
// import MotionTransition from "../motion/MotionTransition";

// interface ColorVariant {
//   color: string;
//   isSelected: boolean;
// }

// interface Product {
//   imageSrc: string;
//   title: string;
//   rating: number;
//   price: string;
//   colorVariants: ColorVariant[];
// }

// interface ProductCardProps {
//   product: Product;
//   index: number;
//   cardHeight?: string;
//   cardWidth?: string;
// }

// const ProductCard: React.FC<ProductCardProps> = ({
//   product,
//   index,
//   cardHeight,
//   cardWidth,
// }) => {
//   const [hoveredProductIndex, setHoveredProductIndex] = useState<number | null>(
//     null
//   );
//   const [blinkStartIndex, setBlinkStartIndex] = useState<number | null>(null);

//   useEffect(() => {
//     let timer: NodeJS.Timeout | null = null;
//     let interval: NodeJS.Timeout | null = null;

//     if (hoveredProductIndex !== null) {
//       setBlinkStartIndex(hoveredProductIndex);

//       timer = setTimeout(() => {
//         setBlinkStartIndex(null);
//       }, 500);

//       interval = setInterval(() => {
//         if (hoveredProductIndex === null) {
//           clearInterval(interval!);
//         } else {
//           setBlinkStartIndex(null);
//         }
//       }, 500);
//     }

//     return () => {
//       if (timer) clearTimeout(timer);
//       if (interval) clearInterval(interval);
//     };
//   }, [hoveredProductIndex]);

//   const handleMouseEnter = (index: number) => {
//     setHoveredProductIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredProductIndex(null);
//   };

//   const Icons = [
//     { icon: <FaHeart />, tooltip: "Wishlist" },
//     { icon: <MdOutlineShoppingBag />, tooltip: "Add to Cart" },
//     { icon: <FiEye />, tooltip: "View" },
//   ];

//   return (
//     <div
//       className="relative"
//       onMouseEnter={() => handleMouseEnter(index)}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className={`relative  overflow-hidden ${cardHeight} ${cardWidth}`}>
//         <Image
//           src={product.imageSrc}
//           alt={product.title}
//           height={300}
//           width={300}
//           className="rounded-2xl transition-transform duration-300 h-full w-full object-cover"
//         />
//         {/* White opacity blink effect */}
//         <div
//           className={`absolute inset-0 bg-white transition-opacity duration-300 ${
//             blinkStartIndex === index ? "opacity-30" : "opacity-0"
//           }`}
//         />
//       </div>
//       <div className="p-4 flex flex-col justify-center items-center">
//         <h2 className="text-lg font-bold mb-2">{product.title}</h2>

//         <div className="flex items-center mb-2">
//           {Array.from({ length: 5 }, (_, i) => (
//             <span
//               key={i}
//               className={`${
//                 i < product.rating ? "text-yellow-500" : "text-gray-300"
//               }`}
//             >
//               ★
//             </span>
//           ))}
//         </div>
//         <p className="text-xl font-semibold mb-2">{product.price}</p>

//         {/* Color variants div */}

//         <div
//           className={`flex gap-2 transition-opacity duration-300 transform ${
//             hoveredProductIndex === index
//               ? "translate-y-0 opacity-100"
//               : "translate-y-10 opacity-0"
//           }`}
//         >
//           {product.colorVariants.map((variant, i) => (
//             <span
//               key={i}
//               className={`h-6 w-10 inline-block mr-2 border ${
//                 variant.isSelected ? "border-black" : "border-gray-300"
//               }`}
//               style={{ backgroundColor: variant.color }}
//             />
//           ))}
//         </div>

//         {/* icon tooltip div */}
//         <div
//           className={`absolute top-4 right-4 flex flex-col gap-2 ease-in-out transition-opacity duration-300 transform ${
//             hoveredProductIndex === index
//               ? "translate-y-0 opacity-100"
//               : "-translate-y-10 opacity-0"
//           }`}
//         >
//           {Icons.map((icon, i) => (
//             <IconButton key={i} icon={icon.icon} tooltip={icon.tooltip} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { motion } from "framer-motion";
import IconButton from "../common/IconButton";

interface ColorVariant {
  color: string;
  isSelected: boolean;
}

interface Product {
  imageSrc: string;
  title: string;
  rating: number;
  price: string;
  colorVariants: ColorVariant[];
}

interface ProductCardProps {
  product: Product;
  index: number;
  cardHeight?: string;
  cardWidth?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  cardHeight,
  cardWidth,
}) => {
  const [hoveredProductIndex, setHoveredProductIndex] = useState<number | null>(
    null
  );
  const [blinkStartIndex, setBlinkStartIndex] = useState<number | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    let interval: NodeJS.Timeout | null = null;

    if (hoveredProductIndex !== null) {
      setBlinkStartIndex(hoveredProductIndex);

      timer = setTimeout(() => {
        setBlinkStartIndex(null);
      }, 500);

      interval = setInterval(() => {
        if (hoveredProductIndex === null) {
          clearInterval(interval!);
        } else {
          setBlinkStartIndex(null);
        }
      }, 500);
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [hoveredProductIndex]);

  const handleMouseEnter = (index: number) => {
    setHoveredProductIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredProductIndex(null);
  };

  const Icons = [
    { icon: <FaHeart />, tooltip: "Wishlist" },
    { icon: <MdOutlineShoppingBag />, tooltip: "Add to Cart" },
    { icon: <FiEye />, tooltip: "View" },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative overflow-hidden ${cardHeight} ${cardWidth}`}>
        <Image
          src={product.imageSrc}
          alt={product.title}
          height={300}
          width={300}
          className="rounded-2xl transition-transform duration-300 h-full w-full object-cover"
        />
        {/* White opacity blink effect */}
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-300 ${
            blinkStartIndex === index ? "opacity-30" : "opacity-0"
          }`}
        />
      </div>
      <div className="p-4 flex flex-col justify-center items-center">
        <h2 className="text-lg font-bold mb-2">{product.title}</h2>

        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`${
                i < product.rating ? "text-yellow-500" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <p className="text-xl font-semibold mb-2">{product.price}</p>

        {/* Color variants div */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            hoveredProductIndex === index
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex gap-2"
        >
          {product.colorVariants.map((variant, i) => (
            <div
              key={i}
              className={`relative h-8 w-12 border ${
                variant.isSelected ? "border-black" : "border-gray-300"
              }`}
              style={{ backgroundColor: variant.color }}
            >
              {variant.isSelected && (
                <div className="absolute inset-0 border-2 border-white p-1"></div>
              )}
            </div>
          ))}
        </motion.div>

        {/* icon tooltip div */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={
            hoveredProductIndex === index
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -20 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute top-4 right-4 flex flex-col gap-2"
        >
          {Icons.map((icon, i) => (
            <IconButton key={i} icon={icon.icon} tooltip={icon.tooltip} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCard;
