import React from 'react';
import { Card } from 'react-bootstrap';

export default (Announcement) => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{Announcement.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{Announcement.date}</Card.Subtitle>
      <Card.Text>
        {Announcement.text}
      </Card.Text>
      <Card.Link href={Announcement.link}>
        Read More
      </Card.Link>
    </Card.Body>
  </Card>
);
