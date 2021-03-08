import counterReducer from "./counter";
import loggedReducer from "./islogged";
import { combinedReducers } from "redux";

const allReducers = combinedReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
