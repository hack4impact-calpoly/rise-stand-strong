import React from 'react';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';

const SubmitButton = styled(Button)`
  background-color: #6593D6;
  color: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
`;

const NameForm = Form;
const EmailForm = Form;
const PhoneNumberForm = Form;

export default () => (
  <div>
    <h1>Create New Account</h1>
    <NameForm>Enter Name</NameForm>
    <EmailForm>Enter Email</EmailForm>
    <PhoneNumberForm>Enter Phone Number</PhoneNumberForm>
    <SubmitButton>Submit</SubmitButton>
  </div>
);
