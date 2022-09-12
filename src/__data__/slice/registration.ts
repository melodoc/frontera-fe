/* eslint-disable no-param-reassign */
// TODO: Fix later
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  loading: false,
};

const slice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    success(state, action) {
      state.token = action.payload;
      state.loading = false;
    },
    init(state) {
      state.loading = true;
    },
  },
});

export const { init, success } = slice.actions;

export const { reducer } = slice;
