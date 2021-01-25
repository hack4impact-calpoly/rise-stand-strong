import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';

export default () => (
  <div className="App">
    <Switch>
      <Route exact path="/" render={() => <LoginPage />} />
    </Switch>
  </div>
);
