"use client";
import { useState } from "react";
import { IProduct } from "@/types/product";
import { v4 as uuidv4 } from "uuid"; // Import uuid for generating unique IDs
import { reduxAddCart, reduxRemoveCart } from "@/lib/store/features/cart/cartSlice";
import { useDispatch } from "react-redux";

interface UseProductSelectionProps {
  product: IProduct;
}

interface CartItem {
  id: string; // Unique ID for each cart item
  productId: string;
  variantId?: string | null;
  title: string;
  size: string;
  color: string;
  quantity: number; // Should be a number instead of number | string
  selectedImage: string;
  basePrice: number;
  buyPrice: number;
  otherCost: number;
  discountPrice: number;
  sellingPrice: number;
  dateAdded: string;
}

interface SelectionState {
  selectedSize: string;
  selectedColor: string;
  quantity: number; // Keep this as number
  selectedImage: string;
  selectedImageId?: string; // Add selectedImageId to SelectionState
  selectedVariantId: string;
}

const useProductSelection = ({ product }: UseProductSelectionProps) => {
  // Default values for state
  const dispatch = useDispatch();

  const [cartUpdated, setCartUpdated] = useState<boolean>(false);
  const [wishlistUpdated, setWishlistUpdated] = useState<boolean>(false);
  const defaultSize = product.sizes?.[0]?.size || "";
  const defaultColor = product.color || "";
  const defaultImage = product.url;
  const defaultVariantId =
    product.productVariants?.find((img) => img.color === defaultColor)?._id ||
    "";

  // Initialize state
  const [selectedSize, setSelectedSize] = useState<string>(defaultSize);
  const [selectedColor, setSelectedColor] = useState<string>(defaultColor);
  const [quantity, setQuantity] = useState<number>(1); // Initialize as a number
  const [selectedImage, setSelectedImage] = useState<string>(defaultImage);
  const [selectedImageId, setSelectedImageId] = useState<string | undefined>(
    undefined
  ); // Add selectedImageId state
  const [selectedVariantId, setSelectedVariantId] =
    useState<string>(defaultVariantId);

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
      setSelectedVariantId(newImage._id);
    }
  };

  // Handle image change
  const handleImageChange = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };
  const handleImageId = (imageId: string) => {
    setSelectedImageId(imageId); // Set selectedImageId
  };

  // Handle quantity change
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numericValue = Number(e.target.value);
    if (!isNaN(numericValue) && numericValue > 0) {
      setQuantity(numericValue);
    }
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Add to cart
  const addToCart = (itemId: string) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const variant = product.productVariants.find((v) => v._id === itemId);
      const isVariantId = !!variant;

      const newProduct: CartItem = {
        id: uuidv4(), // Generate a unique ID for each cart item
        productId: product._id,
        variantId: isVariantId ? itemId : null,
        title: product.title,
        size: selectedSize,
        color: isVariantId ? variant.color : selectedColor,
        quantity, // Ensure quantity is always valid
        selectedImage: isVariantId ? variant.url : selectedImage,
        basePrice: product.basePrice,
        buyPrice: product.buyPrice,
        otherCost: product.otherCost,
        discountPrice: product.discountPrice,
        sellingPrice: product.sellingPrice,
        dateAdded: new Date().toISOString(), // Timestamp when added
      };

      const existingItemIndex = cart.findIndex(
        (item: CartItem) =>
          item.productId === newProduct.productId &&
          item.variantId === newProduct.variantId &&
          item.size === newProduct.size &&
          item.color === newProduct.color
      );

      if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
      } else {
        cart.push(newProduct);
        dispatch(reduxAddCart(JSON.stringify(newProduct)));

        // window.location.reload();
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to add item to cart", error);
    }
  };

  // Add to wishlist
  const addToWishlist = (itemId: string) => {
    console.log("use product wishlist id", itemId);
    try {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      const variant = product.productVariants.find((v) => v._id === itemId);
      const isVariantId = !!variant;
      const newProduct: CartItem = {
        id: uuidv4(), // Generate a unique ID for each cart item
        productId: product._id,
        variantId: isVariantId ? itemId : null,
        title: product.title,
        size: selectedSize,
        color: isVariantId ? variant.color : selectedColor,
        quantity, // Ensure quantity is always valid
        selectedImage: isVariantId ? variant.url : selectedImage,
        basePrice: product.basePrice,
        buyPrice: product.buyPrice,
        otherCost: product.otherCost,
        discountPrice: product.discountPrice,
        sellingPrice: product.sellingPrice,
        dateAdded: new Date().toISOString(), // Timestamp when added
      };

      const existingItemIndex = wishlist.findIndex(
        (item: CartItem) =>
          item.productId === newProduct.productId &&
          item.variantId === newProduct.variantId &&
          item.size === newProduct.size &&
          item.color === newProduct.color
      );

      if (existingItemIndex > -1) {
        wishlist[existingItemIndex].quantity += quantity;
      } else {
        wishlist.push(newProduct);
        window.location.reload();
      }

      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } catch (error) {
      console.error("Failed to add item to cart", error);
    }
  };

  // Remove from cart
  const removeFromCart = (itemId: string) => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const updatedCart = cart.filter((item: CartItem) => item.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      dispatch(reduxRemoveCart(itemId));
      // window.location.reload();
    } catch (error) {
      console.error("Failed to remove item from cart", error);
    }
  };

  // Remove from wishlist
  // Remove from wishlist
  const removeFromWishlist = (id: string) => {
    try {
      console.log("ID from remove function:", id);

      // Fetch the wishlist from localStorage
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

      // Log the current wishlist for debugging
      console.log("Current wishlist:", wishlist);

      // Ensure wishlist items are objects with 'id', 'productId', and 'variantId' properties
      if (!Array.isArray(wishlist)) {
        console.error("Wishlist is not an array");
        return;
      }

      const updatedWishlist = wishlist.filter(
        (item: { id: string; productId: string; variantId?: string }) => {
          // If item has a variantId, keep items where the variantId does not match the provided id
          if (item.variantId) {
            return item.variantId !== id;
          } else {
            // If item does not have a variantId, keep items where the productId does not match the provided id
            return item.productId !== id;
          }
        }
      );

      // Log the updated wishlist for debugging
      console.log("Updated wishlist:", updatedWishlist);

      // Update localStorage with the new wishlist
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      window.location.reload();

      // Optionally, update component state if using React
      // setWishlist(updatedWishlist); // Uncomment if using state
    } catch (error) {
      console.error("Failed to remove item from wishlist", error);
    }
  };

  // Check if the product is in the wishlist
  const isProductInWishlist = async (
    imageUrl: string,
    color: string
  ): Promise<boolean> => {
    try {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
      return wishlist.some(
        (item: CartItem) =>
          item.selectedImage === imageUrl && item.color === color
      );
    } catch (error) {
      console.error("Failed to check wishlist status", error);
      return false;
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
    isProductInWishlist,
    handleImageId,
    selectedImageId,
    cartUpdated, // Return cartUpdated for use in the component
    wishlistUpdated, // Return wishlistUpdated for use in the component
  };
};

export default useProductSelection;
