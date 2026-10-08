"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "./state/Store";
import ThemeBase from "./theme/ThemeBase";

interface AppProps {
  children: React.ReactNode;
}

export default function App({ children }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeBase />
      {children}
    </Provider>
  );
}