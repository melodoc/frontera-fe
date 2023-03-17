/* eslint-disable no-param-reassign */
// TODO: Fix later
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { saveToken } from 'services/token';

type LoginState = {
  token?: string;
  loading: boolean;
};

const initialState: LoginState = {
  token: undefined,
  loading: false
};

// TODO: rename reset to meaningful

const slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    success(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.loading = false;
      saveToken(action.payload);
    },
    init(state) {
      state.loading = true;
    },
    reset(state) {
      state.loading = false;
      state.token = undefined;
    }
  }
});

export const { init, success, reset } = slice.actions;

export const { reducer } = slice;
