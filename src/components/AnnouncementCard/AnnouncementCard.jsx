import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const Header1 = styled.h1`
   font-family: Arial;
   font-weight: Bold;
   font-size: 18px;
   line-height: 25px;
`;

const Header2 = styled.h2`
   font-family: Arial;
   font-weight: thin;
   font-size: 14px;
   line-height: 19px;
   margin: 10px 0px 0px 1em;
`;

const Header3 = styled.h3`
   font-family: Arial;
   font-size: 16px;
   line-height: 22px;
`;

const Header4 = styled.h4`
   font-family: Arial;
   font-weight: Bold;
   font-size: 18px;
   line-height: 25px;
   color: rgba(81, 40, 84, 1);
`;

const AAContainer = styled.div`
   text-align: center;
`;

const HeaderContainer = styled.div`
   display: flex;
`;
export default (Announcement) => {
   const d = new Date(Announcement.Announcement.date);
   const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
   ];
   return (
      <Card>
         <Card.Body>
            <div>
               <HeaderContainer>
                  <Card.Title>
                     <Header1>{Announcement.Announcement.title}</Header1>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                     <Header2>
                        {months[d.getMonth()]} {d.getDate()}, {d.getFullYear()}
                     </Header2>
                  </Card.Subtitle>
               </HeaderContainer>
               <Card.Text>
                  <Header3>{Announcement.Announcement.text}</Header3>
               </Card.Text>
               <AAContainer>
                  <Card.Link href={Announcement.Announcement.link}>
                     <Header4> Read More &gt;</Header4>
                  </Card.Link>
               </AAContainer>
            </div>
         </Card.Body>
      </Card>
   );
};
