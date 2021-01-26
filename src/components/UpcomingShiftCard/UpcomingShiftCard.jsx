import React from 'react';
import './UpcomingShiftCard.css';

export default () => (

  <div className="upcomingShiftCard">
    <div>
      <h2 className="date">Tuesday, March 9th</h2>
      <h3 className="time">8:00 PM - 8:00 AM</h3>
    </div>
    <div className="details">
      <h3>Details</h3>
      <i className="arrow" />
    </div>
  </div>

);
