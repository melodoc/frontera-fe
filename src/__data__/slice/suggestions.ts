/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

type Course = {
  label: string;
  id: number;
  imageSrc: string;
};

type SuggestionsState = {
  courseList: Array<Course>;
  loading: boolean;
};

const initialState: SuggestionsState = {
  courseList: [
    {
      label: "",
      id: 0,
      imageSrc: "",
    },
  ],
  loading: false,
};

const slice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {
    success(state, action) {
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
