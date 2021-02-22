import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import NewAccountPage from '../NewAccountPage/NewAccountPage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import NavBar from '../NavBar/NavBar';
import Dashboard from '../Dashboard/Dashboard';
import AsyncAwaitPractice from '../AsyncAwaitPractice/promises';

export default () => (
  <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/" render={() => <LoginPage />} />
      <Route path="/forgotpassword" render={() => <ForgotPassword />} />
      <Route path="/newaccount" render={() => <NewAccountPage />} />
      <Route path="/editprofile" render={() => <EditProfilePage />} />
      <Route path="/dashboard" render={() => <Dashboard />} />
      <Route path="/practice" render={() => <AsyncAwaitPractice />} />
    </Switch>
  </div>
);
