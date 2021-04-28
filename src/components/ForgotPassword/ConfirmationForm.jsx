import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
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
      min-width: 550px;
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

const ConfirmationForm = ({
   code,
   username,
   handleConfirmClick,
   setCode,
   isConfirming,
}) => {
   async function thisHandleConfirmClick(event) {
      handleConfirmClick(event);
   }
   async function thisSetCode(value) {
      setCode(value);
   }
   return (
      <StyledFormContainer>
         <Form onSubmit={thisHandleConfirmClick}>
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
                     onChange={(e) => thisSetCode(e.target.value)}
                  />
               </Form.Group>
            </Form.Row>
            <SubmitButton type="submit" isLoading={isConfirming}>
               Verify
            </SubmitButton>
         </Form>
      </StyledFormContainer>
   );
};

ConfirmationForm.propTypes = {
   code: PropTypes.string.isRequired,
   username: PropTypes.string.isRequired,
   handleConfirmClick: PropTypes.func.isRequired,
   setCode: PropTypes.func.isRequired,
   isConfirming: PropTypes.bool.isRequired,
};

export default ConfirmationForm;
