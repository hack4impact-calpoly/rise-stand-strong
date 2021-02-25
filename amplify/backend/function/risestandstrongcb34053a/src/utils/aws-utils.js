const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

AWS.config.update({region: 'us-west-2'});

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

/**
 * POST a new shift into the shifts table in DynamoDB.
 * Returns nothing. Throws error from DynamoDB if one occurs.
 * 
 * @param {*} shiftBody 
 */
async function postShift(shiftBody) {
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: 'shifts',
        Item: {

            ...shiftBody,
        }
    };

    try {
        await docClient.put(params).promise();
    } catch (err) {
        console.log(err);
        throw err;
    }
}

/**
 * GET a specific shift given a shiftId from the shifts table in DynamoDB.
 * Returns a shift. Throws error from DynamoDB if one occurs.
 * 
 * @param {*} shiftId 
 */
async function getShift(shiftId) {
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName: 'shifts',
        Key: {
            shiftId: shiftId
        }
    };
    try {
        let shift = await docClient.get(params).promise();
        return shift
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    postAnnouncement,
    postShift,
    getShift,
};