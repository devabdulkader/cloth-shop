"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ArrowButton from "../button/ArrowButton";
import { IProduct } from "@/types/product";
import Link from "next/link";

import { BUTTON_ANIMATION_CLASSES, ONHOVER_DARK_BG } from "@/lib/constant";
import CustomCrossBar from "../custom/CustomCrossBar";
import useProductSelection from "@/hooks/useProductSelection";

interface QuickViewModelProps {
  product: IProduct;
  onClose: () => void;
  activeImage: string;
  activeColor: string;
}

const QuickViewModel: React.FC<QuickViewModelProps> = ({
  product,
  onClose,
  activeImage,
  activeColor,
}) => {
  const {
    selectedSize,
    selectedColor,
    quantity,
    handleSizeChange,
    handleColorChange,
    handleQuantityChange,
    decreaseQuantity,
    increaseQuantity,
    addToCart,
    addToWishlist,
    handleImageChange,
  } = useProductSelection({ product });

  // console.log("quick view product", product);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [productItems, setProductItems] = useState<any>([]);
  const [colorId, setColorId] = useState<string | null>(null);

  useEffect(() => {
    if (product) {
      const items = [
        {
          id: product._id,
          url: product.url,
          color: product.color,
          alt: product.alt,
        },
        ...(product.productVariants?.map((variant) => ({
          id: variant._id,
          url: variant.url,
          color: variant.color,
          alt: variant.alt,
        })) || []),
      ];

      // Set the items in state
      setProductItems(items);
    }
  }, [product]);

  const handleColorClick = (index: number) => {
    console.log("color index: ", index);
    if (mainSwiper) {
      mainSwiper.slideTo(index);
    }

    // Set the colorId based on the index
    const selectedColorItem = productItems[index];
    console.log(selectedColor);
    if (selectedColorItem) {
      setColorId(selectedColorItem.id);
      console.log(productItems);
      console.log("color id", colorId);
    }
  };

  const handleAddToCart = () => {
    if (colorId) {
      addToCart(colorId);
    } else {
      // Handle the case where no color is selected (optional)
      console.log("No color selected");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white max-w-7xl mx-auto w-full h-[500px] rounded-lg flex">
        {/* Left Side: Main Image */}
        <div className="h-full w-1/2 relative">
          <Swiper
            direction={"horizontal"}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={setMainSwiper}
            loop={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper w-full h-full"
          >
            {productItems.map((item, index) => (
              <SwiperSlide key={index} className="rounded-md overflow-hidden">
                <Image
                  src={item.url}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover h-full w-full rounded-md"
                />
              </SwiperSlide>
            ))}
            <div
              className="absolute z-50 left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => mainSwiper?.slideNext()}
            >
              <ArrowButton direction="left" />
            </div>
            <div
              className="absolute z-50 right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => mainSwiper?.slidePrev()}
            >
              <ArrowButton direction="right" />
            </div>
          </Swiper>
        </div>

        {/* Right Side: Color Boxes */}
        <div className="w-1/2 h-full border overflow-y-auto flex flex-col items-start justify-start p-4">
          {/* Product details section */}
          <div className=" px-5 flex flex-col items-start justify-start  relative">
            <button
              onClick={onClose}
              className="text-gray-600 text-lg self-end absolute top-3"
            >
              <CustomCrossBar />
            </button>
            <h1 className="text-2xl font-bold mt-5">{product.title}</h1>
            <div className="text-2xl font-semibold text-gray-800 mt-2">{`€${product.basePrice}`}</div>
            <div className="mt-4 mb-6">
              <strong className="text-gray-800">SKU:</strong> {product.sku}
            </div>
            <div className="mb-4">
              <strong className="text-gray-800">Category:</strong>{" "}
              {product.productCategory.map((cat) => cat.name).join(", ")}
            </div>

            {/* Size Selection */}
            <div className="mb-4">
              <strong className="text-gray-800">Size:</strong>
              <div className="flex space-x-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size._id}
                    onClick={() => handleSizeChange(size.size)}
                    className={`p-5 border ${
                      selectedSize === size.size ? "bg-blue-500 text-white" : ""
                    }`}
                  >
                    {size.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="flex justify-start">
              <Swiper
                loop={true}
                direction={"horizontal"}
                spaceBetween={0}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                slidesPerView={productItems.length}
                className="mySwiper2  h-full flex gap-5 "
              >
                {productItems.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className="cursor-pointer pr-2 "
                    onClick={() => handleColorClick(index)}
                  >
                    <div
                      className="size-10  rounded-full border "
                      style={{ backgroundColor: item.color }}
                    ></div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Quantity and action buttons */}
            <section className="w-full">
              <p className="mb-5 w-full">
                <strong className="text-gray-800 text-xl">Quantity:</strong>
              </p>
              <div className="flex gap-5">
                <div className="flex items-center mb-4 space-x-2 border rounded-full ">
                  {/* Minus button */}
                  <button
                    onClick={decreaseQuantity}
                    className="p-2 border-gray-300"
                  >
                    -
                  </button>

                  {/* Quantity input */}
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="text-center w-20 border-0 outline-none"
                    min="1"
                    step="1"
                  />

                  {/* Plus button */}
                  <button
                    onClick={increaseQuantity}
                    className="p-2 border-gray-300"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag and Heart buttons */}
                <div className="flex items-center space-x-4 mb-4 w-full">
                  <button
                    onClick={handleAddToCart} // Update to call handleAddToCart
                    className={`${BUTTON_ANIMATION_CLASSES} ${ONHOVER_DARK_BG} flex items-center justify-center w-full p-4 border rounded-full bg-gray-100`}
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            </section>
            {/* Buy Now button */}
            <Link href="/checkouts" className="mb-4 w-full">
              <button
                className={`${BUTTON_ANIMATION_CLASSES} ${ONHOVER_DARK_BG} w-full border p-4 rounded-full`}
              >
                Buy It Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModel;
