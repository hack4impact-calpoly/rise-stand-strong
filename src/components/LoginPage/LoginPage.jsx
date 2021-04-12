import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Logo from './Logo.svg';

const StyledAll = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   allign-items: center;
`;

const StyledTitle = styled.h2`
   display: flex;
   justify-content: center;
   color: #024e6b;
   font-size: 48px;
`;
const StyledImage = styled.img`
   display: flex;
   justify-content: space-evenly;
`;
const StyledText = styled.div`
   margin-left: 20px;
   font-size: 20px;
   color: #024e6b;
`;
const StyledInput = styled(Form.Control)`
   display: flex;
   flex-direction: center;
   width: 100%;
   color: #024e6b;
`;
const StyledFeedback = styled(Form.Control.Feedback)`
   margin-left: 20px;
   font-size: 10px;
   color: #024e6b;
`;
const StyledButton = styled(Button)`
   display: flex;
   justify-content: center;
   background-color: #024e6b;
`;
const StyledLinkButton = styled(Button)`
   display: flex;
   margin-left: auto;
   color: #024e6b;
`;
const StyledLinkButtonAcc = styled(Button)`
   display: flex;
   margin-left: auto;
   color: #024e6b;
`;

// margin-left: 10px;
// font-size: 10px;

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
            <StyledAll>
               <StyledTitle>
                  <StyledImage src={Logo} alt="Logo" />
               </StyledTitle>
               <StyledTitle>Volunteer</StyledTitle>
               <StyledTitle>System</StyledTitle>
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
               <StyledLinkButton href="./ForgotPassword" variant="link">
                  Forgot your password?
               </StyledLinkButton>
               <StyledButton type="submit" block>
                  Login
               </StyledButton>
               <StyledLinkButtonAcc variant="link">
                  First Time? &nbsp;
                  <b>Create new account</b>
               </StyledLinkButtonAcc>
            </StyledAll>
         </Form>
      </div>
   );
};
