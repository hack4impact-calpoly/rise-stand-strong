import React from 'react';
import styled from 'styled-components';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import '@fullcalendar/daygrid/main.css';
import ExampleShifts from './ExampleShifts';
import LinkBar from '../LinkBar/LinkBar';

const CalendarContainer = styled.section`
   margin: 40px;
`;

const renderEvents = ExampleShifts.map((item) => {
   const singleEvent = {};

   singleEvent.id = item.id;
   singleEvent.title = item.primary;
   singleEvent.start = item.startDateTime;
   singleEvent.end = item.endDateTime;

   return singleEvent;
});

const Calendar = () => {
   const events = renderEvents;

   return (
      <div>
         <CalendarContainer>
            <FullCalendar
               defaultView="dayGridMonth"
               plugins={[dayGridPlugin]}
               events={events}
            />
         </CalendarContainer>
         <LinkBar />
      </div>
   );
};
export default Calendar;
