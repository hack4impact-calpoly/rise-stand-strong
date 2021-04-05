/* eslint-disable */
const axios = require('axios');

const BASE_URL = 'https://1nazz9rwh9.execute-api.us-west-2.amazonaws.com/prod';

const ANNOUNCEMENTS = 'announcements';
const SHIFTS = 'shifts';

export async function postAnnouncement(announcementBody) {
   await axios.post(`${BASE_URL}/${ANNOUNCEMENTS}`, { ...announcementBody });
}

export async function getAnnouncements() {
   await axios.get(`${BASE_URL}/${ANNOUNCEMENTS}`);
}

export async function putAnnouncement(announcementId, announcementBody) {
   await axios.put(`${BASE_URL}/${ANNOUNCEMENTS}/${announcementId}`, {
      ...announcementBody,
   });
}

export async function deleteAnnouncement(announcementId) {
   await axios.delete(`${BASE_URL}/${ANNOUNCEMENTS}/${announcementId}`);
}

export async function postShift(shiftBody) {
   await axios.post(`${BASE_URL}/${SHIFTS}`, { ...shiftBody });
}

export async function getShift(startTimestamp) {
   return await axios.get(`${BASE_URL}/${SHIFTS}/${startTimestamp}`);
}

export async function getShiftsRange(startTimestamp, endTimestamp) {
   return await axios.get(
      `${BASE_URL}/${SHIFTS}?startTimestamp=${startTimestamp}&endTimestamp=${endTimestamp}`
   );
}

export async function deleteShift(startTimestamp) {
   await axios.delete(`${BASE_URL}/${SHIFTS}/${startTimestamp}`);
}
