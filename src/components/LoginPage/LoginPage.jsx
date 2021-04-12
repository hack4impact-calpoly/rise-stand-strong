import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Logo from './Logo.svg';

const StyledTitle = styled.h2`
   display: flex;
   justify-content: center;
`;
const StyledImage = styled.img`
   margin-left: 150px;
`;
const StyledText = styled.div`
   margin-left: 20px;
   font-size: 20px;
`;
const StyledInput = styled(Form.Control)`
   display: flex;
   flex-direction: center;
`;
const StyledFeedback = styled(Form.Control.Feedback)`
   margin-left: 20px;
   font-size: 10px;
`;
const StyledButton = styled(Button)`
   display: flex;
   justify-content: center;
`;
const StyledLinkButton = styled(Button)`
   display: flex;
   flex-direction: right;
`;

const StyledLinkButtonAcc = styled(Button)`
   display: flex;
   flex-direction: center;
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
            <StyledImage src={Logo} alt="Logo" />
            <StyledTitle>Volunteer System</StyledTitle>
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
            <Form.Row>
               <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <StyledLinkButton href="./ForgotPassword" variant="link">
                     Forgot Password?
                  </StyledLinkButton>
               </Form.Group>
            </Form.Row>
            <StyledButton type="submit" block>
               Login
            </StyledButton>
            <StyledLinkButtonAcc variant="link">
               First Time? Create New Account
            </StyledLinkButtonAcc>
         </Form>
      </div>
   );
};
