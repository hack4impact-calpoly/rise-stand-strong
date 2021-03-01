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
 * GET all announcements from announcements table in DynamoDB.
 * Returns sorted (high -> low) list. Throws error from DynamoDB if one occurs.
 *
 */
async function getAnnouncements(){
    function sortTable(data){
        const topfive = [];
        data.Items.forEach(element => {
            topfive.push(element);
        });
        topfive.sort((a, b) => b.createdAt - a.createdAt);
        return topfive;
    };
    const docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
        TableName : 'announcementsV2',
    };

    try{
        let data = await docClient.scan(params).promise();
        data = sortTable(data);
        return data;
    }
    catch (err){
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
        TableName: 'shiftsV2',
        Item: {
            pk: 'RSS',
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


async function queryShiftsRange(startTimestamp, endTimestamp) {
    const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10'});
    var params = {
        TableName : "shiftsV2",
        KeyConditionExpression: "#pk = :rss AND startTimestamp BETWEEN :start AND :end",
        ExpressionAttributeNames:{
            "#pk": "pk"
        },
        ExpressionAttributeValues: {
            ":rss": 'RSS',
            ":start": startTimestamp,
            ":end": endTimestamp,
        }
    };

    try {
        const dbResponse = await docClient.query(params).promise();
        return dbResponse.Items;
    } catch(err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    postAnnouncement,
    getAnnouncements
    postShift,
    queryShiftsRange,
};