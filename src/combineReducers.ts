/* ========================================== *
 * Combine Reducers
 *
 * Combining all Reducers from application
 * ========================================== */

import { combineReducers } from "redux";

import reducers from "./store/reducers";

export default function createReducer(injectedReducers = reducers) {
  const rootReducer = combineReducers({
    ...injectedReducers,
  });

  return rootReducer;
}
