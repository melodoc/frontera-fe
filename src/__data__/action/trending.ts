/* eslint-disable @typescript-eslint/no-shadow */
import { trendingErr, trendingRes } from "api/trending/trending";
import { handleError } from "services/handle-error";

import { success, init } from "../slice/trending";

export const getCourses = () => async (dispatch) => {
  dispatch(init());
  const baseApiUrl = "https://httpbin.org/get";

  const response = await fetch(`${baseApiUrl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  if (response.ok) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = await response.json();
    dispatch(success(trendingRes.themes));
  } else {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result = await response.json();
    } catch (error) {
      handleError(error)
    }
  }
};
