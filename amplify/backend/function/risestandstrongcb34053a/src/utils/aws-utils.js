const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

/**
 * POST a new announcement into the announcements table in DynamoDB.
 * Returns nothing. Throws error from DynamoDB if one occurs.
 * 
 * @param {*} announcementBody 
 */
async function postAnnouncement(announcementBody) {
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: 'announcements',
        Item: {
            'id': uuidv4(),
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


async function getAnnouncements(){
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: 'announcements',
        Key: {
            'id': "1"
        }
    };

    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            return data;
        }
    });
}

module.exports = {
    postAnnouncement,
    getAnnouncements
};