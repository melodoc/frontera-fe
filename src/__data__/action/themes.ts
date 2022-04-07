import { themesErr, themesRes } from 'api/themes/themes';
import { success, error, init } from  '../slice/themes'

export const getThemes = () => async (dispatch) => {
    dispatch(init());
    const baseApiUrl = 'https://httpbin.org/get';

    const response = await fetch(`${baseApiUrl}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        }
    });

    if (response.ok) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const result = await response.json();
        dispatch(success(themesRes.themes));
    } else {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const result = await response.json();
            dispatch(error(themesErr.errors));
        } catch (error) {
            console.error(error);
        }
    }
};

export default getThemes;
