import { createAsyncThunk } from "@reduxjs/toolkit";

import { courseListRes } from "api/suggestions/suggestions";

import { init, success, reset } from "../slice/suggestions";
import { handleError } from "../../services/handle-error";
import { store } from "../store";

export const getSuggestions = createAsyncThunk("data/suggestions", async () => {
  store.dispatch(init());
  try {
    // const { data } = await api.get<Array<Course>>(APIRoute.Suggestions);
    // store.dispatch(success(data))
    store.dispatch(success(courseListRes.courseList));
  } catch (error) {
    handleError(error);
    store.dispatch(reset());
  }
});
