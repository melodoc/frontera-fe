/* eslint-disable no-param-reassign */
// TODO: Fix later
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type RegistrationState = {
  token: string;
  loading: boolean;
};

const initialState: RegistrationState = {
  token: "",
  loading: false,
};

const slice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    success(state, action: PayloadAction<string>) {
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
