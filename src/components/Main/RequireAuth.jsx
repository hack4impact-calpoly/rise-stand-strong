/* eslint-disable no-nested-ternary, react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import styled from 'styled-components';
import { ReactComponent as RSSLogo } from '../../RISE_Logo.svg';

const StyledLogo = styled(RSSLogo)`
   width: 194;
   height: 120px;
   width: auto;
   position: absolute;
   top: calc((100vh - 120px) / 2);
   left: calc((100vw - 194px) / 2);
`;

const RequireAuth = (Component) => {
   const AuthIntermediary = (props) => {
      const [authenticated, setAuthenticated] = useState(false);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
         Auth.currentAuthenticatedUser()
            .then(() => {
               setAuthenticated(true);
               setLoading(false);
            })
            .catch(() => {
               setLoading(false);
            });
      });

      return (
         <div>
            {loading ? (
               <StyledLogo />
            ) : authenticated ? (
               <Component {...props} />
            ) : (
               <Redirect to="/" />
            )}
         </div>
      );
   };

   return AuthIntermediary;
};

export default RequireAuth;
