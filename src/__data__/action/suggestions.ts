import {SUGGESTIONS_SUCCESS, SUGGESTIONS_INIT, SUGGESTIONS_ERROR} from '../constants/action-types'

const suggestionInitActionCreator = () => ({type: SUGGESTIONS_INIT})

export default () => (dispatch) => {
    dispatch(suggestionInitActionCreator());
}