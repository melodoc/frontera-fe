import { init, success, error } from '../slice/detail-course'
import axios from "axios";
import { detailCourseRes } from 'api/detail-course/detail-course';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getDetailCourse = (id) => async (dispatch) => {
    dispatch(init());

    const baseApiUrl = 'https://httpbin.org/get';

    const response =  await axios(`${baseApiUrl}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    });

    if (response.data) {
        dispatch(success(detailCourseRes.data));
    } else {
        dispatch(error('Ошибка!'));
    }
};

export default getDetailCourse;
