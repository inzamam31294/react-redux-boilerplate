/* ========================================== *
 * Store Configuratioin
 *
 * ========================================== */

import { configureStore } from "@reduxjs/toolkit";

import reducer from "./store";

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
