import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Form, Button, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import LockIcon from './LockIcon.svg';

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
   const [passwordShown, setPasswordShown] = useState(false);

   const StyledFormContainer = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media only screen and (min-width: 768px) {
         justify-content: center;
         align-items: center;
      }
   `;
   const StyledTitleContainer = styled.div`
      font-family: nunito, sans-serif;
      font-style: normal;
      text-align: center;
   `;
   const StyledTitle = styled(Form.Label)`
      font-family: nunito, sans-serif;
      font-style: normal;
      font-size: 36px;
      font-weight: 500;
      text-align: center;
      margin-bottom: 20px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      @media only screen and (min-width: 767px) {
         margin-left: auto;
         margin-right: auto;
      }
   `;
   const StyledCaption = styled(Form.Label)`
      font-family: nunito, sans-serif;
      margin-bottom: 35px;
      font-size: 16px;
      margin-left: 32px;
      margin-right: 32px;
      font-weight: 400;
      @media only screen and (min-width: 767px) {
         margin-left: 0;
      }
   `;
   const StyledSubtitle = styled(Form.Label)`
      font-family: nunito, sans-serif;
      margin-left: 33px;
      font-size: 18px;
      font-weight: 600;
      size: 18px;
      line-height: 25px;
      margin-top: 20px;
      @media only screen and (min-width: 769px) {
         margin-left: 0;
      }
   `;
   const StyledInput = styled(Form.Control)`
      margin-left: 33px;
      margin-top: -7px;
      margin-bottom: 3px;
      padding: 2px 5px;
      width: calc(100vw - 65px);
      @media only screen and (min-width: 769px) {
         width: calc(40vw - 65px);
         margin-left: auto;
         margin-right: auto;
      }
   `;
   const StyledLabel = styled(Form.Label)`
      font-family: nunito, sans-serif;
      margin-left: 33px;
      margin-bottom: 25px;
      font-size: 13px;
      @media only screen and (min-width: 769px) {
         width: 100%;
      }
   `;
   const SubmitButton = styled(Button)`
      font-family: nunito, sans-serif;
      background-color: #ae4c33;
      padding: 8px 20px;
      border-radius: 6px;
      border: none;
      line-height: 27px;
      font-size: 20px;
      display: flex;
      justify-content: flex-end;
      margin-left: auto;
      margin-top: 50px;
      margin-right: 35px;
      @media only screen and (min-width: 769px) {
         margin-right: 0;
      }
   `;
   const SubmitButtonContainer = styled.div`
      text-align: center;
   `;
   const SubmitButtonFullWidth = styled(Button)`
      font-family: nunito, sans-serif;
      background-color: #ae4c33;
      padding: 8px 20px;
      border-radius: 6px;
      border: none;
      line-height: 27px;
      font-size: 20px;
      display: flex;
      justify-content: flex-end;
      margin-left: auto;
      margin-top: 50px;
      margin-right: auto;
      position: absolute;
      width: 80%;
      right: 0;
      left: 0;
      text-align: center;
      display: inline-block;
      @media only screen and (min-width: 769px) {
         width: 457px;
      }
   `;
   const StyledIconContainer = styled.div`
      text-align: center;
      padding-top: 75px;
      padding-bottom: 45px;
   `;
   const StyledHideButton = styled(Button)`
      background-color: transparent;
      color: #024e6b;
      z-index: 1;
      border: none;
      font-size: 16px;
      font-family: nunito, sans-serif;
      font-weight: 600;
   `;
   const StyledButtonAndEye = styled.div`
      padding: 20px;
      display: flex;
      justify-content: flex-end;
      margin-left: auto;
      margin-top: -125px;
      margin-right: 20px;
   `;
   const StyledButtonAndEye2 = styled.div`
      padding: 20px;
      display: flex;
      justify-content: flex-end;
      margin-left: auto;
      margin-top: -75px;
      margin-right: 20px;
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
         <StyledFormContainer>
            <Form onSubmit={handleSendCodeClick}>
               <StyledTitleContainer>
                  <StyledTitle>Forgot password</StyledTitle>
                  <Form.Row>
                     <StyledCaption>
                        Please enter the email that your RISE volunteer account
                        is associated with.
                     </StyledCaption>
                  </Form.Row>
               </StyledTitleContainer>
               <Form.Row>
                  <Form.Group bsSize="large" controlId="email">
                     <StyledSubtitle>Email</StyledSubtitle>
                     <StyledInput
                        className="email-box"
                        autoFocus
                        type="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                     />
                  </Form.Group>
               </Form.Row>
               <SubmitButton type="submit" isLoading={isSendingCode}>
                  Submit
               </SubmitButton>
            </Form>
         </StyledFormContainer>
      );
   }

   function renderConfirmationForm() {
      return (
         <StyledFormContainer>
            <Form onSubmit={handleConfirmClick}>
               <StyledTitle>Forgot password</StyledTitle>
               <Form.Row>
                  <StyledCaption>
                     An email has been sent to ({username}) to verify you are
                     trying to change your password.
                  </StyledCaption>
               </Form.Row>
               <Form.Row>
                  <Form.Group bsSize="large" controlId="code">
                     <StyledSubtitle>
                        Please enter the verification code:
                     </StyledSubtitle>
                     <StyledInput
                        autoFocus
                        type="tel"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                     />
                  </Form.Group>
               </Form.Row>
               <SubmitButton type="submit" isLoading={isConfirming}>
                  Verify
               </SubmitButton>
            </Form>
         </StyledFormContainer>
      );
   }

   function renderNewPasswordForm() {
      const toggleShowPassword = () => {
         if (passwordShown) {
            setPasswordShown(false);
         } else {
            setPasswordShown(true);
         }
      };
      return (
         <StyledFormContainer>
            <Form onSubmit={handlePasswordSetClick}>
               <StyledTitle>Change password</StyledTitle>
               <Form.Row>
                  <StyledCaption>
                     Password reset has been verified. Please set a new
                     password.
                  </StyledCaption>
               </Form.Row>

               <Form.Row>
                  <Form.Group as={Col} md="5" controlId="password">
                     <StyledSubtitle>New Password</StyledSubtitle>
                     <StyledInput
                        type={passwordShown ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                     <StyledLabel>
                        *Password must be 6 characters or longer
                     </StyledLabel>
                  </Form.Group>
               </Form.Row>
               <StyledButtonAndEye>
                  <StyledHideButton onClick={toggleShowPassword}>
                     {passwordShown ? 'Hide ' : 'Show '}
                     {passwordShown ? (
                        <FontAwesomeIcon icon={faEye} />
                     ) : (
                        <FontAwesomeIcon icon={faEyeSlash} />
                     )}
                  </StyledHideButton>
               </StyledButtonAndEye>
               <Form.Row>
                  <Form.Group as={Col} md="5" controlId="confirmPassword">
                     <StyledSubtitle>Confirm new password</StyledSubtitle>
                     <StyledInput
                        type={passwordShown ? 'text' : 'password'}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                     />
                  </Form.Group>
               </Form.Row>
               <StyledButtonAndEye2>
                  <StyledHideButton onClick={toggleShowPassword}>
                     {passwordShown ? 'Hide ' : 'Show '}
                     {passwordShown ? (
                        <FontAwesomeIcon icon={faEye} />
                     ) : (
                        <FontAwesomeIcon icon={faEyeSlash} />
                     )}
                  </StyledHideButton>
               </StyledButtonAndEye2>
               <SubmitButton type="submit" isLoading={isSendingPassword}>
                  Submit
               </SubmitButton>
            </Form>
         </StyledFormContainer>
      );
   }

   function renderSuccessMessage() {
      return (
         <StyledFormContainer>
            <Form>
               <StyledTitle>Password changed</StyledTitle>
               <StyledIconContainer>
                  <img src={LockIcon} alt="Lock Icon" />
               </StyledIconContainer>
               <StyledCaption>
                  Your password has been successfully changed!
               </StyledCaption>
               <a href="/">
                  <SubmitButtonContainer>
                     <SubmitButtonFullWidth
                        type="submit"
                        isLoading={isConfirming}
                     >
                        Return to login
                     </SubmitButtonFullWidth>
                  </SubmitButtonContainer>
               </a>
            </Form>
         </StyledFormContainer>
      );
   }

   const last = !newPassword ? renderNewPasswordForm() : renderSuccessMessage();
   const then = !confirmed ? renderConfirmationForm() : last;
   const iff = !codeSent ? renderRequestCodeForm() : then;

   return <div className="forgotPasswordPage">{iff}</div>;
}
