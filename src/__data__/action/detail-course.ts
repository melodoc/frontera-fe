import { getConfigValue } from '@ijl/cli';

import { init, success, error } from '../slice/detail-course'
import axios from "axios";

export const getDetailCourse = (id) => async (dispatch) => {
    dispatch(init());

    const baseApiUrl = getConfigValue('frontera.api');

    const response =  await axios(`${baseApiUrl}/detail-course/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    });

    if (response.data) {
        dispatch(success(response.data.data));
    } else {
        dispatch(error('Ошибка!'));
    }
};

export default getDetailCourse;
