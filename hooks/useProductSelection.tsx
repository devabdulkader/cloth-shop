"use client";
import { useState } from "react";
import { IProduct, IProductVariant } from "@/types/product";

interface UseProductSelectionProps {
  product: IProduct;
}

interface SelectionState {
  selectedSize: string;
  selectedColor: string;
  quantity: number | "";
  selectedImage: string;
  selectedVariantId: string;
}

const useProductSelection = ({ product }: UseProductSelectionProps) => {
  // Initialize state
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes?.[0]?.size || "" // Initialize with the first size if available
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.productVariants?.[0]?.color || "" // Initialize with the first color if available
  );
  const [quantity, setQuantity] = useState<number | "">(1); // Initialize with a default quantity
  const [selectedImage, setSelectedImage] = useState<string>(
    product.productVariants?.find((img) => img.color === selectedColor)?.url ||
      ""
  );
  const [selectedVariantId, setSelectedVariantId] = useState<string>(
    product.productVariants?.find((img) => img.color === selectedColor)?._id ||
      "" // Initialize with the first variant ID if available
  );

  // Handle size change
  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  // Handle color change
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    const newImage = product.productVariants.find((img) => img.color === color);
    if (newImage) {
      setSelectedImage(newImage.url);
      setSelectedVariantId(newImage._id); // Update selectedVariantId when color changes
    }
  };

  // Handle image change
  const handleImageChange = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  // Handle quantity change
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = Number(value);
    if (value === "" || (!isNaN(numericValue) && numericValue > 0)) {
      setQuantity(value === "" ? "" : numericValue);
    }
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity !== "" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Increase quantity
  const increaseQuantity = () => {
    if (quantity === "" || quantity > 0) {
      setQuantity((quantity === "" ? 0 : quantity) + 1);
    }
  };

  // Add to cart
  const addToCart = (itemId: string) => {
    try {
      // Retrieve the current cart from local storage or initialize as an empty array
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");

      // Determine if the itemId is a variant ID or product ID
      const variant = product.productVariants.find((v) => v._id === itemId);
      const isVariantId = !!variant;

      let newProduct;

      if (isVariantId) {
        // If the itemId is a variant ID
        newProduct = {
          variantId: itemId,
          title: product.title,
          size: selectedSize,
          color: selectedColor,
          quantity,
          selectedImage: variant.url,
          basePrice: product.basePrice,
          buyPrice: product.buyPrice,
          otherCost: product.otherCost,
          discountPrice: product.discountPrice,
          sellingPrice: product.sellingPrice,
        };
      } else {
        // If the itemId is a product ID, find the first variant
        const defaultVariant = product.productVariants[0];
        newProduct = {
          variantId: defaultVariant._id,
          title: product.title,
          size: selectedSize,
          color: defaultVariant.color,
          quantity,
          selectedImage: defaultVariant.url,
          basePrice: product.basePrice,
          buyPrice: product.buyPrice,
          otherCost: product.otherCost,
          discountPrice: product.discountPrice,
          sellingPrice: product.sellingPrice,
        };
      }

      // Check if the item with the same variantId already exists in the cart
      const existingItemIndex = cart.findIndex(
        (item: any) => item.variantId === newProduct.variantId
      );

      if (existingItemIndex > -1) {
        // Update the quantity of the existing item
        cart[existingItemIndex].quantity += quantity;
      } else {
        // Add the new product to the cart
        cart.push(newProduct);
      }

      // Save the updated cart back to local storage
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to add item to cart", error);
    }
  };

  // Add to wishlist
  const addToWishlist = () => {
    try {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      const newProduct = {
        ...product,
        selectedSize,
        selectedColor,
        quantity,
        selectedImage,
      };
      if (!wishlist.some((item: IProduct) => item._id === product._id)) {
        wishlist.push(newProduct);
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
      }
    } catch (error) {
      console.error("Failed to add item to wishlist", error);
    }
  };

  // Remove from cart
  const removeFromCart = (variantId: string) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const updatedCart = cart.filter(
        (item: any) => item.variantId !== variantId
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Failed to remove item from cart", error);
    }
  };

  // Remove from wishlist
  const removeFromWishlist = (productId: string) => {
    try {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      const updatedWishlist = wishlist.filter(
        (item: IProduct) => item._id !== productId
      );
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    } catch (error) {
      console.error("Failed to remove item from wishlist", error);
    }
  };

  // Get selection state
  const getSelectionState = (): SelectionState => ({
    selectedSize,
    selectedColor,
    quantity,
    selectedImage,
    selectedVariantId,
  });

  return {
    selectedSize,
    selectedColor,
    quantity,
    selectedImage,
    handleSizeChange,
    handleColorChange,
    handleQuantityChange,
    handleImageChange,
    decreaseQuantity,
    increaseQuantity,
    addToCart,
    addToWishlist,
    removeFromCart,
    removeFromWishlist,
    getSelectionState,
    setSelectedImage,
    selectedVariantId,
  };
};

export default useProductSelection;
