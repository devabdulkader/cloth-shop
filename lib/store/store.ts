"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/features/cart/cartSlice";
import navReducer from "../store/features/nav/navSlice";
import userSidebarReducer from "../store/features/userSidebar/userSidebarSlice";
import filterSidebarReducer from "../store/features/filterSidebar/filterSidebarSlice";

import cartSidebarReducer from "../store/features/cartSidebar/cartSidebarSlice";
import mobileSearchBarReducer from "./features/searchBar/mobileSearchBarSlice"; // Import the searchBarReducer
import desktopSearchBarReducer from "./features/searchBar/desktopSearchBarSlice"; // Import the searchBarReducer
import buttonToggleReducer from "../store/features/buttonToggle/buttonToggleSlice"; // Import the new slice

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      nav: navReducer,
      userSidebar: userSidebarReducer,
      cartSidebar: cartSidebarReducer,
      filterSidebar: filterSidebarReducer,

      mobileSearchBar: mobileSearchBarReducer, // Add the searchBar reducer to the store
      desktopSearchBar: desktopSearchBarReducer, // Add the searchBar reducer to the store

      buttonToggle: buttonToggleReducer, // Add the reducer here
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
