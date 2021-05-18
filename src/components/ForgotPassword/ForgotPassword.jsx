import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import ConfirmationForm from './ConfirmationForm';
import NewPasswordForm from './NewPasswordForm';
import SuccessForm from './SuccessForm';
import RequestCodeForm from './RequestCodeForm';

const ForgotPassword = () => {
   const [code, setCode] = useState('');
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [confirmed, setConfirmed] = useState(false);
   const [codeSent, setCodeSent] = useState(false);
   const [newPassword, setNewPassword] = useState(false);
   const [isConfirming, setIsConfirming] = useState(false);
   const [isSendingCode, setIsSendingCode] = useState(false);
   const [isSendingPassword, setIsSendingPassword] = useState(false);
   const [passwordShown, setPasswordShown] = useState(false);

   const toggleShowPassword = () => {
      if (passwordShown) {
         setPasswordShown(false);
      } else {
         setPasswordShown(true);
      }
   };
   async function handleConfirmClick(event) {
      event.preventDefault();
      setIsConfirming(true);
      try {
         setConfirmed(true);
      } catch (error) {
         window.alert(error);
         setIsConfirming(false);
      }
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
   async function handlePasswordSetClick(event) {
      event.preventDefault();
      setIsSendingPassword(true);
      try {
         await Auth.forgotPasswordSubmit(username, code, password);
         setNewPassword(true);
      } catch (error) {
         window.alert(error);
         setIsSendingPassword(false);
      }
   }

   const last = !newPassword ? (
      <NewPasswordForm
         password={password}
         setPassword={setPassword}
         confirmPassword={confirmPassword}
         setConfirmPassword={setConfirmPassword}
         toggleShowPassword={toggleShowPassword}
         passwordShown={passwordShown}
         isSendingPassword={isSendingPassword}
         handlePasswordSetClick={handlePasswordSetClick}
      />
   ) : (
      <SuccessForm isConfirming={isConfirming} />
   );
   const then = !confirmed ? (
      <ConfirmationForm
         code={code}
         username={username}
         handleConfirmClick={handleConfirmClick}
         setCode={setCode}
         isConfirming={isConfirming}
      />
   ) : (
      last
   );
   const iff = !codeSent ? (
      <RequestCodeForm
         handleSendCodeClick={handleSendCodeClick}
         username={username}
         setUsername={setUsername}
         isSendingCode={isSendingCode}
      />
   ) : (
      then
   );
   return <div>{iff}</div>;
};

export default ForgotPassword;
