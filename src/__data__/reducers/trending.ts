import { TRENDING_ERROR, TRENDING_INIT, TRENDING_SUCCESS } from "../constants/action-types";


const initialState = {
    themes: null,
    loading: false,
    errors: null
};

export default function (state = initialState, action) {
    const type = action.type;
    switch (type) {
        case TRENDING_SUCCESS:
            return ({
                ...state,
                themes: action.themes,
                loading: false,
            });
        case TRENDING_INIT:
            return ({
                ...state,
                loading: true
            });
        case TRENDING_ERROR:
            return ({
                ...state,
                errors: action.errors,
                loading: false,
            });
        default:
            return state;
    }

}