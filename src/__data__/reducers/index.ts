import { combineReducers } from 'redux';
import { reducer as suggestions } from '../slice/suggestions';
import { reducer as trending } from '../slice/trending';
import { reducer as themes } from '../slice/themes';
import { reducer as detailCourse } from '../slice/detail-course';

export default combineReducers({
    suggestions,
    trending,
    themes,
    detailCourse
});
