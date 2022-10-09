/* eslint-disable no-param-reassign */
// TODO: Fix later
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Data } from "../../interfaces/interfaces";

type DetailCourseState = {
  data: Data;
  loading: boolean;
};

const initialState: DetailCourseState = {
  data: {
    id: "0",
    title: "",
    description: "",
    info: {
      authors: [],
      language: "",
      lastUpdate: "",
      duration: "",
    },
    videoList: [],
  },
  loading: false,
};

const slice = createSlice({
  name: "detailCourse",
  initialState,
  reducers: {
    success(state, action: PayloadAction<Data>) {
      state.data = action.payload;
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
