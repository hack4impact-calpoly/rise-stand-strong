import React from 'react';
import { Card } from 'react-bootstrap';

function styleDate(date) {
  const year = date.split('-')[0];
  const month = date.split('-')[1];
  const day = date.split('-')[2];
  if (month === '01') { return (`January ${day}, ${year}`); }
  if (month === '02') { return (`February ${day}, ${year}`); }
  if (month === '03') { return (`March ${day}, ${year}`); }
  if (month === '04') { return (`April ${day}, ${year}`); }
  if (month === '05') { return (`May ${day}, ${year}`); }
  if (month === '06') { return (`June ${day}, ${year}`); }
  if (month === '07') { return (`July ${day}, ${year}`); }
  if (month === '08') { return (`August ${day}, ${year}`); }
  if (month === '09') { return (`September ${day}, ${year}`); }
  if (month === '10') { return (`October ${day}, ${year}`); }
  if (month === '11') { return (`November ${day}, ${year}`); }
  if (month === '12') { return (`December ${day}, ${year}`); }
  return 'Invalid date';
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
