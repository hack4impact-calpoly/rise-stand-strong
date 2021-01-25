import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ForgotPassword from './ForgotPassword/ForgotPassword';

export default () => (
  <div className="App">
    <Switch>
      <Route exact path="/" render={() => <ForgotPassword />} />
    </Switch>
  </div>
);
