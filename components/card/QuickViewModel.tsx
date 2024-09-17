import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ArrowButton from "../button/ArrowButton";
import { IAddToItem, IProduct } from "@/types/product";
import Link from "next/link";
import { BUTTON_ANIMATION_CLASSES, ONHOVER_DARK_BG } from "@/lib/constant";
import CustomCrossBar from "../custom/CustomCrossBar";
import CartModal from "../common/CartModal";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/store/features/cart/cartSlice";

interface QuickViewModelProps {
  product: IAddToItem;
  onClose: () => void;
}

interface ProductItem {
  id: string;
  url: string;
  color: string;
  alt: string;
}

const QuickViewModel: React.FC<QuickViewModelProps> = ({
  product,
  onClose,
}) => {
  const dispatch = useDispatch();

  // Memoize the items array
  const items = useMemo(
    () => [
      {
        id: product._id,
        url: product.url,
        alt: product.alt,
        color: product.color,
      },
      ...product.productVariants.map((variant) => ({
        id: variant._id,
        url: variant.url,
        alt: variant.alt,
        color: variant.color,
      })),
    ],
    [product]
  );

  const [selectedSize, setSelectedSize] = useState<string | null>(
    product.sizes.length > 0 ? product.sizes[0].size : null
  );
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.selectedProductColor
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(
    product.selectedProductUrl
  );
  const [selectedId, setSelectedId] = useState<string | null>(items[0].id);

  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  const [productItem, setProductItem] = useState<IAddToItem>({
    _id: product._id,
    title: product.title,
    description: product.description,
    url: product.url, // Assuming this is the general product image
    alt: product.alt,
    color: product.color,
    sku: product.sku,
    productCategory: product.productCategory,
    tags: product.tags,
    productBrand: product.productBrand,
    selectedProductId: selectedId || product._id,
    selectedProductUrl: selectedImage || product.url, // If selectedImage is the specific variant
    selectedProductColor: selectedColor || product.color, // Store selected color
    selectedProductSize: selectedSize || product.sizes[0].size, // Store selected size
    gender: product.gender,
    basePrice: product.basePrice,
    buyPrice: product.buyPrice,
    otherCost: product.otherCost, // Optional, can be undefined
    discountPrice: product.discountPrice, // Optional, can be undefined
    sizes: product.sizes, // Assuming this is an array of size options
    deliveryMethods: "", // Placeholder, can be updated with actual delivery methods
    sellingPrice: product.sellingPrice,
    productVariants: product.productVariants, // Assuming it's an array of variants
    quantity: 1, // Default to 1
  });

  useEffect(() => {
    const defaultSize = product.sizes?.[0]?.size || ""; // Safely access product.sizes[0].size

    setProductItem((prevProductItem) => ({
      ...prevProductItem,
      selectedProductUrl: selectedImage || product.url,
      selectedProductColor: selectedColor || product.color,
      selectedProductSize: selectedSize || defaultSize,
    }));
  }, [
    selectedSize,
    selectedColor,
    selectedImage,
    product.url,
    product.color,
    product.sizes,
  ]);

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
    const selectedItem = items.find((item) => item.color === color);
    if (selectedItem) {
      setSelectedImage(selectedItem.url);
      setSelectedId(selectedItem.id);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(productItem));
    setShowCartModal(true);
    console.log(productItem);
  };
  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [productItems, setProductItems] = useState<ProductItem[]>(items);
  const [colorId, setColorId] = useState<string | null>(null);
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    if (thumbsSwiper && mainSwiper) {
      const activeColorItem = items.find(
        (item) => item.color === selectedColor
      );
      const activeImageItem = items.find((item) => item.url === selectedImage);
      if (activeColorItem && activeImageItem) {
        const colorIndex = items.indexOf(activeColorItem);
        const imageIndex = items.indexOf(activeImageItem);
        mainSwiper.slideTo(imageIndex);
        thumbsSwiper.slideTo(colorIndex);
      }
    }
  }, [thumbsSwiper, mainSwiper, selectedColor, selectedImage, items]);

  const handleColorClick = (index: number) => {
    const selectedColorItem = productItems[index];
    if (selectedColorItem) {
      setSelectedColor(selectedColorItem.color);
      setSelectedImage(selectedColorItem.url); // Update image URL for the selected color
      setSelectedId(selectedColorItem.id); // Also set the selected item's ID
    }
  };

  const increaseQuantity = () => {
    setSelectedQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) {
      setSelectedQuantity(value);
    }
  };

  const handleModalClose = () => {
    setShowCartModal(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-layer-1 flex items-center justify-center bg-black bg-opacity-50 ">
      {showCartModal && <CartModal onClose={handleModalClose} />}
      <div
        className={`${
          showCartModal ? "hidden" : "flex"
        } bg-white  max-w-6xl z-layer-1 mx-auto w-full relative   h-[550px] rounded-lg overflow-hidden`}
      >
        {/* Left Side: Main Image */}
        <div className="h-full w-1/2 relative rounded-lg overflow-hidden">
          <Swiper
            className="mySwiper2 w-full h-full "
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            onSwiper={setMainSwiper}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} className="rounded-md overflow-hidden">
                <Image
                  src={item.url}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover h-full w-full rounded-md p-5"
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
        <div className="w-1/2 h-full relative overflow-y-auto custom-scrollbar flex flex-col items-start justify-start p-4">
          <div className="px-5 flex w-full flex-col items-start justify-start relative gap-3">
            <button
              onClick={onClose}
              className="text-gray-600 text-lg self-end absolute top-3"
            >
              <CustomCrossBar />
            </button>
            <h1 className="text-2xl font-bold mt-5">{product.title}</h1>
            <div className="text-2xl font-semibold text-gray-800">{`€${product.basePrice}`}</div>
            <div className="flex flex-col gap-2">
              {/* Product tags */}
              <div className="flex space-x-10">
                <strong className="text-gray-800 text-sm w-40 uppercase">
                  Tags:
                </strong>{" "}
                <p>{product.tags.map((tag) => tag.name).join(", ")}</p>
              </div>
              {/* Product SKU */}
              <div className="flex space-x-10">
                <strong className="text-gray-800 text-sm w-40 uppercase">
                  SKU:
                </strong>
                <p>{product.sku}</p>
              </div>
              {/* Product category */}
              <div className="flex space-x-10">
                <strong className="text-gray-800 text-sm w-40 uppercase">
                  Category:
                </strong>{" "}
                <p>
                  {" "}
                  {product.productCategory.map((cat) => cat.name).join(", ")}
                </p>
              </div>
            </div>

            {/* Size Selection */}
            <div className="flex flex-col gap-3">
              <strong className="text-gray-800">Size:</strong>
              <div className="flex flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size.size}
                    className={`mr-2 mb-2 py-1 px-3 rounded border transition-colors duration-300 ease-in-out
                    ${
                      selectedSize === size.size
                        ? "bg-black text-white border-black"
                        : "border-gray-400 text-gray-800 hover:border-black"
                    }
                    h-10 w-14`}
                    onClick={() => handleSizeClick(size.size)}
                  >
                    {size.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="flex flex-col gap-3">
              <strong className="text-gray-800">Color:</strong>

              <Swiper
                direction={"horizontal"}
                spaceBetween={0}
                slidesPerView={productItems.length}
                pagination={{ clickable: true }}
                onSwiper={setThumbsSwiper}
                loop={true}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper h-full flex gap-5"
              >
                {productItems.map((item, index) => (
                  <SwiperSlide key={index} className="cursor-pointer pr-3 ">
                    <div className="flex flex-col gap-2">
                      <div className="flex space-x-2">
                        <div
                          className={`relative w-10 h-10 flex items-center justify-center rounded-full ${
                            selectedColor === item.color
                              ? "border-black"
                              : "border-gray-300"
                          }`}
                          style={{
                            border: "2px solid transparent", // This creates space for the outer ring
                            borderRadius: "50%",
                            backgroundColor: "transparent",
                          }}
                          onClick={() => handleColorClick(index)}
                        >
                          {/* Outer Ring */}
                          <div
                            className={`absolute inset-0 rounded-full border-2 ${
                              selectedColor === item.color
                                ? "border-black"
                                : "border-gray-300"
                            }`}
                          ></div>
                          {/* Inner Ring */}

                          {/* Actual Color */}
                          <div
                            className="absolute inset-1 rounded-full"
                            style={{ backgroundColor: item.color }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <section className="w-full flex flex-col gap-3">
              <strong className="text-gray-800 text-sm uppercase mb-2">
                Quantity:
              </strong>

              <div className="flex gap-5 mb-2">
                <div className="flex items-center space-x-2 border rounded-full quantity">
                  {/* Minus button */}
                  <button onClick={decreaseQuantity} className="px-3 ">
                    -
                  </button>
                  <input
                    type="number"
                    value={selectedQuantity}
                    min="1"
                    onChange={handleQuantityChange}
                    className="w-12 text-center mx-2 "
                  />
                  <button onClick={increaseQuantity} className="px-3">
                    +
                  </button>
                </div>

                {/* Add to Bag and Heart buttons */}
                <div className="flex items-center space-x-4  w-full">
                  <button
                    onClick={handleAddToCart}
                    className={`border py-3 px-4 font-semibold shadow text-sm w-full uppercase bg-[#EDEDED]  rounded-full hover:bg-slate-800 hover:text-white transition-colors duration-300 ease-in-out`}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
              {/* Buy Now button */}
              <Link href="/checkouts" className="w-full">
                <button
                  className={`${BUTTON_ANIMATION_CLASSES} ${ONHOVER_DARK_BG} w-full uppercase font-semibold shadow text-sm border p-4 rounded-full`}
                >
                  Buy It Now
                </button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModel;
