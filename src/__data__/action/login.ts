import axios from "axios";

import { handleError } from "../../services/handle-error";
import { init, success } from "../slice/login";

export const getLogin = (login, password) => async (dispatch) => {
  dispatch(init());

  const baseApiUrl = "https://httpbin.org/post";

  const response = await axios(`${baseApiUrl}`, {
    method: "POST",
    data: { login, password },
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  if (response.data && response.status === 200) {
    dispatch(success(response.data.json));
  } else {
    handleError('Error!')
  }
};
