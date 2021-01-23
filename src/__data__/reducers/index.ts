import { combineReducers } from 'redux';
import suggestions from './suggestions';
import trending from './trending'

export default combineReducers({
    suggestions,
    trending
});
