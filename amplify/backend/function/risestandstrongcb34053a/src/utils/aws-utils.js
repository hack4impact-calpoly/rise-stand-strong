const AWS = require('aws-sdk');

/**
 * POST a new announcement into the announcements table in DynamoDB.
 * Returns nothing. Throws error from DynamoDB if one occurs.
 * 
 * @param {*} id 
 * @param {*} announcementBody 
 */
async function postAnnouncement(id, announcementBody) {
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: 'announcements',
        Item: {
            'id': id,
            ...announcementBody
        }
    };

    try {
        await docClient.put(params).promise();
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    postAnnouncement
};