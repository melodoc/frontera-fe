import { getConfigValue } from '@ijl/cli'
import axios from 'axios';

import { init, success, error } from '../slice/registration'

export const getAccountData = (login, email, password) => async (dispatch) => {
    dispatch(init());

    const baseApiUrl = getConfigValue('frontera.api');

    const response = await axios(`${baseApiUrl}/registration`, {
        method: 'POST',
        data: { login, email, password },
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

export default getAccountData;
