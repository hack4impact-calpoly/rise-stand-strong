/* eslint-disable */
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = momentLocalizer(moment);

// These are the events that are displayed in the calendar
const exampleEvents = [
   {
      title: 'volunteer shift 1',
      start: new Date(2021, 0, 22, 9),
      end: new Date(2021, 0, 22, 11),
      allDay: false,
   }, 
   {
      title: 'volunteer shift 2',
      start: new Date(2021, 0, 22, 11),
      end: new Date(2021, 0, 22, 13),
      allDay: false,
   }, 
   {
      title: 'volunteer shift 3',
      start: new Date(2021, 0, 22, 13),
      end: new Date(2021, 0, 22, 15),
      allDay: false,
   }, 
];

export default () => (
   <div style={{height: '750px'}}>
   <Calendar
     localizer={localizer}
     events={exampleEvents}
     //Whatever function is passed in here is called when an event is clicked
     onSelectEvent={(event) => { console.log(event) }}
   />
 </div>
);
