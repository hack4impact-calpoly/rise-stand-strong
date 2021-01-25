import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default () => (
  <div className="App">
    <Switch>
      <Route exact path="/" render={() => <ForgotPassword />} />
    </Switch>
  </div>
);
