/* ========================================== *
 * Reducers
 *
 * ========================================== */

import { routerReducer } from "react-router-redux";

import postReducer from "./Posts";
import userReducer from "./User";

const reducer = {
  user: userReducer,
  posts: postReducer,
  routing: routerReducer,
};

export default reducer;
