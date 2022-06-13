/* eslint-disable no-param-reassign */
// TODO: Fix later
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  loading: false,
  errors: null,
};

const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    success(state, action) {
      state.token = action.payload;
      state.loading = false;
    },
    init(state) {
      state.loading = true;
    },
    error(state, action) {
      state.errors = action.payload;
      state.loading = false;
    },
    reset(state) {
      state.errors = false;
    },
  },
});

export const { init, success, error, reset } = slice.actions;

export const { reducer } = slice;
