import { combineReducers } from 'redux';
import { reducer as suggestions } from '../slice/suggestions';
import { reducer as trending } from '../slice/trending';
import { reducer as themes } from '../slice/themes';

export default combineReducers({
    suggestions,
    trending,
    themes
});
