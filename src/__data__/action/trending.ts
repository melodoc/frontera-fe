import { getConfigValue } from '@ijl/cli';
import { success, error, init } from  '../slice/trending'

export const getCourses = () => async (dispatch) => {
    dispatch(init());
    const baseApiUrl = getConfigValue('frontera.api');

    const response = await fetch(`${baseApiUrl}/trending/success`, {
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

export default getCourses;
