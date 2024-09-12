import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Define the interface for an individual wishlist item
interface WishlistItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  url?: string;
  color?: string;
  size?: string;
  quantity?: number; // Add quantity for increment and decrement
}

// Define the WishlistState interface
export interface WishlistState {
  wishlistItems: WishlistItem[];
  wishlistCount: number; // Represents the number of distinct items
}

// Function to load wishlist from local storage
const loadWishlistFromLocalStorage = (): WishlistState => {
  const storedWishlist = localStorage.getItem("wishlist");
  if (storedWishlist) {
    try {
      const parsedWishlist = JSON.parse(storedWishlist);
      return {
        wishlistItems: Array.isArray(parsedWishlist.wishlistItems)
          ? parsedWishlist.wishlistItems
          : [],
        wishlistCount: parsedWishlist.wishlistCount || 0,
      };
    } catch (error) {
      return { wishlistItems: [], wishlistCount: 0 };
    }
  }
  return { wishlistItems: [], wishlistCount: 0 };
};

// Initial state
const initialState: WishlistState = loadWishlistFromLocalStorage();

// Function to save wishlist to local storage
const saveWishlistToLocalStorage = (state: WishlistState) => {
  localStorage.setItem("wishlist", JSON.stringify(state));
};

// Create the wishlist slice
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const newItem = action.payload;
      const existingItemIndex = state.wishlistItems.findIndex(
        (item) =>
          item.url === newItem.url &&
          item.color === newItem.color &&
          item.size === newItem.size
      );

      if (existingItemIndex === -1) {
        state.wishlistItems.push({
          ...newItem,
          id: uuidv4(),
          quantity: newItem.quantity || 1, // Initialize quantity
        });
      }

      state.wishlistCount = state.wishlistItems.length;
      saveWishlistToLocalStorage(state);
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
      state.wishlistCount = state.wishlistItems.length;
      saveWishlistToLocalStorage(state);
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.wishlistItems.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== -1) {
        if (state.wishlistItems[itemIndex].quantity) {
          state.wishlistItems[itemIndex].quantity += 1;
        } else {
          state.wishlistItems[itemIndex].quantity = 1;
        }
        state.wishlistCount = state.wishlistItems.length;
        saveWishlistToLocalStorage(state);
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.wishlistItems.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== -1) {
        if (
          state.wishlistItems[itemIndex].quantity &&
          state.wishlistItems[itemIndex].quantity > 1
        ) {
          state.wishlistItems[itemIndex].quantity -= 1;
        } else {
          state.wishlistItems = state.wishlistItems.filter(
            (item) => item.id !== action.payload
          );
        }
        state.wishlistCount = state.wishlistItems.length;
        saveWishlistToLocalStorage(state);
      }
    },
  },
});

// Export actions and reducer
export const {
  addToWishlist,
  removeFromWishlist,
  incrementQuantity,
  decrementQuantity,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
