import axios from "axios";

import { courseListRes } from "api/suggestions/suggestions";

import { init, success } from "../slice/suggestions";
import { handleError } from "../../services/handle-error";

export const getSuggestions = () => async (dispatch) => {
  dispatch(init());

  const baseApiUrl = "https://httpbin.org/get";

  const response = await axios(`${baseApiUrl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  if (response.data) {
    dispatch(success(courseListRes.courseList));
  } else {
    handleError("Ошибка!");
  }
};
