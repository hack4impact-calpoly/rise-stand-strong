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

const HeaderContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
`;
const CardTitle = styled(Card.Title)`
   flex-basis: 75%;
`;
const CardSubtitle = styled(Card.Subtitle)`
   flex-basis: 25%;
   text-align: right;
`;

export default (ContactInfo) => {
   const PhoneNumber = ContactInfo.cardData.phone;
   const Name = ContactInfo.cardData.name;
   const Email = ContactInfo.cardData.email;

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
                        <CardSubtitle>
                           <Header3>{numberFormatter(PhoneNumber)}</Header3>
                        </CardSubtitle>
                     </CardTitle>
                  </div>
                  <Card.Link href={'mailto:'.concat(Email)}>
                     <FaPhoneAlt />
                  </Card.Link>
                  <Card.Link href={'tel:'.concat(PhoneNumber)}>
                     <FaEnvelope />
                  </Card.Link>
               </HeaderContainer>
            </div>
         </Card.Body>
      </Card>
   );
};
