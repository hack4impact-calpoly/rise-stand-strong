import { combineReducers } from 'redux';

import shiftReducer from './shiftReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
   shifts: shiftReducer,
   users: userReducer,
});

export default rootReducer;
