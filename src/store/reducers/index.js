import home from './home';
import session from './user';
import {combineReducers} from 'redux';
//合并reducer
export default combineReducers({
    home,
    session
})