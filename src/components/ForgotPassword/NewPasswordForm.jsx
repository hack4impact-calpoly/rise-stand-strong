import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const StyledFormContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   @media only screen and (min-width: 768px) {
      justify-content: center;
      align-items: center;
   }
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
      min-width: 500px;
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
const StyledLabel = styled(Form.Label)`
   font-family: nunito, sans-serif;
   margin-left: 33px;
   margin-bottom: 25px;
   font-size: 13px;
   width: 500px;
   @media only screen and (min-width: 769px) {
      width: width: calc(40vw - 65px);;
      margin-left: 0;
   }
`;
const StyledButtonAndEye = styled.div`
   padding: 20px;
   display: flex;
   justify-content: flex-end;
   margin-left: auto;
   margin-top: -125px;
   margin-right: -20px;
   @media only screen and (max-width: 768px) {
      margin-right: 13px;
`;
const StyledButtonAndEye2 = styled.div`
   padding: 20px;
   display: flex;
   justify-content: flex-end;
   margin-left: auto;
   margin-top: -75px;
   margin-right: -20px;
   @media only screen and (max-width: 768px) {
      margin-right: 13px;
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

const NewPasswordForm = ({
   password,
   setPassword,
   confirmPassword,
   setConfirmPassword,
   toggleShowPassword,
   passwordShown,
   isSendingPassword,
   handlePasswordSetClick,
}) => {
   async function thisHandlePasswordSetClick(event) {
      handlePasswordSetClick(event);
   }
   async function thisSetPassword(value) {
      setPassword(value);
   }
   async function thisToggleShowPassword() {
      toggleShowPassword();
   }
   async function thisSetConfirmPassword(value) {
      setConfirmPassword(value);
   }
   return (
      <StyledFormContainer>
         <Form onSubmit={thisHandlePasswordSetClick}>
            <StyledTitle>Change password</StyledTitle>
            <Form.Row>
               <StyledCaption>
                  Password reset has been verified. Please set a new password.
               </StyledCaption>
            </Form.Row>

            <Form.Row>
               <Form.Group as={Col} md="5" controlId="password">
                  <StyledSubtitle>New Password</StyledSubtitle>
                  <StyledInput
                     required
                     defaultValue=""
                     type={passwordShown ? 'text' : 'password'}
                     value={password}
                     onChange={(e) => thisSetPassword(e.target.value)}
                  />
                  <StyledLabel>
                     *Password must be 6 characters or longer
                  </StyledLabel>
               </Form.Group>
            </Form.Row>
            <StyledButtonAndEye>
               <StyledHideButton onClick={thisToggleShowPassword}>
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
                     required
                     defaultValue=""
                     type={passwordShown ? 'text' : 'password'}
                     value={confirmPassword}
                     onChange={(e) => thisSetConfirmPassword(e.target.value)}
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
};

NewPasswordForm.propTypes = {
   password: PropTypes.string.isRequired,
   setPassword: PropTypes.func.isRequired,
   confirmPassword: PropTypes.string.isRequired,
   toggleShowPassword: PropTypes.func.isRequired,
   passwordShown: PropTypes.bool.isRequired,
   isSendingPassword: PropTypes.bool.isRequired,
   handlePasswordSetClick: PropTypes.func.isRequired,
   setConfirmPassword: PropTypes.func.isRequired,
};

export default NewPasswordForm;
