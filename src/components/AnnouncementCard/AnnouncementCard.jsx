import React from 'react';
import './AnnouncementCard.css';

export default () => (
  <div className="announcementCard">
    <div className="header">
      <h2 className="announcement">New Protocol</h2>
      <h3 className="date">March 1, 2021</h3>
    </div>
    <br />
    <div className="description">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Magne et dolor scelerisqeu tindicunt cars etiam...
      </p>
    </div>
    <a className="readmore" href="/#">
      Read More
      <i className="arrow" />
    </a>
  </div>
);
