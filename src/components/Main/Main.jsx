import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import NewAccountPage from '../NewAccountPage/NewAccountPage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import NavBar from '../NavBar/NavBar';
import AnnouncementCard from '../AnnouncementCard/AnnouncementCard';

export default () => (
  <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/" render={() => <LoginPage />} />
      <Route path="/forgotpassword" render={() => <ForgotPassword />} />
      <Route path="/newaccount" render={() => <NewAccountPage />} />
      <Route path="/editprofile" render={() => <EditProfilePage />} />
      <Route path="/ac" render={() => <AnnouncementCard />} />
    </Switch>
  </div>
);
