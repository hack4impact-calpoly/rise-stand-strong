const express = require('express');
const { getAnnouncements } = require('../utils/aws-utils');
const { postAnnouncement } = require('../utils/aws-utils');
const { putAnnouncement } = require('../utils/aws-utils');
const router = express.Router();
const AWS_Auth = require("aws-amplify");

/**
 * @swagger
 *
 * components:
 *   schemas:
 *     Announcement:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - text
 *         - createdAt
 *         - link
 *       properties:
 *         announcementId:
 *           type: integer
 *           description: The auto-generated id of the announcement.
 *         title:
 *           type: string
 *           description: The title of the announcement.
 *         author:
 *           type: string
 *           description: Who wrote the announcement
 *         text:
 *           type: string
 *           description: The information displayed in the announcement card.
 *         createdAt:
 *           type: string
 *           format: YYYY-MM-DDTHH:MM:SS
 *           description: The date of the record creation.
 *         link:
 *           type: string
 *           description: A link to the announcement details.
 *       example:
 *          id: 1
 *          title: Valentine's Day Work Schedule
 *          author: John Doe
 *          text: With the upcoming Valentine's day comes an altered work schedule! Click the link to see any changes.
 *          createdAt: 2021-01-30T10:30:00
 *          link: https://rise/updates/vday
 */

 /**
 * @swagger
 * 
 * /announcements:
 *    get:
 *      summary: Get a list of all announcements in decending date order
 *      tags: [Announcements]
 *      requestBody:
 *         required: false
 *      responses:
 *         "200":
 *            description: A list all sorted announcements.
 *            content:
 *               application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                        $ref: '#/components/schemas/Announcement'
 */
router.get('/', async (req, res) => {
    try{
        const data = await getAnnouncements();
        res.json(data);
    }
    catch (err){
        console.log(err)
        res.status(400).json(err);
    }
})

/**
 * @swagger
 * 
 * /announcements:
 *    post:
 *      summary: Creates a new announcement
 *      tags: [Announcements]
 *      requestBody:
 *         required: true
 *         content:
 *           application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Announcement'
 *         responses:
 *             "200":
 *                description: Announcement created successfully
 *             "400":
 *                description: Body not formatted correctly
 *             
 */
router.post('/', async (req, res) => {
    const body = req.body;

    try {
        await postAnnouncement(body);
        res.send('Success');
    }
    catch (err) {
        res.status(400).json({ error });
    }
})

/**
 * @swagger
 * 
 * /announcements/{announcementId}:
 *    put:
 *      summary: Modify the contents of the specified announcement
 *      tags: [Announcements]
 *      requestBody:
 *         required: true
 *         content:
 *            application/json:
 *               schema:
 *                  $ref: '#/components/schemas/Announcement'
 *      responses:
 *         "200":
 *            description: Announcement updated successfully
 *         "403":
 *            description: Admin privileges required
 *         "404":
 *            description: Announcement with the specified announcementId does not exist
 */

router.put('/:announcementId', async (req, res) => {
    const data = req.body;
    if (!AWS_Auth.Auth.currentAuthenticatedUser()){
        res.status(403)
    }
     else{
        const recieved = await putAnnouncement(data);
        if (typeof recieved === undefined){
            res.status(404);
        }
        res.status(200).json(data);
    }
})

/**
 * @swagger
 * 
 * /announcements/{announcementId}:
 *    delete:
 *      summary: Delete the announcement with the specified announcementId
 *      tags: [Announcements]
 *      requestBody:
 *         required: false
 *      responses:
 *         "200":
 *            description: Announcement deleted successfully
 *         "403":
 *            description: Admin privileges required
 *         "404":
 *            description: Announcement with the specified announcementId does not exist
 */
router.delete('/:announcementId', async (req, res) => {
    res.end();
})

module.exports = router;