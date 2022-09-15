/* eslint-disable no-param-reassign */
// TODO: Fix later
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LoginState = {
  token: string;
  loading: boolean;
};

const initialState: LoginState = {
  token: '',
  loading: false,
};

const slice = createSlice({
  name: 'login',
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
