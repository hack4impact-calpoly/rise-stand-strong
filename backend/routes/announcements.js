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
 *           format: date
 *           description: The date of the record creation.
 *         link:
 *           type: string
 *           description: A link to the announcement details.
 *       example:
 *          title: Valentine's Day Work Schedule
 *          author: John Doe
 *          text: With the upcoming Valentine's day comes an altered work schedule! Click the link to see any changes.
 *          createdAt: 02/01/2021
 *          link: https://rise/updates/vday
 */

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
 *             description: The created announcement.
 *             content:
 *                application/json:
 *                   schema:
 *                   $ref: '#/components/schemas/Announcement'
 */
router.post('/', async (req, res) => {
    res.end();
})

/**
 * @swagger
 * 
 * /announcements/{id}:
 *    get:
 *      summary: Get an announcment with the specified id
 *      tags: [Announcements]
 *      requestBody:
 *         required: false
 *         content:
 *           application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Announcement'
 *         responses:
 *             "200":
 *             description: The announcment with the specified id.
 *             content:
 *                application/json:
 *                   schema:
 *                   $ref: '#/components/schemas/Announcement'
 */
router.get('/:id', async (req, res) => {
    res.end();
})

/**
 * @swagger
 * 
 * /announcements:
 *    get:
 *      summary: Get a list of the 5 most recent announcements
 *      tags: [Announcements]
 *      requestBody:
 *         required: false
 *         content:
 *           application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Announcement'
 *         responses:
 *             "200":
 *             description: A list of the 5 most recent announcements.
 *             content:
 *                application/json:
 *                   schema:
 *                   $ref: '#/components/schemas/Announcement'
 */
router.get('/', async (req, res) => {
    res.end();
})

module.exports = router;