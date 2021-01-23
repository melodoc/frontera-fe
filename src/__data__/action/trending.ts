import { getConfigValue } from '@ijl/cli';
import { TRENDING_ERROR, TRENDING_INIT, TRENDING_SUCCESS } from '../constants/action-types';


const trendingInitActionCreator = () => ({ type: TRENDING_INIT });
const trendingSuccessActionCreator = (value) => ({ type: TRENDING_SUCCESS, themes: value });
const trendingErrorActionCreator = (value) => ({ type: TRENDING_ERROR, errors: value });

export default () => (dispatch) => {
    dispatch(trendingInitActionCreator());
    dispatch(getCourses());
}

export const getCourses = () => async (dispatch) => {
    const baseApiUrl = getConfigValue('frontera.api');

    const response = await fetch(`${baseApiUrl}/trending/success`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    });


    if (response.ok) {
        const result = await response.json();
        dispatch(trendingSuccessActionCreator(result.themes));
    } else {
        try {
            const result = await response.json();
            dispatch(trendingErrorActionCreator(result.errors));
        } catch (error) {
            console.error(error);
        }
    }
};
