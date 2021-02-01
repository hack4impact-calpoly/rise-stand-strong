import React from 'react';
import { Card } from 'react-bootstrap';

export default (CardData) => (
  <Card
    text="dark"
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Header>Shift</Card.Header>
    <Card.Body>
      <Card.Title>
        {console.log(CardData)}
        {CardData.CardData.Date}
      </Card.Title>
      <Card.Text>
        {CardData.CardData.Time}
      </Card.Text>
    </Card.Body>
  </Card>
);
