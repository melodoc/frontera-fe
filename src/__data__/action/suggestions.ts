import { getConfigValue } from '@ijl/cli'
import axios from 'axios';

import { init, success, error } from '../slice/suggestions'

export const getSuggestions = () => async (dispatch) => {
    dispatch(init());

    const baseApiUrl = getConfigValue('frontera.api');

    const response = await axios(`${baseApiUrl}/suggestions/success`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    });

    if (response.data) {
        dispatch(success(response.data.courseList));
    } else {
        dispatch(error('Ошибка!'));
    }
};

export default getSuggestions;
