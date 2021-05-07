import React from 'react';
import './NavBar.css';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import { ReactComponent as RiseLogo } from '../../RISE_Logo.svg';

const PositionedLogo = styled(RiseLogo)`
   width: 60px;
   position: absolute;
   left: calc(100vw / 2 - 30px);
   top: 20px;
`;

const StyledButton = styled.button`
   background: #00000000;
   border: none;
   padding: 14px 16px;
`;

const signOut = async () => {
   console.log('Signing out');
   try {
      await Auth.signOut();
   } catch (err) {
      alert('Error signing out');
   }
};

export default () => {
   const history = useHistory();

   return (
      <div className="navbar">
         <StyledButton
            onClick={async () => {
               await signOut();
               history.push('/');
            }}
         >
            Logout
         </StyledButton>
         <PositionedLogo />
         <a href="/">Edit Profile</a>
      </div>
   );
};
