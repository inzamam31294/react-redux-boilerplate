/* ========================================== *
 * Reducer for Post Management
 *
 * ========================================== */

import { createSlice } from "@reduxjs/toolkit";

interface IPostState {
  posts: any[];
  error: null | string;
  isSuccess: boolean;
}

const initialState: IPostState = {
  posts: [],
  error: null,
  isSuccess: false,
};

const postSlice: any = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { getPosts } = postSlice.actions;

export default postSlice.reducer;
