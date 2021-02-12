import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";

const example = {
  shiftId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  startDateTime: '2021-02-15T09:00:00',
  endDateTime: '2021-02-15T12:00:00',
  primary: 'Jack Fales',
  secondary: 'Justin Poist',
  backup: '',
};

const Calendar = () => {
  const events = [{
    id: example.id,
    title: example.primary,
    start: example.startDateTime,
    end: example.endDateTime,
  }];

  return (
    <div>
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={events}
      />
    </div>
  );
};
export default Calendar;
