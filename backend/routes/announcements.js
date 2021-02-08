const express = require('express');
const router = express.Router();

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
 *         id:
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
 *           format: YYYY-MM-DD
 *           description: The date of the record creation.
 *         link:
 *           type: string
 *           description: A link to the announcement details.
 *       example:
 *          id: 1
 *          title: Valentine's Day Work Schedule
 *          author: John Doe
 *          text: With the upcoming Valentine's day comes an altered work schedule! Click the link to see any changes.
 *          createdAt: 2021-01-30
 *          link: https://rise/updates/vday
 */

 /**
 * @swagger
 * 
 * /announcements:
 *    get:
 *      summary: Get a list of the 5 most recent announcements
 *      tags: [Announcements]
 *      requestBody:
 *         required: false
 *      responses:
 *         "200":
 *            description: A list of the 5 most recent announcements.
 *            content:
 *               application/json:
 *                  schema:
 *                     type: array
 *                     maxItems: 5
 *                     items:
 *                        $ref: '#/components/schemas/Announcement'
 */
router.get('/', async (req, res) => {
    res.end();
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
    res.end();
})

/**
 * @swagger
 * 
 * /announcements/{id}:
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
 *            description: Announcement with the specified id does not exist
 */
router.put('/', async (req, res) => {
    res.end();
})

/**
 * @swagger
 * 
 * /announcements/{id}:
 *    delete:
 *      summary: Delete the announcement with the specified id
 *      tags: [Announcements]
 *      requestBody:
 *         required: false
 *      responses:
 *         "200":
 *            description: Announcement deleted successfully
 *         "403":
 *            description: Admin privileges required
 *         "404":
 *            description: Announcement with the specified id does not exist
 */
router.delete('/', async (req, res) => {
    res.end();
})

module.exports = router;