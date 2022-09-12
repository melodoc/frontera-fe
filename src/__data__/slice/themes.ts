/* eslint-disable no-param-reassign */
// TODO: Fix later
import { createSlice } from "@reduxjs/toolkit";

type TrendingState = {
  themes: string[];
  loading: boolean;
};
const initialState: TrendingState = {
  themes: [""],
  loading: false,
};

const slice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    success(state, action) {
      state.themes = action.payload;
      state.loading = false;
    },
    init(state) {
      state.loading = true;
    }
  },
});

export const { success, init } = slice.actions;

export const { reducer } = slice;
