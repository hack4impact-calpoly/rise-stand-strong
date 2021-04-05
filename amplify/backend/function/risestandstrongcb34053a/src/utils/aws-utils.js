const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

AWS.config.update({ region: 'us-west-2' });

/**
 * POST a new announcement into the announcements table in DynamoDB.
 * Returns nothing. Throws error from DynamoDB if one occurs.
 *
 * @param {*} announcementBody
 */
async function postAnnouncement(announcementBody) {
   const docClient = new AWS.DynamoDB.DocumentClient();
   const params = {
      TableName: 'announcementsV3',
      Item: {
         announcementId: uuidv4(),
         ...announcementBody,
      },
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
async function getAnnouncements() {
   function sortTable(data) {
      const topfive = [];
      data.Items.forEach((element) => {
         topfive.push(element);
      });
      topfive.sort((a, b) => b.createdAt - a.createdAt);
      return topfive;
   }
   const docClient = new AWS.DynamoDB.DocumentClient();
   var params = {
      TableName: 'announcementsV3',
   };

   try {
      let data = await docClient.scan(params).promise();
      data = sortTable(data);
      return data;
   } catch (err) {
      console.log(err);
      throw err;
   }
}

/**
 * Put updated announcement into table in DynamoDB.
 * Returns nothing.
 *
 * @param {String} announcementId
 * @param {*} announcementBody
 */
async function putAnnouncement(announcementId, announcementBody) {
   const docClient = new AWS.DynamoDB.DocumentClient();
   var params = {
      TableName: 'announcementsV3', //current tablename
      Key: {
         //used to find/not find desired object
         announcementId: announcementId,
      },
      UpdateExpression:
         'set title = :title, author = :author, createdAt = :createdAt, link = :link, content = :content', //tells what to update
      ConditionExpression: 'attribute_exists(announcementId)', //only do the update if the item exits
      ExpressionAttributeValues: {
         //assigns values to updates
         ':title': announcementBody.title,
         ':author': announcementBody.author,
         ':createdAt': announcementBody.createdAt,
         ':link': announcementBody.link,
         ':content': announcementBody.content,
      },
   };

   try {
      await docClient.update(params).promise();
   } catch (err) {
      console.log(err);
      throw err;
   }
}

/**
 * DELETE an announcement of the specified announcementId from the announcements
 * table in DynamoDB. Throws error from DynamoDB if one occurs.
 *
 * @param {String} announcementId
 */
async function deleteAnnouncement(announcementId) {
   const docClient = new AWS.DynamoDB.DocumentClient();
   const params = {
      TableName: 'announcementsV3',
      Key: {
         announcementId,
      },
   };

   try {
      return await docClient.delete(params).promise();
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
      TableName: 'shiftsV2',
      Item: {
         pk: 'RSS',
         ...shiftBody,
      },
   };

   try {
      await docClient.put(params).promise();
   } catch (err) {
      console.log(err);
      throw err;
   }
}

/**
 * GET a specific shift given a startTimestamp from the shifts table in DynamoDB.
 * Returns a shift. Throws error from DynamoDB if one occurs.
 *
 * @param {*} startTimestamp
 */
async function getShift(startTimestamp) {
   const docClient = new AWS.DynamoDB.DocumentClient();
   const params = {
      TableName: 'shiftsV2',
      Key: {
         pk: 'RSS',
         startTimestamp,
      },
   };

   try {
      let shiftResp = await docClient.get(params).promise();
      return shiftResp.Item;
   } catch (err) {
      console.log(err);
      throw err;
   }
}

/**
 * PUT Modifies a shift with the specified startTimestamp from the shifts table in DynamoDB.
 * Any ommitted fields in the request body will not be updated.
 * Returns nothing. Throws error from DynamoDB if one occurs.
 *
 * @param {*} shiftBody
 * @param {*} startTimestamp
 */
async function putShift(shiftBody, startTimestamp) {
   const docClient = new AWS.DynamoDB.DocumentClient();
   const params = {
      TableName: 'shiftsV2',
      Item: {
         pk: 'RSS',
         startTimestamp,
         ...shiftBody,
      },
   };

   try {
      await docClient.put(params).promise();
   } catch (err) {
      console.log(err);
      throw err;
   }
}

/**
 * Function that returns all of the shift objects in DynamoDB that have
 * startTimestamps inbetween startTimestamp and endTimestamp.
 *
 * @param {Number} startTimestamp
 * @param {Number} endTimestamp
 */
async function queryShiftsRange(startTimestamp, endTimestamp) {
   const docClient = new AWS.DynamoDB.DocumentClient({
      apiVersion: '2012-08-10',
   });
   var params = {
      TableName: 'shiftsV2',
      KeyConditionExpression:
         '#pk = :rss AND startTimestamp BETWEEN :start AND :end',
      ExpressionAttributeNames: {
         '#pk': 'pk',
      },
      ExpressionAttributeValues: {
         ':rss': 'RSS',
         ':start': startTimestamp,
         ':end': endTimestamp,
      },
   };

   try {
      const dbResponse = await docClient.query(params).promise();
      return dbResponse.Items;
   } catch (err) {
      console.log(err);
      throw err;
   }
}

/**
 * Function that takes in a startTimestamp and deletes the corresponding
 * shift from DynamoDB. Throws an error if not found.
 *
 * @param {Number} startTimestamp
 */
async function deleteShift(startTimestamp) {
   const docClient = new AWS.DynamoDB.DocumentClient({
      apiVersion: '2012-08-10',
   });
   const params = {
      TableName: 'shiftsV2',
      Key: {
         pk: 'RSS',
         startTimestamp,
      },
   };

   try {
      return await docClient.delete(params).promise();
   } catch (err) {
      console.log(err);
      throw err;
   }
}

module.exports = {
   getAnnouncements,
   deleteAnnouncement,
   postAnnouncement,
   putAnnouncement,
   postShift,
   getShift,
   putShift,
   queryShiftsRange,
   deleteShift,
};
