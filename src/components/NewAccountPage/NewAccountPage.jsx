import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import NameForm from './NameForm';
import EmailForm from './EmailForm';
import PhoneNumberForm from './PhoneNumberForm';

const SubmitButton = styled(Button)`
  background-color: #6593D6;
  color: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
`;

export default () => (
  <div>
    <h1>Create New Account</h1>
    <NameForm />
    <EmailForm />
    <PhoneNumberForm>Enter Phone Number</PhoneNumberForm>
    <SubmitButton>Submit</SubmitButton>
  </div>
);
