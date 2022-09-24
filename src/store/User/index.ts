/* ========================================== *
 * Reducer for User Management
 *
 * ========================================== */

import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
  user: Record<string, any>;
  error: null | string;
  isSuccess: boolean;
}

const initialState: IUserState = {
  user: {},
  error: null,
  isSuccess: false,
};

const userSlice: any = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      return state;
    },
    register: (state) => {
      return state;
    },
    logout: (state) => {
      return state;
    },
  },
});

export const { login, register, logout } = userSlice.actions;

export default userSlice.reducer;
