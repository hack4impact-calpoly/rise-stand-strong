import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../NavBar/NavBar';

export default () => (
  <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/" render={() => <LoginPage />} />
    </Switch>
  </div>
);
