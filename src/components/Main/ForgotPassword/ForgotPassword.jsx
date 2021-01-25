import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const SubmitButton = styled(Button)`
    background-color: #6593D6;
    color: white;
    padding: 10px;
    border-radius: 10px
    border: none;
`;

export default () => {
  const [email, setEmail] = useState('');

  const checkEmail = () => {
    if (email === '') {
      window.alert('Enter an email');
    }
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <SubmitButton onClick={checkEmail}>Submit</SubmitButton>
    </div>
  );
};
