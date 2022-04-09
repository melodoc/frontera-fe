import { createSlice } from "@reduxjs/toolkit";

type Course = {
  label: string;
  id: number;
  imageSrc: string;
};

type SuggestionsState = {
  courseList: Array<Course>;
  loading: boolean;
  errors: string[];
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
  errors: [""],
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
    error(state, action) {
      state.errors = action.payload;
      state.loading = false;
    },
  },
});

export const { success, init, error } = slice.actions;

export const { reducer } = slice;
