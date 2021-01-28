import { SUGGESTIONS_SUCCESS, SUGGESTIONS_INIT, SUGGESTIONS_ERROR } from '../constants/action-types';
import { getConfigValue } from '@ijl/cli';

export default () => (dispatch) => {
    dispatch({ type: SUGGESTIONS_INIT });
    dispatch(getSuggestions());
}

export const getSuggestions = () => async (dispatch) => {
    const baseApiUrl = getConfigValue('frontera.api');

    const response = await fetch(`${baseApiUrl}/suggestions/success`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    });

    if (response.ok) {
        const result = await response.json();
        dispatch({ type: SUGGESTIONS_SUCCESS, themes: result.themes });
    } else {
        try {
            const result = await response.json();
            dispatch({ type: SUGGESTIONS_ERROR, errors: result.errors });
        } catch (error) {
            console.error(error);
        }
    }
};
