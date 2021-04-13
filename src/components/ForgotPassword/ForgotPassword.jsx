import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { ReactComponent as LockIcon } from './LockIcon.svg';

export default function ResetPassword() {
   const [code, setCode] = useState('');
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

   const [codeSent, setCodeSent] = useState(false);
   const [confirmed, setConfirmed] = useState(false);
   const [newPassword, setNewPassword] = useState(false);
   const [isConfirming, setIsConfirming] = useState(false);
   const [isSendingCode, setIsSendingCode] = useState(false);
   const [isSendingPassword, setIsSendingPassword] = useState(false);

   const StyledForm = styled(Form)`
      margin: 30px;
      position: relative;
      height: 85vh;
      font-family: nunito, sans-serif;
   `;
   const StyledTitleContainer = styled.div`
      font-family: nunito, sans-serif;
      font-style: normal;
      font-size: 36px;
      line-height: 49px;
      text-align: center;
   `;
   const StyledTitle = styled(Form.Label)`
      font-weight: 500;
      font-size: 36px;
      line-height: 49px;
      text-align: center;
   `;
   const StyledCaption = styled(Form.Label)`
      padding-bottom: 20px;
      size: 16px;
      line-height: 22px;
      text-align: center;
   `;
   const StyledSubtitle = styled(Form.Label)`
      font-weight: 600;
      size: 18px;
      line-height: 25px;
   `;
   const SubmitButton = styled(Button)`
      background-color: #ae4c33;
      padding: 10px 20px;
      border-radius: 6px;
      position: absolute;
      border: none;
      line-height: 27px;
      font-size: 20px;
      right: 0px;
      bottom: 0px;
   `;
   const SubmitButtonFullWidth = styled(Button)`
      background-color: #ae4c33;
      padding: 10px 20px;
      border-radius: 6px;
      bottom: 0;
      position: absolute;
      right: 0;
      border: none;
      line-height: 27px;
      font-size: 20px;
      width: 100%;
   `;
   const StyledIconContainer = styled.div`
      text-align: center;
      padding-top: 75px;
      padding-bottom: 45px;
   `;

   async function handleSendCodeClick(event) {
      event.preventDefault();
      setIsSendingCode(true);
      try {
         await Auth.forgotPassword(username);
         setCodeSent(true);
      } catch (error) {
         alert(error.message);
         setIsSendingCode(false);
      }
   }

   async function handleConfirmClick(event) {
      event.preventDefault();
      setIsConfirming(true);
      try {
         setConfirmed(true);
      } catch (error) {
         window.alert(error);
         setIsConfirming(false);
      }
   }

   async function handlePasswordSetClick(event) {
      event.preventDefault();
      setIsSendingPassword(true);
      try {
         await Auth.forgotPasswordSubmit(username, code, password);
         setNewPassword(true);
      } catch (error) {
         window.alert(error);
         setIsSendingPassword(false);
      }
   }

   function renderRequestCodeForm() {
      return (
         <StyledForm onSubmit={handleSendCodeClick}>
            <StyledTitleContainer>
               <StyledTitle>Forgot password</StyledTitle>
            </StyledTitleContainer>
            <Form.Group bsSize="large" controlId="email">
               <StyledCaption>
                  Please enter the email that your RISE volunteer account is
                  associated with.
               </StyledCaption>
               <StyledSubtitle>Email</StyledSubtitle>
               <Form.Control
                  className="email-box"
                  autoFocus
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
               />
            </Form.Group>
            <SubmitButton type="submit" isLoading={isSendingCode}>
               Submit
            </SubmitButton>
         </StyledForm>
      );
   }

   function renderConfirmationForm() {
      return (
         <StyledForm onSubmit={handleConfirmClick}>
            <div className="title-container">
               <StyledTitle>Forgot password</StyledTitle>
            </div>
            <Form.Group bsSize="large" controlId="code">
               <StyledCaption>
                  An email has been sent to ({username}) to verify you are
                  trying to change your password.
               </StyledCaption>
               <StyledSubtitle>
                  Please enter the verification code:
               </StyledSubtitle>
               <Form.Control
                  autoFocus
                  type="tel"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
               />
            </Form.Group>
            <SubmitButton type="submit" isLoading={isConfirming}>
               Verify
            </SubmitButton>
         </StyledForm>
      );
   }

   function renderNewPasswordForm() {
      return (
         <StyledForm onSubmit={handlePasswordSetClick}>
            <Form.Group bsSize="large" controlId="code">
               <div className="title-container">
                  <StyledTitle>Change password</StyledTitle>
               </div>
               <StyledCaption>
                  Password reset has been verified. Please set a new password.
               </StyledCaption>
            </Form.Group>
            <Form.Group bsSize="large" controlId="password">
               <StyledSubtitle>New Password</StyledSubtitle>
               <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               <Form.Label>*Password must be 6 characters or longer</Form.Label>
            </Form.Group>
            <Form.Group bsSize="large" controlId="confirmPassword">
               <StyledSubtitle>Confirm new password</StyledSubtitle>
               <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
               />
            </Form.Group>
            <SubmitButton type="submit" isLoading={isSendingPassword}>
               Submit
            </SubmitButton>
         </StyledForm>
      );
   }

   function renderSuccessMessage() {
      return (
         <StyledForm>
            <div className="success">
               <StyledTitleContainer>
                  <h1 className="title">Password changed</h1>
               </StyledTitleContainer>
               <StyledIconContainer>
                  <LockIcon />
               </StyledIconContainer>
               <p>Your password has been successfully changed!</p>
               <a href="/">
                  <SubmitButtonFullWidth type="submit" isLoading={isConfirming}>
                     Return to login
                  </SubmitButtonFullWidth>
               </a>
            </div>
         </StyledForm>
      );
   }

   const last = !newPassword ? renderNewPasswordForm() : renderSuccessMessage();
   const then = !confirmed ? renderConfirmationForm() : last;
   const iff = !codeSent ? renderRequestCodeForm() : then;

   return <div className="forgotPasswordPage">{iff}</div>;
}
