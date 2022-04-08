import axios from "axios";

import { courseListRes } from "api/suggestions/suggestions";

import { init, success, error } from "../slice/suggestions";

export const getSuggestions = () => async (dispatch) => {
  dispatch(init());

  const baseApiUrl = "https://httpbin.org/get";

  const response = await axios(`${baseApiUrl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  if (response.status === 200) {
    dispatch(success(courseListRes.courseList));
  } else {
    dispatch(error("Ошибка!"));
  }
};
