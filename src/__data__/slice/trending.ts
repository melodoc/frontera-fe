/* eslint-disable no-param-reassign */
// TODO: Fix later
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Card } from "../../interfaces/interfaces";

type TrendingState = {
  themes: Array<Card>;
  loading: boolean;
};

const initialState: TrendingState = {
  themes: [],
  loading: false,
};

const slice = createSlice({
  name: "trending",
  initialState,
  reducers: {
    success(state, action: PayloadAction<Array<Card>>) {
      state.themes = action.payload;
      state.loading = false;
    },
    init(state) {
      state.loading = true;
    },
    reset(state) {
      state.loading = false;
    },
  },
});

export const { success, init, reset } = slice.actions;

export const { reducer } = slice;
