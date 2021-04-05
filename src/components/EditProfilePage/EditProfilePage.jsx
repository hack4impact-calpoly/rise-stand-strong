import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const SubmitButton = styled(Button)`
   background-color: #6593d6;
   color: white;
   padding: 10px;
   border-radius: 10px;
   border: none;
`;

export default () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [error, setError] = useState(false);

   const raiseError = () => {
      if (name === '' || email === '' || phone === '') {
         setError(true);
         alert('Error: Field(s) empty');
      }
   };

   const handleSave = () => {
      raiseError();
   };

   return (
      <div>
         <h1>Edit Profile Page</h1>
         <h3>Name</h3>
         <input name="nameField" onChange={(e) => setName(e.target.value)} />
         <h3>Email</h3>
         <input name="emailField" onChange={(e) => setEmail(e.target.value)} />
         <h3>Phone Number</h3>
         <input name="phoneField" onChange={(e) => setPhone(e.target.value)} />
         <SubmitButton onClick={handleSave}>Save</SubmitButton>
         {error ? <h4>Could not save changes: field(s) empty</h4> : null}
      </div>
   );
};
