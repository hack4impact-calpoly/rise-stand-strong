/* eslint-disable */
import React from 'react';
import './NavBar.css';
import styled from 'styled-components';
import { Auth } from 'aws-amplify';
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as RiseLogo } from './RISE_Logo.svg';

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

const StyledAquaLabel = styled.label`
   font-size: 18px;
   font-family: 'Nunito Sans', sans-serif;
   font-weight: 700;
   color: #024e6b;
`;

const StyledBlackLabel = styled.label`
   font-size: 18px;
   font-family: 'Nunito Sans', sans-serif;
   font-weight: 700;
   color: #000000;
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
   const location = useLocation();
   const backList = ['/REGISTER', '/FORGOTPASSWORD', '/NEWACCOUNT']; // add /shiftdetails?
   return (
      <div className="navbar">
         {console.log('backarrow')}
         {location.pathname === '/' ? null : backList.includes(
              location.pathname.toUpperCase()
           ) ? (
            <StyledAquaLabel>
               <a>
                  <FontAwesomeIcon icon={faArrowLeft} /> Back
               </a>
            </StyledAquaLabel>
         ) : (
            <StyledBlackLabel>
               <a href="/">Sign out</a>
            </StyledBlackLabel>
         )}
         <StyledButton
            onClick={async () => {
               await signOut();
               history.push('/');
            }}
         />
         <PositionedLogo />
      </div>
   );
};
