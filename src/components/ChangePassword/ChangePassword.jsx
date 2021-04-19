import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Form, Button, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';

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

const StyledSubtitle = styled(Form.Label)`
   margin-left: 33px;
   font-size: 18px;
   font-family: 'Nunito Sans', sans-serif;
   font-weight: 700;
`;

const StyledInput = styled(Form.Control)`
   margin-left: 33px;
   margin-top: -7px;
   margin-bottom: 3px;
   padding: 2px 5px;
   width: calc(100vw - 65px);
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
`;

const CancelButton = styled(Button)`
   font-family: nunito, sans-serif;
   background-color: #fff2ee;
   color: #ae4c33;
   padding: 8px 20px;
   border-radius: 6px;
   border: none;
   line-height: 27px;
   font-size: 20px;
   display: flex;
   justify-content: flex-end;
   margin-left: auto;
   margin-top: 50px;
   margin-left: 35px;
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

const StyledHideButton = styled(Button)`
   background-color: transparent;
   color: #024e6b;
   border: none;
   z-index: 1;
   font-size: 16px;
   font-family: 'Nunito Sans', sans-serif;
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

const StyledFeedback = styled(Form.Control.Feedback)`
   margin-left: 33px;
   font-size: 10px;
`;

const StyledComment = styled(Form.Label)`
   margin-left: 33px;
   margin-bottom: 25px;
   font-size: 13px;
   color: #525252;
   font-family: 'Nunito Sans', sans-serif;
   font-weight: 400;
`;

export default function ChangePassword() {
   const [validated, setValidated] = useState(false);
   const [oldPassword, setOldPassword] = useState('');
   const [newPassword, setNewPassword] = useState('');
   const [oldPasswordShown, setOldPasswordShown] = useState(false);
   const [newPasswordShown, setNewPasswordShown] = useState(false);

   async function handleSubmit(e) {
      const form = e.currentTarget;
      e.preventDefault();
      if (form.checkValidity() === false) {
         e.stopPropagation();
      } else {
         try {
            const currentUser = await Auth.currentAuthenticatedUser();
            await Auth.changePassword(currentUser, oldPassword, newPassword);
         } catch (error) {
            console.log('error signing up:', error);
         }
      }
      setValidated(true);
   }

   const handleCancel = () => {
      console.log('handle cancel');
   };

   const toggleShowOldPassword = () => {
      if (oldPasswordShown) {
         setOldPasswordShown(false);
      } else {
         setOldPasswordShown(true);
      }
   };
   const toggleShowNewPassword = () => {
      if (newPasswordShown) {
         setNewPasswordShown(false);
      } else {
         setNewPasswordShown(true);
      }
   };

   function renderChangePasswordForm() {
      return (
         <StyledFormContainer>
            <Form
               noValidate
               validated={validated}
               onSubmit={handleSubmit}
               onCancel={handleCancel}
            >
               <StyledTitleContainer>
                  <StyledTitle>Change Password</StyledTitle>
               </StyledTitleContainer>
               <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                     <StyledSubtitle>Old Password</StyledSubtitle>
                     <StyledInput
                        required
                        autoFocus
                        type={oldPasswordShown ? 'text' : 'password'}
                        defaultValue={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                     />
                     <StyledFeedback>Looks good!</StyledFeedback>
                     <StyledFeedback type="invalid">
                        {' '}
                        Please fill in your password.{' '}
                     </StyledFeedback>
                  </Form.Group>
               </Form.Row>
               <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                     <StyledSubtitle>New Password</StyledSubtitle>
                     <StyledInput
                        required
                        autoFocus
                        type={newPasswordShown ? 'text' : 'password'}
                        defaultValue={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                     />
                     <StyledFeedback>Looks good!</StyledFeedback>
                     <StyledFeedback type="invalid">
                        {' '}
                        Please fill in your password.{' '}
                     </StyledFeedback>
                     <StyledComment>
                        * Password must be 6 characters or longer
                     </StyledComment>
                  </Form.Group>
               </Form.Row>
               <StyledButtonAndEye>
                  <StyledHideButton onClick={toggleShowOldPassword}>
                     {oldPasswordShown ? 'Hide ' : 'Show '}
                     {oldPasswordShown ? (
                        <FontAwesomeIcon icon={faEye} />
                     ) : (
                        <FontAwesomeIcon icon={faEyeSlash} />
                     )}
                  </StyledHideButton>
               </StyledButtonAndEye>
               <StyledButtonAndEye>
                  <StyledHideButton onClick={toggleShowNewPassword}>
                     {newPasswordShown ? 'Hide ' : 'Show '}
                     {newPasswordShown ? (
                        <FontAwesomeIcon icon={faEye} />
                     ) : (
                        <FontAwesomeIcon icon={faEyeSlash} />
                     )}
                  </StyledHideButton>
               </StyledButtonAndEye>
               <Form.Row>
                  <a href="/editprofile">
                     <CancelButton type="reset">Cancel</CancelButton>
                  </a>
                  <SubmitButton type="submit">Save</SubmitButton>
               </Form.Row>
            </Form>
         </StyledFormContainer>
      );
   }

   function renderSuccessMessage() {
      return (
         <div className="success">
            <p>Password Saved!</p>
            <a href="/">
               <SubmitButtonContainer>
                  <SubmitButtonFullWidth type="submit">
                     Back to Profile
                  </SubmitButtonFullWidth>
               </SubmitButtonContainer>
            </a>
         </div>
      );
   }

   const then = renderSuccessMessage();
   const iff = !validated ? renderChangePasswordForm() : then;

   return <div>{iff}</div>;
}
