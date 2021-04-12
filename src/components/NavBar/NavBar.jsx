import React from 'react';
import './NavBar.css';
import styled from 'styled-components';
import { ReactComponent as RiseLogo } from './RISE_Logo.svg';

const PositionedLogo = styled(RiseLogo)`
   width: 60px;
   position: absolute;
   left: calc(100vw / 2 - 30px);
   top: 20px;
`;

export default () => (
   <div className="navbar">
      <a href="/">Logout</a>
      <PositionedLogo />
      <a href="/">Edit Profile</a>
   </div>
);
