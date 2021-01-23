import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import CalendarExample from '../Calendar/Example';

export default () => (
  <div className="App">
    <Switch>
      <Route exact path="/" render={() => <LoginPage />} />
      <Route exact path="/cal" render={() => <CalendarExample />} />
    </Switch>
  </div>
);
