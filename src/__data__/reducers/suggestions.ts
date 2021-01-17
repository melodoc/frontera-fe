import {SUGGESTIONS_ERROR, SUGGESTIONS_INIT, SUGGESTIONS_SUCCESS} from '../constants/action-types'

const initialState = {
    themes: null,
    loading: false,
    errors: null
};

export default function (state = initialState, action) {
    const type = action.type;
    switch (type){
        case SUGGESTIONS_SUCCESS:
            return ({
                ...state,
                themes: action.themes,
                loading: false,
            });
        case SUGGESTIONS_INIT:
            return({
                ...state,
                loading: true
            });
        case SUGGESTIONS_ERROR:
            return({
                ...state,
                errors: action.errors,
                loading: false,
            });
        default:
            return state;
    }
}