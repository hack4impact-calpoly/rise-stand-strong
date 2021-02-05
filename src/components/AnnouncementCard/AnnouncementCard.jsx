import React from 'react';
import { Card } from 'react-bootstrap';

function styleDate(date) {
  const year = date.split('-')[0];
  let month = date.split('-')[1];
  const day = date.split('-')[2];
  const months = [null, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  month = months[parseInt(month, 10)];
  
  return (`${month} ${day}, ${year}`);
}

export default (Announcement) => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>
        {Announcement.Announcement.title}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{styleDate(Announcement.Announcement.date)}</Card.Subtitle>
      <Card.Text>
        {Announcement.Announcement.text}
      </Card.Text>
      <Card.Link href={Announcement.Announcement.link}>
        Read More
      </Card.Link>
    </Card.Body>
  </Card>
);
