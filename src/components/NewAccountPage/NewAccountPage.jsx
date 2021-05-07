import { React, useState } from 'react';
import { Auth } from 'aws-amplify';
import { Form, Button, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './fonts.css';
import PhoneInput from 'react-phone-number-input/input';

const StyledContainer = styled.div`
   display: flex
   flex-direction: column;
   justify-content: space-between;
   @media only screen and (min-width: 768px) {
      margin-right: auto;
      margin-left: auto;
      width: calc(40vw - 65px);
      min-width: 400px;
      max-width: 500px;
   }
`;

const SubmitButton = styled(Button)`
   background-color: #024e6b;
   color: white;
   padding: 8px 20px;
   border-radius: 6px;
   border: none;
   right: 32px;
   font-size: 20px;
   display: flex;
   justify-content: flex-end;
   margin-left: auto;
   margin-top: 26px;
   margin-right: 20px;
   margin-bottom: 100px;
   @media only screen and (min-width: 768px) {
      margin-right: 0px;
      margin-left: auto;
      padding: 8px 30px;
   }
`;

const StyledField = styled(Form.Control)`
   margin-left: 33px;
   margin-top: -7px;
   margin-bottom: 3px;
   font-size: 18px;
   padding: 2px 5px;
   width: calc(100vw - 65px);
   @media only screen and (min-width: 768px) {
      margin-left: auto;
      margin-right: auto;
      width: calc(40vw - 65px);
      min-width: 400px;
      max-width: 500px;
   }
`;

const StyledFeedback = styled(Form.Control.Feedback)`
   margin-left: 33px;
   font-size: 10px;
`;

const StyledLabel = styled(Form.Label)`
   margin-left: 33px;
   font-size: 18px;
   font-weight: 700;
   @media only screen and (min-width: 768px) {
      width: calc(40vw - 65px);
      margin-left: auto;
      margin-right: auto;
   }
`;

const StyledSubheader = styled(Form.Label)`
   margin-left: 42px;
   margin-bottom: 35px;
   font-size: 14px;
   color: #525252;
   font-weight: 400;
   @media only screen and (min-width: 768px) {
      margin-left: 8px;
      margin-right: auto;
   }
`;

const StyledComment = styled(Form.Label)`
   margin-left: 33px;
   margin-bottom: 25px;
   font-size: 13px;
   color: #525252;
   font-weight: 400;
   @media only screen and (min-width: 768px) {
      width: calc(40vw - 65px);
      margin-left: auto;
      margin-right: auto;
   }
`;

const StyledHeader = styled(Form.Label)`
   margin-left: 33px;
   margin-bottom: -5px;
   font-size: 36px;
   font-weight: 600;
   @media only screen and (min-width: 768px) {
      margin-left: auto;
      margin-right: auto;
   }
`;

const StyledHideButton = styled(Button)`
   background-color: transparent;
   color: #024e6b;
   border: none;
   z-index: 1;
   font-size: 16px;
   font-weight: 600;
   &:hover,
   &:focus {
      background-color: transparent;
      color: #024e6b;
   }
`;

const StyledButtonAndEye = styled.div`
   position: absolute;
   top: 30px;
   @media only screen and (max-width: 768px) {
      position: absolute;
      top: 30px;
      right: 40px;
   }
`;

const StyledSmallContainer = styled.div`
   @media only screen and (min-width: 768px) {
      width: calc(40vw - 65px);
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: calc(40vw - 65px);
      min-width: 400px;
      max-width: 500px;
   }
`;

const StyledPhoneInput = styled(PhoneInput)`
   margin-left: 33px;
   margin-top: -7px;
   margin-bottom: 3px;
   font-size: 18px;
   padding: 2px 5px;
   width: calc(100vw - 65px);
   border: 1px solid #ced4da;
   border-radius: 0.25rem;
   height: calc(1.5em + 0.75rem + 2px);
   font-weight: 400;
   line-height: 1.5;
   @media only screen and (min-width: 768px) {
      margin-left: auto;
      margin-right: auto;
      width: calc(40vw - 65px);
      min-width: 400px;
      max-width: 500px;
   }
   :focus {
      transition: border-color 0.15s ease-in-out, , outline: 0.15s ease-in -out, box-shadow 0.15s ease-in-out;
      border: 1px solid #84bcfc;
      outline: 1px solid #bcdcfc;
      box-shadow: 0 0 0 3px #bcdcfc;
   }
`;

export default () => {
   const [validated, setValidated] = useState(false);
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [password, setPassword] = useState('');
   const history = useHistory();
   const [passwordShown, setPasswordShown] = useState(false);

   const handleSubmit = async (e) => {
      const form = e.currentTarget;
      e.preventDefault();
      if (form.checkValidity() === false) {
         e.stopPropagation();
      } else {
         try {
            await Auth.signUp({
               username: email,
               password,
               attributes: {
                  given_name: firstName,
                  family_name: lastName,
                  phone_number: phoneNumber,
               },
            });
            alert('Form submitted. Admin will need to to approve.'); // eslint-disable-line no-alert
            history.push('/');
         } catch (error) {
            console.log('error signing up:', error);
         }
      }
      setValidated(true);
   };

   const toggleShowPassword = () => {
      if (passwordShown) {
         setPasswordShown(false);
      } else {
         setPasswordShown(true);
      }
   };

   return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
         <StyledContainer>
            <StyledHeader>Register an account</StyledHeader>
            <Form.Row>
               <StyledSubheader>All fields are required</StyledSubheader>
            </Form.Row>
            <Form.Row>
               <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <StyledLabel>First name</StyledLabel>
                  <StyledField
                     required
                     type="text"
                     defaultValue={firstName}
                     onChange={(e) => setFirstName(e.target.value)}
                  />
                  <StyledFeedback>Looks good!</StyledFeedback>
                  <StyledFeedback type="invalid">
                     {' '}
                     Please fill in your first name.{' '}
                  </StyledFeedback>
               </Form.Group>
            </Form.Row>
            <Form.Row>
               <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <StyledLabel>Last name</StyledLabel>
                  <StyledField
                     required
                     type="text"
                     defaultValue={lastName}
                     onChange={(e) => setLastName(e.target.value)}
                  />
                  <StyledFeedback>Looks good!</StyledFeedback>
                  <StyledFeedback type="invalid">
                     {' '}
                     Please fill in your last name.{' '}
                  </StyledFeedback>
               </Form.Group>
            </Form.Row>
            <Form.Row>
               <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <StyledLabel>Email</StyledLabel>
                  <StyledField
                     required
                     type="text"
                     defaultValue={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
                  <StyledFeedback>Looks good!</StyledFeedback>
                  <StyledFeedback type="invalid">
                     {' '}
                     Please fill in your email.{' '}
                  </StyledFeedback>
               </Form.Group>
            </Form.Row>
            <Form.Row>
               <Form.Group as={Col} md="4" controlId="validationCustom04">
                  <StyledLabel>Phone number</StyledLabel>
                  <StyledPhoneInput
                     country="US"
                     mask="_"
                     required
                     type="text"
                     defaultValue={phoneNumber}
                     onChange={setPhoneNumber}
                  />
                  <StyledFeedback>Looks good!</StyledFeedback>
                  <StyledFeedback type="invalid">
                     {' '}
                     Please fill in your phone number.{' '}
                  </StyledFeedback>
               </Form.Group>
            </Form.Row>
            <Form.Row>
               <Form.Group as={Col} md="4" controlId="validationCustom05">
                  <StyledLabel>Password</StyledLabel>
                  <StyledSmallContainer>
                     <StyledField
                        required
                        type={passwordShown ? 'text' : 'password'}
                        defaultValue={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
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
                  </StyledSmallContainer>
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
            <SubmitButton type="submit">Register</SubmitButton>
         </StyledContainer>
      </Form>
   );
};
