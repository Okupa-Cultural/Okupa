import loggedReducer from './isLogged';
import counterReducer from './counter';
import actionBarReducer from './ActionBar';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    showActionBar: actionBarReducer
});

export default rootReducer;