import React from 'react';
import { Card } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import './UpcomingShiftCard.css';

const styleDate = (data) => {
   const date = data.split(' ')[0];
   const year = date.split('-')[0];
   let month = date.split('-')[1];
   const day = date.split('-')[2];
   const months = [
      null,
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

   month = months[parseInt(month, 10)];

   return `${month} ${day}, ${year}`;
};

const styleTime = (data) => {
   const time = data.split(' ')[1];
   const hours = time.split(':')[0];
   const min = time.split(':')[1];
   return `${hours}:${min}`;
};

export default (cardData) => (
   <Card>
      <Card.Body>
         <div>
            <Card.Title>
               {console.log(cardData)}
               {styleDate(cardData.cardData.from)}
            </Card.Title>
            <Card.Text>
               {styleTime(cardData.cardData.from)}
               AM -&nbsp;
               {styleTime(cardData.cardData.to)}
               PM
            </Card.Text>
         </div>
         <Card.Link href={`/shift/${cardData.cardData.from}`}>
            Details
            <FaChevronRight />
         </Card.Link>
      </Card.Body>
   </Card>
);
