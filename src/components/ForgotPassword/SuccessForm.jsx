import React from 'react';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LockIcon from './LockIcon.svg';

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

const SuccessForm = ({ isConfirming }) => (
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
               <SubmitButtonFullWidth type="submit" isLoading={isConfirming}>
                  Return to login
               </SubmitButtonFullWidth>
            </SubmitButtonContainer>
         </a>
      </Form>
   </StyledFormContainer>
);

SuccessForm.propTypes = {
   isConfirming: PropTypes.bool.isRequired,
};

export default SuccessForm;
