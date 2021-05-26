/* eslint-disable no-nested-ternary, react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import styled from 'styled-components';
import _ from 'lodash';
import { ReactComponent as RSSLogo } from '../../RISE_Logo.svg';
import { ACCESS_LEVEL_MAP } from '../../constants';

const StyledLogo = styled(RSSLogo)`
   width: 194;
   height: 120px;
   width: auto;
   position: absolute;
   top: calc((100vh - 120px) / 2);
   left: calc((100vw - 194px) / 2);
`;

const RequireAuth = (Component, reqAccessLevel = 0) => {
   const AuthIntermediary = (props) => {
      const [authenticated, setAuthenticated] = useState(false);
      const [accessLevel, setAccessLevel] = useState(0);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
         Auth.currentAuthenticatedUser()
            .then((user) => {
               const userGroups = _.get(
                  user,
                  [
                     'signInUserSession',
                     'accessToken',
                     'payload',
                     'cognito:groups',
                  ],
                  []
               );
               const userAccessLevel = userGroups.reduce((maxLevel, group) => {
                  const level = _.get(ACCESS_LEVEL_MAP, group, 0);
                  if (level > maxLevel) {
                     return level;
                  }
                  return maxLevel;
               }, 0);

               setAccessLevel(userAccessLevel);
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
            ) : authenticated && accessLevel >= reqAccessLevel ? (
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
