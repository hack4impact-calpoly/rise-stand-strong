import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const SubmitButton = styled(Button)`
  background-color: #6593D6;
  color: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
`;

export default () => (
  <div>
    <h1>Login Page</h1>
    <h2>Emma Sauerborn</h2>
    <SubmitButton>Submit</SubmitButton>
  </div>
);
