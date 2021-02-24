/* eslint-disable */
const axios = require('axios');

const BASE_URL = 'https://1nazz9rwh9.execute-api.us-west-2.amazonaws.com/prod';

const ANNOUNCEMENTS = '/announcements';
const SHIFTS = '/shifts';

async function postAnnouncement(userSub, announcementBody) {

    await axios.post(`${BASE_URL}/${ANNOUNCEMENTS}`, { ...announcementBody });
}

async function getAnnouncements(userSub) {
    await axios.get(`${BASE_URL}/${ANNOUNCEMENTS}`)
      .catch(function (error) {
        // handle error
        console.log("ERROR " + error);
      });
}


module.exports = {
    postAnnouncement,
    getAnnouncements
};