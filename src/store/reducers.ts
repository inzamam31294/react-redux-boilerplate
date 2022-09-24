/* ========================================== *
 * Reducers
 *
 * ========================================== */

import { configureStore } from "@reduxjs/toolkit";
import { routerReducer } from "react-router-redux";

import postReducer from "./Posts";
import userReducer from "./User";

 
const store = configureStore({
  reducer : {
    user: userReducer,
    post: postReducer,
    routing: routerReducer,
  },
});
export default store;