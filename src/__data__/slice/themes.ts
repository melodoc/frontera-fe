/* eslint-disable no-param-reassign */
// TODO: Fix later
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CourseTheme } from '../../interfaces/interfaces';

type TrendingState = {
  themes: Array<CourseTheme>;
  loading: boolean;
};

const initialState: TrendingState = {
  themes: [],
  loading: false,
};

const slice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    success(state, action: PayloadAction<Array<CourseTheme>>) {
      state.themes = action.payload;
      state.loading = false;
    },
    init(state) {
      state.loading = true;
    },
  },
});

export const { success, init } = slice.actions;

export const { reducer } = slice;
