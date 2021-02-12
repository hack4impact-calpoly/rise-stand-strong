/* eslint-disable react/jsx-filename-extension */
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import ReactDOM from 'react-dom'; // eslint-disable-line import/no-extraneous-dependencies
import { Provider } from 'react-redux'; // eslint-disable-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
