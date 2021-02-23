import { getConfigValue } from '@ijl/cli';

import { init, success, error } from '../slice/detail-course'

export const getDetailCourse = (id) => async (dispatch) => {
    dispatch(init());

    const baseApiUrl = getConfigValue('frontera.api');

    const response = await fetch(`${baseApiUrl}/detail-course/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    });

    if (response.ok) {
        const result = await response.json();
        dispatch(success(result.data));
    } else {
        try {
            const result = await response.json();
            dispatch(error(result.errors));
        } catch (error) {
            console.error(error);
        }
    }
};

export default getDetailCourse;
