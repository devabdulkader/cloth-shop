import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { IAddToItem, IStoreItem } from "@/types/product";

export interface CartState {
  cartItems: IStoreItem[];
  cartCount: number;
  couponCode: string;
  comment: string;
}

const loadCartFromLocalStorage = (): CartState => {
  const storedCart =
    typeof window !== "undefined" ? localStorage.getItem("cart") : null;
  if (storedCart) {
    try {
      const parsedCart = JSON.parse(storedCart);
      return {
        cartItems: Array.isArray(parsedCart.cartItems)
          ? parsedCart.cartItems
          : [],
        cartCount: parsedCart.cartCount || 0,
        couponCode: parsedCart.couponCode || "",
        comment: parsedCart.comment || "",
      };
    } catch (error) {
      return { cartItems: [], cartCount: 0, couponCode: "", comment: "" };
    }
  }
  return { cartItems: [], cartCount: 0, couponCode: "", comment: "" };
};

const initialState: CartState = {
  ...loadCartFromLocalStorage(),
  couponCode: "",
  comment: "",
};

const saveCartToLocalStorage = (state: CartState) => {
  typeof window !== "undefined" &&
    localStorage.setItem("cart", JSON.stringify(state));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<IAddToItem & { quantity: number }>
    ) => {
      const {
        selectedProductUrl,
        selectedProductColor,
        selectedProductSize,
        uuid,
        date,
        quantity,
      } = {
        ...action.payload,
        uuid: uuidv4(),
        date: new Date().toISOString(),
      };

      const existingItemIndex = state.cartItems.findIndex(
        (item) =>
          item.selectedProductColor === selectedProductColor &&
          item.selectedProductSize === selectedProductSize &&
          item.selectedProductUrl === selectedProductUrl
      );

      if (existingItemIndex === -1) {
        state.cartItems.push({
          ...action.payload,
          uuid,
          date,
        });
      } else {
        state.cartItems[existingItemIndex].quantity += quantity;
      }

      state.cartCount = state.cartItems.length;
      saveCartToLocalStorage(state);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.uuid !== action.payload
      );
      state.cartCount = state.cartItems.length;
      saveCartToLocalStorage(state);
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.uuid === action.payload
      );

      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
        state.cartCount = state.cartItems.length;
        saveCartToLocalStorage(state);
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.uuid === action.payload
      );

      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.uuid !== action.payload
          );
        }
        state.cartCount = state.cartItems.length;
        saveCartToLocalStorage(state);
      }
    },
    addCouponCode: (state, action: PayloadAction<string>) => {
      state.couponCode = action.payload;
      saveCartToLocalStorage(state);
    },
    addComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
      saveCartToLocalStorage(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  addCouponCode,
  addComment,
} = cartSlice.actions;

export default cartSlice.reducer;
