import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledFormContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   @media only screen and (min-width: 768px) {
      margin-right: auto;
      margin-left: auto;
      width: calc(40vw - 65px)
      min-width: 400px;
      max-width: 500px;
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
   font-weight: 400;
   display: block;
   text-align: center;
   margin-left: 32px;
   margin-right: 32px;
   @media only screen and (min-width: 769px) {
      margin-left: 32px;
      margin-right: 32px;
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
      margin-left: 0px;
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
      max-width: 500px;
   }
`;
const SubmitButton = styled(Button)`
   font-family: nunito, sans-serif;
   background-color: #ae4c33;
   border: none;
   line-height: 27px;
   font-size: 20px;
   padding: 8px 20px;
   display: flex;
   justify-content: flex-end;
   margin-left: auto;
   margin-top: 26px;
   margin-right: 30px;
   margin-bottom: 100px;
   @media only screen and (min-width: 769px) {
      margin-right: 0;
      margin-left: auto;
   }
`;

const RequestCodeForm = ({
   handleSendCodeClick,
   username,
   setUsername,
   isSendingCode,
}) => {
   async function thisHandleSendCodeClick(event) {
      handleSendCodeClick(event);
   }
   async function thisSetUsername(value) {
      setUsername(value);
   }
   return (
      <StyledFormContainer>
         <Form onSubmit={thisHandleSendCodeClick}>
            <StyledTitle>Forgot password</StyledTitle>
            <Form.Row>
               <StyledCaption>
                  Please enter the email that your RISE volunteer account is
                  associated with.
               </StyledCaption>
            </Form.Row>
            <Form.Row>
               <Form.Group bsSize="large" controlId="email">
                  <StyledSubtitle>Email</StyledSubtitle>
                  <StyledInput
                     className="email-box"
                     autoFocus
                     type="email"
                     value={username}
                     onChange={(e) => thisSetUsername(e.target.value)}
                  />
               </Form.Group>
            </Form.Row>
            <SubmitButton type="submit" isLoading={isSendingCode}>
               Submit
            </SubmitButton>
         </Form>
      </StyledFormContainer>
   );
};

RequestCodeForm.propTypes = {
   handleSendCodeClick: PropTypes.func.isRequired,
   username: PropTypes.string.isRequired,
   setUsername: PropTypes.func.isRequired,
   isSendingCode: PropTypes.bool.isRequired,
};

export default RequestCodeForm;
