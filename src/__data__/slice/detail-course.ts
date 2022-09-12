/* eslint-disable no-param-reassign */
// TODO: Fix later
import { createSlice } from "@reduxjs/toolkit";

type Video = {
  label: string;
  imageSrc: string;
  id: number;
  videoSrc: string;
};

type Info = {
  authors: string[];
  language: string;
  lastUpdate: string;
  duration: string;
};

type Data = {
  title: string;
  id: number;
  description: string;
  info: Info;
  videoList: Array<Video>;
};

type DetailCourseState = {
  data: Data;
  loading: boolean;
};
const initialState: DetailCourseState = {
  data: {
    title: "",
    id: 0,
    description: "",
    info: {
      authors: [""],
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
    success(state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    init(state) {
      state.loading = true;
    }
  },
});

export const { success, init } = slice.actions;

export const { reducer } = slice;
