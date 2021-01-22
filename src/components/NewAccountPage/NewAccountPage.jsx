import React from 'react';
// import { Button } from 'react-bootstrap';
// import styled from 'styled-components';

/* const SubmitButton = styled(Button)`
  background-color: #6593D6;
  color: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
`; */
class NewAccountPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    const { fields } = this.state;
    const errors = {};
    let formIsValid = true;

    if (!fields.name) {
      formIsValid = false;
      errors.name = 'Name cannot be empty';
    }
    if (!fields.email) {
      formIsValid = false;
      errors.email = 'Email cannot be empty';
    }
    if (!fields.phonenumber) {
      formIsValid = false;
      errors.phonenumber = 'Phone number cannot be empty';
    }
    this.setState({ errors });
    return formIsValid;
  }

  handleChange(field, e) {
    const { fields } = this.state;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  contactSubmit(e) {
    e.preventDefault();
    const fields = this.state;
    if (this.handleValidation()) {
      alert('Form submitted. Admin will need to approve the account.'); // eslint-disable-line no-alert
      console.log(fields); // eslint-disable-line no-console
    } else {
      alert('Form has errors.'); // eslint-disable-line no-alert
    }
  }

  render() {
    const { fields, errors } = this.state;
    return (
      <div>
        <h1>Create New Account</h1>
        <form name="newaccountform" onSubmit={this.contactSubmit.bind(this)}>
          <input name="name" size="30" placeholder="Name" onChange={this.handleChange.bind(this, 'name')} value={fields.name} />
          <span style={{ color: 'red' }}>{errors.name}</span>
          <input name="email" size="30" placeholder="Email" onChange={this.handleChange.bind(this, 'email')} value={fields.email} />
          <span style={{ color: 'red' }}>{errors.email}</span>
          <input name="phonenumber" size="30" placeholder="Phone Number" onChange={this.handleChange.bind(this, 'phonenumber')} value={fields.phonenumber} />
          <span style={{ color: 'red' }}>{errors.phonenumber}</span>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewAccountPage;
