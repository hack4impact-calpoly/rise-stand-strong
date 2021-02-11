import { combineReducers } from 'redux';

import shiftReducer from './shiftReducer';

const rootReducer = combineReducers({
  shifts: shiftReducer,
});

export default rootReducer;
