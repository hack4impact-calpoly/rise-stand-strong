const { CodeStarNotifications } = require('aws-sdk');
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


async function getAnnouncements(){
    function sortTable(data){
        const topfive = [];
        data.Items.forEach(element => {
            topfive.push(element);
        });
        topfive.sort((a, b) => a.createdAt - b.createdAt);
        topFive = topfive.slice(0, 5);
        return topFive;
    }
    const docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
        TableName: 'announcements',
        Key: {
            'id': "5"
        }
    };

    try{
        let data = await docClient.scan(params).promise();
        data = sortTable(data)
        return data;
    }
    catch (err){
        console.log(err)
    }
}

module.exports = {
    postAnnouncement,
    getAnnouncements
};