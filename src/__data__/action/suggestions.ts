import { SUGGESTIONS_SUCCESS, SUGGESTIONS_INIT, SUGGESTIONS_ERROR } from '../constants/action-types';
import { getConfigValue } from '@ijl/cli';


const suggestionInitActionCreator = () => ({type: SUGGESTIONS_INIT});
const suggestionSuccessActionCreator = (value) =>({type: SUGGESTIONS_SUCCESS, themes: value});
const suggestionErrorActionCreator = (value) => ({type: SUGGESTIONS_ERROR, errors: value});

export default () => (dispatch) => {
    dispatch(suggestionInitActionCreator());
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
        dispatch(suggestionSuccessActionCreator(result.themes));
    } else {
        try {
            const result = await response.json();
            dispatch(suggestionErrorActionCreator(result.errors));
        } catch (error) {
            console.error(error);
        }
    }
};
