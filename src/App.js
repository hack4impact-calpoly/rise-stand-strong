/* eslint-disable react/jsx-filename-extension */
// import Amplify from 'aws-amplify';
// import { withRouter } from 'react-router-dom';
// import awsExports from './aws-exports';
// import Main from './components/Main/Main';

// Amplify.configure(awsExports);

// const App = withRouter(Main);

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, logInOut } from './actions/myIndex';

function App() {
  const counter = useSelector((state) => state.counter);
  const islogged = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>
        <p>Counter</p>
        {counter}
      </h1>
      <button type="button" onClick={() => dispatch(increment(5))}>+</button>
      <button type="button" onClick={() => dispatch(decrement())}>-</button>
      <p>{islogged ? <h3>ALLOWED</h3> : 'NOT ALLOWED'}</p>
      <button type="button" onClick={() => dispatch(logInOut())}>Log in / Log out</button>
    </div>
  );
}

export default App;
