import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Header1 = styled.h1`
   font-family: Arial;
   font-weight: Bold;
   font-size: 18px;
   line-height: 25px;
`;

const Header3 = styled.h3`
   font-family: Arial;
   font-size: 16px;
   line-height: 22px;
`;

const IconContainer = styled.div`
   display: flex;
   flex-direction: column;
   color: rgba(81, 40, 84, 1);
   justify-content: center;
`;

const HeaderContainer = styled.div`
   display: grid;
   grid-template-columns: 250px auto;
`;
const CardTitle = styled(Card.Title)`
   align-self: start;
`;

const ButtonContainer = styled(Card.Subtitle)`
   display: flex;
   margin-top: 5px;
   align-self: end;
`;

export default (ContactInfo) => {
   const PhoneNumber = ContactInfo.ContactInfo.phone;
   const Name = ContactInfo.ContactInfo.name;
   const Email = ContactInfo.ContactInfo.email;

   const numberFormatter = (pn) => {
      const nn = '('.concat(
         pn.slice(2, 5),
         ')',
         ' ',
         pn.slice(5, 8),
         '-',
         pn.slice(8)
      );
      return nn;
   };
   return (
      <Card>
         <Card.Body>
            <div>
               <HeaderContainer>
                  <div>
                     <CardTitle>
                        <Header1>{Name}</Header1>
                        <Card.Subtitle>
                           <Header3>{numberFormatter(PhoneNumber)}</Header3>
                        </Card.Subtitle>
                     </CardTitle>
                  </div>
                  <ButtonContainer>
                     <Card.Link href={'tel:'.concat(PhoneNumber)}>
                        <IconContainer>
                           <FaPhoneAlt size={25} />
                           <h6>Call</h6>
                        </IconContainer>
                     </Card.Link>
                     <Card.Link href={'mailto:'.concat(Email)}>
                        <IconContainer>
                           <FaEnvelope size={25} />
                           <h6>Email</h6>
                        </IconContainer>
                     </Card.Link>
                  </ButtonContainer>
               </HeaderContainer>
            </div>
         </Card.Body>
      </Card>
   );
};
