import { combineReducers } from 'redux';
import counterReducer from './counter';
import loggedReducer from './logged';

const allReducer = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
});

export default allReducer;
