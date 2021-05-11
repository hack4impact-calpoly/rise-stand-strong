import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const SubmitButtonContainer = styled.div`
   text-align: center;
`;
const SubmitButtonFullWidth = styled(Button)`
   font-family: nunito, sans-serif;
   background-color: #ae4c33;
   padding: 8px 20px;
   border-radius: 6px;
   border: none;
   line-height: 27px;
   font-size: 20px;
   display: flex;
   justify-content: flex-end;
   margin-left: auto;
   margin-top: 50px;
   margin-right: auto;
   position: absolute;
   width: 80%;
   right: 0;
   left: 0;
   text-align: center;
   display: inline-block;
   @media only screen and (min-width: 769px) {
      width: 457px;
   }
`;

export default () => {
   const history = useHistory();
   return (
      <div className="success">
         <p>Password Saved!</p>
         <a href="/">
            <SubmitButtonContainer>
               <SubmitButtonFullWidth type="submit" onClick={history.push('/')}>
                  Back to Profile
               </SubmitButtonFullWidth>
            </SubmitButtonContainer>
         </a>
      </div>
   );
};
