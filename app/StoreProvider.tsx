"use client";
import React, { ReactNode, useRef } from "react";
import { AppStore, makeStore } from "@/lib/store/store";
import { Provider } from "react-redux";

const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const storeRef = useRef<AppStore | undefined>(undefined);

  // Create store and dispatch actions if it hasn't been created yet
  if (!storeRef.current) {
    storeRef.current = makeStore();
    // storeRef.current.dispatch(add("test productId in cart"));
    // storeRef.current.dispatch(toggleNav());
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
