import React from 'react';
import styled from 'styled-components';
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
import Directory from '../Directory/Directory';
import NewAnnouncement from '../AnnouncementCard/NewAnnouncement';

const StyledApp = styled.div`
   font-family: 'Nunito Sans', sans-serif;
`;

export default () => (
   <StyledApp>
      <NavBar />
      <Switch>
         <Route exact path="/" render={() => <LoginPage />} />
         <Route
            path="/shift/:startTimestamp"
            component={RequireAuth(ShiftDetails)}
         />
         <Route path="/forgotpassword" render={() => <ForgotPassword />} />
         <Route path="/register" render={() => <NewAccountPage />} />
         <Route path="/editprofile" component={RequireAuth(EditProfilePage)} />
         <Route path="/dashboard" component={RequireAuth(Dashboard)} />
         <Route path="/profilepage" component={RequireAuth(ProfilePage)} />
         <Route path="/calendar" component={RequireAuth(Calendar)} />
         <Route path="/directory" render={() => <Directory />} />
         <Route path="/newannouncement" render={() => <NewAnnouncement />} />
      </Switch>
   </StyledApp>
);
