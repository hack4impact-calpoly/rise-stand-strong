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
<<<<<<< HEAD
import RequireAuth from './RequireAuth';
import Directory from '../Directory/Directory';
=======
import SuccessfulChangePassword from '../ChangePassword/SuccessfulChangePassword';
import ChangePassword from '../ChangePassword/ChangePassword';
>>>>>>> 483c9cb... Added routing and functionality

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
<<<<<<< HEAD
         <Route path="/editprofile" component={RequireAuth(EditProfilePage)} />
         <Route path="/dashboard" component={RequireAuth(Dashboard)} />
         <Route path="/profilepage" component={RequireAuth(ProfilePage)} />
         <Route path="/calendar" component={RequireAuth(Calendar)} />
         <Route path="/directory" render={() => <Directory />} />
=======
         <Route path="/editprofile" render={() => <EditProfilePage />} />
         <Route path="/dashboard" render={() => <Dashboard />} />
         <Route path="/profilepage" render={() => <ProfilePage />} />
         <Route path="/calendar" render={() => <Calendar />} />
         <Route
            path="/successfulchange"
            render={() => <SuccessfulChangePassword />}
         />
         <Route path="/changepassword" render={() => <ChangePassword />} />
>>>>>>> 483c9cb... Added routing and functionality
      </Switch>
   </div>
);
