import React from 'react';
import './UpcomingShiftCard.css';
import Card from 'react-bootstrap/Card';

export default () => (

  <Card>
    <Card.Body>
      <div>
        <Card.Title>Tuesday, March 9th</Card.Title>
        <Card.Text>8:00 PM - 8:00 AM</Card.Text>
      </div>
      <Card.Link href="#">
        Details
        <i className="arrow" />
      </Card.Link>
    </Card.Body>
  </Card>

);
