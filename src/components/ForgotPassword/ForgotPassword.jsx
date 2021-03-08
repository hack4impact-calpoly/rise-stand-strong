import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import {
  Form,
  Button,
} from 'react-bootstrap';

export default function ResetPassword() {
  const [code, setCode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [codeSent, setCodeSent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);

  const validateResetForm = () => (password.length > 0 && password === confirmPassword);

  async function handleSendCodeClick(event) {
    event.preventDefault();
    setIsSendingCode(true);

    try {
      await Auth.forgotPassword(username);
      setCodeSent(true);
    } catch (error) {
      alert(error.message);
      setIsSendingCode(false);
    }
  }

  async function handleConfirmClick(event) {
    event.preventDefault();

    setIsConfirming(true);

    try {
      await Auth.forgotPasswordSubmit(
        username,
        code,
        password,
      );
      setConfirmed(true);
    } catch (error) {
      window.alert(error);
      setIsConfirming(false);
    }
  }

  function renderRequestCodeForm() {
    return (
      <Form onSubmit={handleSendCodeClick}>
        <Form.Group bsSize="large" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Button
          type="submit"
          isLoading={isSendingCode}
          disabled={!username}
        >
          Send Confirmation
        </Button>
      </Form>
    );
  }

  function renderConfirmationForm() {
    return (
      <form onSubmit={handleConfirmClick}>
        <Form.Group bsSize="large" controlId="code">
          <Form.Label>Confirmation Code</Form.Label>
          <Form.Control
            autoFocus
            type="tel"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <div>
            Please check your email (
            {username}
            ) for the confirmation code.
          </div>
        </Form.Group>
        <hr />
        <Form.Group bsSize="large" controlId="password">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group bsSize="large" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          block
          type="submit"
          bsSize="large"
          isLoading={isConfirming}
          disabled={!validateResetForm()}
        >
          Confirm
        </Button>
      </form>
    );
  }

  function renderSuccessMessage() {
    return (
      <div className="success">
        <p>Your password has been reset.</p>
        <p>
          <Link to="/">
            Click here to login with your new credentials.
          </Link>
        </p>
      </div>
    );
  }

  const then = !confirmed ? renderConfirmationForm() : renderSuccessMessage();
  const iff = !codeSent ? renderRequestCodeForm() : then;

  return (
    <div>
      <h1>Forgot Password</h1>
      {iff}
    </div>
  );
}
