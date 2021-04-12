import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import './UpcomingShiftCard.css';

const Header1 = styled.h1`
   font-family: Arial;
   font-weight: Bold;
   font-size: 18px;
`;

const StyledText = styled.h3`
   font-weight: Bold;
   font-size: 18px;
   color: rgba(2, 78, 107, 1);
`;

export default (cardData) => {
   const df = new Date(cardData.cardData.from);
   const dt = new Date(cardData.cardData.to);
   const DOW = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
   ];
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
               <Card.Title>
                  <Header1>
                     {DOW[df.getDay()]}, {months[df.getMonth()]} {df.getDate()}
                  </Header1>
               </Card.Title>
               <Card.Text>
                  {df.toLocaleString('en-US', {
                     hour: 'numeric',
                     minute: 'numeric',
                     hour12: true,
                  })}
                  -&nbsp;
                  {dt.toLocaleString('en-US', {
                     hour: 'numeric',
                     minute: 'numeric',
                     hour12: true,
                  })}
               </Card.Text>
            </div>
            <Card.Link href="#">
               <StyledText>Details &gt;</StyledText>
            </Card.Link>
         </Card.Body>
      </Card>
   );
};
