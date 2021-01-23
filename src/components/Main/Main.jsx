import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import NewAccountPage from '../NewAccountPage/NewAccountPage';

export default () => (
  <div className="App">
    <Switch>
      <Route exact path="/" render={() => <LoginPage />} />
      <Route exact path="/newAccount" render={() => <NewAccountPage />} />
    </Switch>
  </div>
);
