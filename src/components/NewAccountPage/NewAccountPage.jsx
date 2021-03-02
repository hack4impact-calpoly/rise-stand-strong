import { React, useState } from 'react';
import { Auth } from 'aws-amplify';
import { Form, Button, Col } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

const SubmitButton = styled(Button)`
  background-color: #6593D6;
  color: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
  margin-left: 20px;  
`;
const StyledField = styled(Form.Control)`
  margin-left: 20px;
  font-size: 12px;
  padding: 2px 5px;
`;
const StyledFeedback = styled(Form.Control.Feedback)`
  margin-left: 20px; 
  font-size: 10px;
`;
const StyledLabel = styled(Form.Label)`
  margin-left: 20px; 
  font-size: 20px;
`;
const StyledHeader = styled(Form.Label)`
  margin-left: 20px; 
  font-size: 30px;
`;

export default () => {
  const [validated, setValidated] = useState(false);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    const confirmField = form.elements[5];
    if (confirmpassword !== password) {
      confirmField.setCustomValidity('Passwords must match');
    } else {
      confirmField.setCustomValidity('');
    }
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      try {
        const { newUser } = await Auth.signUp({
          username: email,
          password,
          attributes: {
            given_name: firstname,
            family_name: lastname,
            phone_number: phonenumber,
          },
        });
        console.log(newUser);
      } catch (error) {
        console.log('error signing up:', error);
      }
      alert('Form submitted. Admin will need to to approve.'); // eslint-disable-line no-alert
      history.push('/');
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <StyledHeader>Create New Account</StyledHeader>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <StyledLabel>First name</StyledLabel>
          <StyledField
            required
            type="text"
            placeholder="First name"
            defaultValue={firstname}
            onChange={handleChangeFirstName}
          />
          <StyledFeedback>Looks good!</StyledFeedback>
          <StyledFeedback type="invalid"> Please fill in your first name. </StyledFeedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <StyledLabel>Last name</StyledLabel>
          <StyledField
            required
            type="text"
            placeholder="Last name"
            defaultValue={lastname}
            onChange={handleChangeLastName}
          />
          <StyledFeedback>Looks good!</StyledFeedback>
          <StyledFeedback type="invalid"> Please fill in your last name. </StyledFeedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <StyledLabel>Email</StyledLabel>
          <StyledField
            required
            type="text"
            placeholder="Email"
            defaultValue={email}
            onChange={handleChangeEmail}
          />
          <StyledFeedback>Looks good!</StyledFeedback>
          <StyledFeedback type="invalid"> Please fill in your email. </StyledFeedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <StyledLabel>Phone number</StyledLabel>
          <StyledField
            required
            type="text"
            placeholder="e.g. +1(999)999-9999"
            defaultValue={phonenumber}
            onChange={handleChangePhoneNumber}
          />
          <StyledFeedback>Looks good!</StyledFeedback>
          <StyledFeedback type="invalid"> Please fill in your phone number. </StyledFeedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <StyledLabel>Password</StyledLabel>
          <StyledField
            required
            type="text"
            placeholder="Password"
            defaultValue={password}
            onChange={handleChangePassword}
          />
          <StyledFeedback>Looks good!</StyledFeedback>
          <StyledFeedback type="invalid"> Please fill in your password. </StyledFeedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="5" controlId="validationCustom05">
          <StyledLabel>Confirm Password</StyledLabel>
          <StyledField
            required
            type="text"
            placeholder="Password"
            defaultValue={confirmpassword}
            onChange={handleChangeConfirmPassword}
          />
          <StyledFeedback>Looks good!</StyledFeedback>
          <StyledFeedback type="invalid"> Passwords must match. </StyledFeedback>
        </Form.Group>
      </Form.Row>
      <SubmitButton type="submit">Create Account</SubmitButton>
    </Form>
  );
};
