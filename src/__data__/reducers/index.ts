import { combineReducers } from 'redux';
import { reducer as suggestions } from '../slice/suggestions';
import { reducer as trending } from '../slice/trending';

export default combineReducers({
    suggestions,
    trending
});
