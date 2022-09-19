/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Course } from "interfaces/interfaces";

type SuggestionsState = {
  courseList: Array<Course>;
  loading: boolean;
};

const initialState: SuggestionsState = {
  courseList: [
    {
      id: "0",
      label: "",
      imageSrc: "",
    },
  ],
  loading: false,
};

const slice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {
    success(state, action: PayloadAction<Array<Course>>) {
      state.courseList = action.payload;
      state.loading = false;
    },
    init(state) {
      state.loading = true;
    },
  },
});

export const { success, init } = slice.actions;

export const { reducer } = slice;
