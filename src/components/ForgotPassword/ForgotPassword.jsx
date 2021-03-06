import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import {
  FormGroup,
  FormControl,
  FormLabel,
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

  function validateCodeForm() {
    return username.length > 0;
  }

  function validateResetForm() {
    return (
      password.length > 0
      && password === confirmPassword
    );
  }

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
      <form onSubmit={handleSendCodeClick}>
        <FormGroup bsSize="large" controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormGroup>
        <button
          type="submit"
          isLoading={isSendingCode}
          disabled={!validateCodeForm()}
        >
          Send Confirmation
        </button>
      </form>
    );
  }

  function renderConfirmationForm() {
    return (
      <form onSubmit={handleConfirmClick}>
        <FormGroup bsSize="large" controlId="code">
          <FormLabel>Confirmation Code</FormLabel>
          <FormControl
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
        </FormGroup>
        <hr />
        <FormGroup bsSize="large" controlId="password">
          <FormLabel>New Password</FormLabel>
          <FormControl
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <FormGroup bsSize="large" controlId="confirmPassword">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormGroup>
        <button
          block
          type="submit"
          bsSize="large"
          isLoading={isConfirming}
          disabled={!validateResetForm()}
        >
          Confirm
        </button>
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
