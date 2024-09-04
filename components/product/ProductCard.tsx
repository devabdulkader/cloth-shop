"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import { motion } from "framer-motion";
import IconButton from "../common/IconButton";
import { IProduct } from "@/types/product";
import Link from "next/link";

interface ProductCardProps {
  product: IProduct;
  key: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, key }) => {
  const [hoveredProductkey, setHoveredProductkey] = useState<number | null>(
    null
  );
  const [blinkStartkey, setBlinkStartkey] = useState<number | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    let interval: NodeJS.Timeout | null = null;

    if (hoveredProductkey !== null) {
      setBlinkStartkey(hoveredProductkey);

      timer = setTimeout(() => {
        setBlinkStartkey(null);
      }, 500);

      interval = setInterval(() => {
        if (hoveredProductkey === null) {
          clearInterval(interval!);
        } else {
          setBlinkStartkey(null);
        }
      }, 500);
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (interval) clearInterval(interval);
    };
  }, [hoveredProductkey]);

  const handleMouseEnter = (key: number) => {
    setHoveredProductkey(key);
  };

  const handleMouseLeave = () => {
    setHoveredProductkey(null);
  };

  const Icons = [
    { icon: <FaHeart />, tooltip: "Wishlist" },
    { icon: <MdOutlineShoppingBag />, tooltip: "Add to Cart" },
    { icon: <FiEye />, tooltip: "View" },
  ];
  return (
    <Link
      href={`/products/${product._id}`}
      className="relative place-self-center"
    >
      <div
        className="relative place-self-center"
        onMouseEnter={() => handleMouseEnter(key)}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`relative overflow-hidden `}>
          <Image
            src={product.displayImage.url}
            alt={product.title}
            height={300}
            width={300}
            className="rounded-2xl transition-transform duration-300 h-full w-full object-cover"
          />
          {/* White opacity blink effect */}
          <div
            className={`absolute inset-0 bg-white transition-opacity duration-300 ${
              blinkStartkey === key ? "opacity-30" : "opacity-0"
            }`}
          />
        </div>
        <div className="p-4 flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold mb-2">{product.title}</h2>

          {/* <div className="flex items-center mb-2">
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
        </div> */}
          <p className="text-xl font-semibold mb-2">$ {product.basePrice}</p>

          {/* Color variants div */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              hoveredProductkey === key
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex gap-2"
          >
            {product.productImgs.map((variant, i) => (
              <div
                key={i}
                className={`relative h-8 w-12 border`}
                style={{ backgroundColor: variant.color }}
              >
                <div className="absolute inset-0 border-2 border-white p-1"></div>
              </div>
            ))}
          </motion.div>

          {/* icon tooltip div */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={
              hoveredProductkey === key
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
    </Link>
  );
};

export default ProductCard;
