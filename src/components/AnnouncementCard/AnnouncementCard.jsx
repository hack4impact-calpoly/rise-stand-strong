import React from 'react';
import { Card } from 'react-bootstrap';

export default () => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>New Protocol</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">March 1, 2021</Card.Subtitle>
      <Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Magne et dolor scelerisqeu tindicunt cars etiam...
      </Card.Text>
      <Card.Link href="#">
        Read More
      </Card.Link>
    </Card.Body>
  </Card>
);
