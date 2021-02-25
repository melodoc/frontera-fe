import { getConfigValue } from '@ijl/cli'
import axios from 'axios';

import { init, success, error } from '../slice/login'

export const getLogin = (login, password) => async (dispatch) => {
    dispatch(init());

    const baseApiUrl = getConfigValue('frontera.api');

    const response = await axios(`${baseApiUrl}/login`, {
        method: 'POST',
        data: { login, password },
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    });

    if (response.data && response.data.status.code === 0) {
        dispatch(success(response.data.token));
    } else {
        dispatch(error('Ошибка!'));
    }
};

export default getLogin;
