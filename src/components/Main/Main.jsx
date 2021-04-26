import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import NewAccountPage from '../NewAccountPage/NewAccountPage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import NavBar from '../NavBar/NavBar';
import Dashboard from '../Dashboard/Dashboard';
import Calendar from '../Calendar/Calendar';
import ShiftDetails from '../Shifts/ShiftDetails';
import RequireAuth from './RequireAuth';

export default () => (
   <div className="App">
      <NavBar />
      <Switch>
         <Route exact path="/" render={() => <LoginPage />} />
         <Route
            path="/shift/:startTimestamp"
            component={RequireAuth(ShiftDetails)}
         />
         <Route path="/forgotpassword" render={() => <ForgotPassword />} />
         <Route path="/newaccount" render={() => <NewAccountPage />} />
         <Route path="/editprofile" component={RequireAuth(EditProfilePage)} />
         <Route path="/dashboard" component={RequireAuth(Dashboard)} />
         <Route path="/profilepage" component={RequireAuth(ProfilePage)} />
         <Route path="/calendar" component={RequireAuth(Calendar)} />
      </Switch>
   </div>
);
