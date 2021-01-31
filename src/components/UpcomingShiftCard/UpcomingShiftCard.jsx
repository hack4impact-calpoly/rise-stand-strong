import React from 'react';
import { Card } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';
import './UpcomingShiftCard.css';

export default () => (

  <Card>
    <Card.Body>
      <div>
        <Card.Title>Tuesday, March 9th</Card.Title>
        <Card.Text>8:00 PM - 8:00 AM</Card.Text>
      </div>
      <Card.Link href="#">
        Details
        <FaChevronRight />
      </Card.Link>
    </Card.Body>
  </Card>

);
