import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import Logo from './Logo.svg';

const StyledContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   @media only screen and (min-width: 768px) {
      justify-content: center;
      align-items: center;
   }
`;

const StyledTitle = styled.h2`
   display: block;
   margin-left: auto;
   margin-right: auto;
   color: #024e6b;
   font-size: 48px;
   font-weight: 700;
   text-align: center;
   @media only screen and (min-width: 767px) {
      margin-left: auto;
      margin-right: auto;
      padding: 40px;
   }
`;
const StyledImage = styled.img`
   display: block;
   margin-left: auto;
   margin-right: auto;
   @media only screen and (min-width: 768px) {
      max-width: 200px;
      height: auto;
   }
`;
const StyledText = styled.div`
   margin-left: 33px;
   font-size: 18px;
   font-weight: 700;
   font-family: 'Nunito Sans', sans-serif;
   margin-bottom: 5px;
   @media only screen and (min-width: 769px) {
      margin-left: 0px;
   }
`;
const StyledInput = styled(Form.Control)`
   margin-left: 33px;
   margin-top: -7px;
   margin-bottom: 3px;
   padding: 2px 5px;
   width: calc(100vw - 65px);
   color: #024e6b;
   border-radius: 5px;
   @media only screen and (min-width: 769px) {
      width: calc(40vw - 65px);
      height: 53px;
      border-radius: 5px;
      margin-left: auto;
      margin-right: auto;
   }
`;
const StyledFeedback = styled(Form.Control.Feedback)`
   margin-left: 20px;
   font-size: 10px;
   color: #024e6b;
`;
const StyledButton = styled(Button)`
   margin-top: 50px;
   margin-bottom: 3px;
   padding: 2px 5px;
   width: calc(100vw - 65px);
   background-color: #024e6b;
   font-size: 18px;
   font-weight: 700;
   border-radius: 5px;
   margin-left: auto;
   margin-right: auto;
   @media only screen and (min-width: 769px) {
      width: calc(40vw - 65px);
      height: 53px;
      border-radius: 5px;
   }
`;
const StyledLinkButton = styled(Button)`
   padding: 10px;
   display: flex;
   margin-left: auto;
   color: #024e6b;
   font-size: 16px;
   font-weight: 700;
   font-family: 'Nunito Sans', sans-serif;
   margin-top: -30px;
   margin-right: 20px;
   @media only screen and (min-width: 769px) {
      margin-left: calc(29vw - 65px);
      margin-top: -20px;
      height: 53px;
      border-radius: 5px;
   }
`;
const StyledLinkButtonAcc = styled(Button)`
   display: flex;
   justify-content: center;
   color: #024e6b;
`;
const StyledHideButton = styled(Button)`
   background-color: transparent;
   color: #024e6b;
   border: none;
   font-size: 16px;
   font-family: 'Nunito Sans', sans-serif;
   font-weight: 600;
`;
const StyledButtonAndEye = styled.div`
   z-index: 1;
   padding: 20px;
   margin-left: auto;
   margin-top: -75px;
   margin-right: 10px;
   @media only screen and (min-width: 769px) {
      margin-left: calc(33vw - 65px);
      margin-top: -85px;
   }
`;

export default () => {
   const [validated, setValidated] = useState(false);
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [validLogin, setValidLogin] = useState(true);
   const history = useHistory();

   async function signIn() {
      try {
         await Auth.signIn(username, password);
         setValidLogin(true);
         history.push('/dashboard');
      } catch (error) {
         setValidLogin(false);
         console.log('error signing in', error);
      }
   }

   const handleSubmit = (event) => {
      const form = event.currentTarget;
      signIn();
      event.preventDefault();
      if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
      }
      setValidated(true);
   };
   const handleUsername = (event) => {
      setUsername(event.target.value);
   };
   const handlePassword = (event) => {
      setPassword(event.target.value);
   };

   return (
      <div>
         {validLogin === false && (
            <div className="alert alert-danger" role="alert">
               Invalid Login, Please Try Again
            </div>
         )}
         <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <StyledContainer>
               <StyledImage src={Logo} alt="Logo" />
               <StyledTitle>Volunteer &nbsp;System</StyledTitle>
               <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                     <StyledText>Email</StyledText>
                     <StyledInput
                        required
                        type="username"
                        placeholder=""
                        defaultValue={username}
                        onChange={handleUsername}
                     />
                     <StyledFeedback>looks good!</StyledFeedback>
                     <StyledFeedback type="invalid">
                        {' '}
                        please input username.{' '}
                     </StyledFeedback>
                  </Form.Group>
               </Form.Row>
               <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                     <StyledText>Password</StyledText>
                     <StyledInput
                        type="password"
                        required
                        placeholder=""
                        defaultValue={password}
                        onChange={handlePassword}
                     />
                     <StyledFeedback>looks good!</StyledFeedback>
                     <StyledFeedback type="invalid">
                        {' '}
                        please input password{' '}
                     </StyledFeedback>
                  </Form.Group>
               </Form.Row>
               <StyledButtonAndEye>
                  <StyledHideButton>
                     <b>Show</b> <FontAwesomeIcon icon={faEyeSlash} />
                  </StyledHideButton>
               </StyledButtonAndEye>
               <StyledLinkButton href="/forgotPassword" variant="link">
                  Forgot your password?
               </StyledLinkButton>
               <StyledButton type="submit" block>
                  Log In
               </StyledButton>
               <StyledLinkButtonAcc href="/newaccount" variant="link">
                  First Time? &nbsp;
                  <b>Create new account</b>
               </StyledLinkButtonAcc>
            </StyledContainer>
         </Form>
      </div>
   );
};
