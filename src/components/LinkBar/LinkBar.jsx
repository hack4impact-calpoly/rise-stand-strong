import React from 'react';
import './LinkBar.css';
import { NavLink } from 'react-router-dom';
import HomeIcon from './Home_Icon.png';
import CalenderIcon from './Calender_Icon.png';
import DirectoryIcon from './Directory_Icon.png';
import ProfileIcon from './Profile_Icon.png';

export default () => (
   <div className="linkbar">
      <ul className="container">
         <NavLink to="/dashboard" activeClassName="active" className="item">
            <div className="img-container">
               <img src={HomeIcon} alt="dashboard-icon" />
            </div>
            <div className="link">Dashboard</div>
         </NavLink>
         <NavLink to="/calendar" activeClassName="active" className="item">
            <div className="img-container">
               <img src={CalenderIcon} alt="calender-icon" />
            </div>
            <div className="link">Calender</div>
         </NavLink>
         <NavLink to="/directory" activeClassName="active" className="item">
            <div id="directory" className="img-container">
               <img src={DirectoryIcon} alt="directory-icon" />
            </div>
            <div className="link">Directory</div>
         </NavLink>
         <NavLink to="/profilepage" activeClassName="active" className="item">
            <div className="img-container">
               <img src={ProfileIcon} alt="profile-icon" />
            </div>
            <div className="link">Profile</div>
         </NavLink>
      </ul>
   </div>
);
