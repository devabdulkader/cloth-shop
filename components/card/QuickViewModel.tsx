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
import CartModal from "../common/CartModal";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/store/features/cart/cartSlice";

interface QuickViewModelProps {
  product: IProduct;
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

  const items = [
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
  ];

  const [selectedSize, setSelectedSize] = useState<string | null>(
    product.availableSizes.length > 0 ? product.availableSizes[0].size : null
  );
  const [selectedColor, setSelectedColor] = useState<string | null>(
    items[0].color
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(
    items[0].url
  );
  const [selectedId, setSelectedId] = useState<string | null>(items[0].id);

  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  const [productItem, setProductItem] = useState<IProduct>({
    _id: product._id,
    selectedProductId: selectedId || "",
    title: product.title,
    description: product.description,
    gender: product.gender,
    basePrice: product.basePrice,
    buyPrice: product.buyPrice,
    otherCost: product.otherCost,
    discountPrice: product.discountPrice,
    url: selectedImage || product.url,
    color: selectedColor || product.color,
    deliveryMethods: "",
    size: selectedSize || "",
    sellingPrice: product.sellingPrice,
    productVariants: product.productVariants,
    quantity: selectedQuantity || 1,
  });

  useEffect(() => {
    setProductItem((prevProductItem) => ({
      ...prevProductItem,
      url: selectedImage || product.url,
      color: selectedColor || product.color,
      size: selectedSize || "",
      quantity: selectedQuantity, // Include quantity here
    }));
  }, [selectedSize, selectedColor, selectedImage, selectedQuantity]); // Add quantity to dependencies

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

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
    console.log(productItem);
  };

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [productItems, setProductItems] = useState<ProductItem[]>(items);
  const [colorId, setColorId] = useState<string | null>(null);
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    const activeColorItem = items.find((item) => item.color === product.color);
    if (activeColorItem) {
      setColorId(activeColorItem.id);
    }
  }, [product]);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      {showCartModal && <CartModal onClose={handleModalClose} />}
      <div className="bg-white flex max-w-6xl mx-auto w-full h-[550px] rounded-lg overflow-hidden">
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
        <div className="w-1/2 h-full relative overflow-y-auto flex flex-col items-start justify-start p-4">
          <div className="px-5 flex w-full flex-col items-start justify-start relative">
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

            {/* Size Selection */}
            <div className="mb-4">
              <strong className="text-gray-800">Size:</strong>
              <div className="flex flex-wrap">
                {product.availableSizes.map((size) => (
                  <button
                    key={size.size}
                    className={`mr-2 mb-2 py-1 px-3 rounded border ${
                      selectedSize === size.size
                        ? "border-blue-500 text-blue-500"
                        : "border-gray-300 text-gray-800"
                    }`}
                    onClick={() => handleSizeClick(size.size)}
                  >
                    {size.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-4">
              <strong className="text-gray-800">Color:</strong>
              <div className="flex flex-wrap">
                {productItems.map((item, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full mr-2 mb-2 ${
                      selectedColor === item.color ? "ring-2 ring-blue-500" : ""
                    }`}
                    style={{ backgroundColor: item.color }}
                    onClick={() => handleColorClick(index)}
                  />
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="mb-4 flex items-center">
              <strong className="text-gray-800 mr-4">Quantity:</strong>
              <button
                onClick={decreaseQuantity}
                className="bg-gray-300 px-3 py-1 rounded"
              >
                -
              </button>
              <input
                type="number"
                value={selectedQuantity}
                min="1"
                onChange={handleQuantityChange}
                className="w-12 text-center mx-2 border border-gray-300 rounded"
              />
              <button
                onClick={increaseQuantity}
                className="bg-gray-300 px-3 py-1 rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className={`bg-blue-500 text-white px-4 py-2 rounded ${BUTTON_ANIMATION_CLASSES}`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModel;
