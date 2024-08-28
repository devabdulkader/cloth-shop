import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/features/cart/cartSlice";
import navReducer from "../store/features/nav/navSlice";
import userSidebarReducer from "../store/features/userSidebar/userSidebarSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      nav: navReducer,
      userSidebar: userSidebarReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
