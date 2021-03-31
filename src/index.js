/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import allReducer from './reducers/myIndex';

import App from './App';
// import store from './store/store';

const Store = createStore(allReducer);

// // ALL BELOW IS REDUX FROM SCRATCH
// // DOUBLE // MEANS COMMENT

// // Store -> is a globalized state used thoughout

// // Action -> Increment -> Does something

// const increment = () => (
//   {
//     type: 'Increment',
//   }
// );

// const decrement = () => (
//   {
//     type: 'Decrement',
//   }
// );

// // Reducer -> modifies the store based on the action
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'Increment':
//       return state + 1;
//     case 'Decrement':
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const Store = createStore(counter);

// // Display on console
// Store.subscribe(() => console.log(Store.getState()));

// // dispatch -> executes an action
// Store.dispatch(increment());
// Store.dispatch(decrement());
// Store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
