import { getConfigValue } from '@ijl/cli';
import { init, success, error } from '../slice/suggestions'

export const getSuggestions = () => async (dispatch) => {
    dispatch(init());

    const baseApiUrl = getConfigValue('frontera.api');

    const response = await fetch(`${baseApiUrl}/suggestions/success`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    });


    if (response.ok) {
        const result = await response.json();
        dispatch(success(result.themes));
    } else {
        try {
            const result = await response.json();
            dispatch(error(result.errors));
        } catch (error) {
            console.error(error);
        }
    }
};

export default getSuggestions;
