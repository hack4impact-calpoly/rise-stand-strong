import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';

export default () => (
  <div className="App">
    <Switch>
      <Route exact path="/" render={() => <LoginPage />} />
    </Switch>
  </div>
);
