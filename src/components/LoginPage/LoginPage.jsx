import { Auth } from 'aws-amplify';
import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Form,
  Col,
  Button,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const StyledTitle = styled.h2`
  margin: 20px 0px 15px 20px;
`;

const StyledInput = styled(Form.Control)`
  margin-left: 20px;
  font-size: 12px;
  padding: 2px 5px;
`;
const StyledFeedback = styled(Form.Control.Feedback)`
  margin-left: 20px; 
  font-size: 10px;
`;
const StyledButton = styled(Button)`
  margin-left: 20px; 
  font-size: 12px;
`;
const StyledLinkButton = styled(Button)`
  margin-left: 10px; 
  font-size: 10px;
`;

export default () => {
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validLogin, setValidLogin] = useState(true);
  const history = useHistory();

  async function signIn() {
    try {
      await Auth.signIn(username, password);
      setValidLogin(true);
      history.push('/dashboard');
    } catch (error) {
      setValidLogin(false);
      console.log('error signing in', error);
    }
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    signIn();
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      {validLogin === false && <div className="alert alert-danger" role="alert">Invalid Login, Please Try Again</div>}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <StyledTitle>Login Page</StyledTitle>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <StyledInput
              required
              type="username"
              placeholder="Username"
              defaultValue={username}
              onChange={handleUsername}
            />
            <StyledFeedback>looks good!</StyledFeedback>
            <StyledFeedback type="invalid"> please input username. </StyledFeedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <StyledInput
              type="password"
              required
              placeholder="Password"
              defaultValue={password}
              onChange={handlePassword}
            />
            <StyledFeedback>looks good!</StyledFeedback>
            <StyledFeedback type="invalid"> please input password </StyledFeedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <StyledLinkButton variant="link">Create New Account</StyledLinkButton>
            <StyledLinkButton href="./ForgotPassword" variant="link">Forgot Password?</StyledLinkButton>
          </Form.Group>
        </Form.Row>
        <StyledButton type="submit">Login</StyledButton>
      </Form>
    </div>
  );
};
