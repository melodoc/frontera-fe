import axios from 'axios';

import { detailCourseRes } from 'api/detail-course/detail-course';

import { init, success } from '../slice/detail-course';
import { handleError } from '../../services/handle-error';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getDetailCourse = (id) => async (dispatch) => {
  dispatch(init());

  const baseApiUrl = 'https://httpbin.org/get';

  const response = await axios(`${baseApiUrl}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });

  if (response.data) {
    dispatch(success(detailCourseRes.data));
  } else {
    handleError('Error!');
  }
};
