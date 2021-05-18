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
   font-size: 18px;
   font-family: 'Nunito Sans', sans-serif;
   font-weight: 700;
   color: #000000;
`;

const StyledBackButton = styled.button`
   background: #00000000;
   border: none;
   padding: 14px 16px;
   font-size: 18px;
   font-family: 'Nunito Sans', sans-serif;
   font-weight: 700;
   color: #024e6b;
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
   const backList = ['/REGISTER', '/FORGOTPASSWORD', '/NEWACCOUNT'];
   return (
      <div className="navbar">
         {location.pathname === '/' ? null : backList.includes(
              location.pathname.toUpperCase()
           ) ? (
            <StyledBackButton onClick={() => history.goBack()}>
               <FontAwesomeIcon icon={faArrowLeft} /> Back
            </StyledBackButton>
         ) : (
            <StyledButton
               onClick={async () => {
                  await signOut();
                  history.push('/');
               }}
            >
               Sign out
            </StyledButton>
         )}
         <PositionedLogo />
      </div>
   );
};
