const express = require('express');
const router = express.Router();
const { postShift } = require('../utils/aws-utils');
const { getShift } = require('../utils/aws-utils');
const { v4: uuidv4 } = require('uuid');

/**
 * @swagger
 * 
 * /shifts:
 *    post:
 *      summary: Creates a new shift
 *      tags: [Shifts]
 *      requestBody:
 *         required: true
 *         content:
 *           application/json:
 *              schema:
 *                 properties:
 *                   startDateTime: 
 *                      type: String
 *                      format: YYYY-MM-DDTHH:MM:SS
 *                      description: The start date and time for this shift.
 *                   endDateTime: 
 *                      type: String
 *                      format: YYYY-MM-DDTHH:MM:SS
 *                      description: The end date and time for this shift.
 *                   primary: 
 *                      type: String
 *                      description: Full name for the primary volunteer on this shift.
 *                   secondary: 
 *                      type: String
 *                      description: Full name for the secondary volunteer on this shift.
 *                   backup: 
 *                      type: String
 *                      description: Full name for the backup volunteer on this shift.
 *                 example:
 *                   startDateTime: '2021-02-15T09:00:00'
 *                   endDateTime: '2021-02-15T12:00:00'
 *                   primary: 'Jack Fales'
 *                   secondary: 'Justin Poist'
 *                   backup: ''
 *      responses:
 *         "200":
 *             description: The created Shift. (Includes the shiftId)
 *             content:
 *                application/json:
 *                   schema:
 *                   $ref: '#/components/schemas/Shift'
 *         "403":
 *            description: Admin privileges required
 */
router.post('/', async (req, res) => {
   const newShift = {
      ...req.body,
      shiftId: uuidv4(),
   }

   try {
       await postShift(newShift);
       res.send(newShift);
   }
   catch (err) {
      // TODO: Once we have the user pools and IAM set up throw a 403 if not
      // allowed to access writing to a table
       res.status(400).json({ error });
   }
})


/**
 * @swagger
 * 
 * /shifts:
 *    get:
 *      summary: Lists all shift objects within the given time range
 *      tags: [Shifts]
 *      parameters:
 *         - in: query
 *           name: startDateTime
 *           required: true
 *           schema:
 *              type: String
 *              format: YYYY-MM-DDTHH:MM:SS
 *         - in: query
 *           name: endDateTime
 *           required: true
 *           schema:
 *              type: String
 *              format: YYYY-MM-DDTHH:MM:SS
 *           description: The start
 *      responses:
 *          "200":
 *             description: A list of all Shifts that match the time range given.
 *             content:
 *                application/json:
 *                   schema:
 *                      type: array
 *                      items: 
 *                         $ref: '#/components/schemas/Shift'
 */
router.get('/', async (req, res) => {
   res.end();
});


/**
 * @swagger
 * 
 * /shifts/{id}:
 *    get:
 *      summary: Gets a shift with the specified shiftId
 *      tags: [Shifts]
 *      parameters:
 *         - name: shiftId
 *           in: path
 *           required: true
 *           description: shiftId of the desired Shift
 *           schema:
 *              type: String
 *      responses:
 *         "200":
 *            description: The Shift with the specified id.
 *            content:
 *               application/json:
 *                  schema:
 *                    $ref: '#/components/schemas/Shift'
 *         "404":
 *            description: shiftId not found
 */
router.get('/:shiftId', async (req, res) => {
   try {
     shiftId = req.params.shiftId
     const shift = await getShift(shiftId);
     res.send(shift)
   }
   catch (err) {
      res.status(404).json({ error });
   }
})


/**
 * @swagger
 * 
 * /shifts/{id}:
 *    put:
 *      summary: Modifies a shift with the specified shiftId. Any ommitted fields in the request body will not be updated.
 *      tags: [Shifts]
 *      parameters:
 *         - name: shiftId
 *           in: path
 *           required: true
 *           description: shiftId of the specific Shift
 *           schema:
 *              type: String
 *      requestBody:
 *         required: true
 *         content:
 *           application/json:
 *              schema:
 *                 properties:
 *                   startDateTime: 
 *                      type: String
 *                      format: YYYY-MM-DDTHH:MM:SS
 *                      description: The new start date and time for this shift.
 *                   endDateTime: 
 *                      type: String
 *                      format: YYYY-MM-DDTHH:MM:SS
 *                      description: The new end date and time for this shift.
 *                   primary: 
 *                      type: String
 *                      description: Full name for the new primary volunteer on this shift.
 *                   secondary: 
 *                      type: String
 *                      description: Full name for the new secondary volunteer on this shift.
 *                   backup: 
 *                      type: String
 *                      description: Full name for the new backup volunteer on this shift.
 *                 example:
 *                   startDateTime: '2021-02-15T09:00:00'
 *                   endDateTime: '2021-02-15T12:00:00'
 *                   primary: 'Jack Fales'
 *                   secondary: 'Justin Poist'
 *                   backup: ''
 *      responses:
 *         "200":
 *            description: Success
 *         "404":
 *            description: shiftId not found
 */
router.put('/:shiftId', async (req, res) => {
   res.end();
})


/**
 * @swagger
 * 
 * /shifts/{id}:
 *    delete:
 *      summary: Deletes a shift with the specified shiftId
 *      tags: [Shifts]
 *      parameters:
 *         - name: shiftId
 *           in: path
 *           required: true
 *           description: shiftId of the specific Shift
 *           schema:
 *              type: String
 *      responses:
 *         "200":
 *            description: Success
 *         "403":
 *            description: Admin privileges required
 *         "404":
 *            description: shiftId not found
 */
router.delete('/:shiftId', async (req, res) => {
   res.end();
})


/**
 * @swagger
 * components:
 *   schemas:
 *     Shift:
 *       type: object
 *       required:
 *         - shiftId
 *         - startDateTime
 *         - endDateTime
 *       properties:
 *         shiftId:
 *           type: String
 *           description: Unique auto-generated ID used to identify a specific shift.
 *         startDateTime:
 *           type: String
 *           format: YYYY-MM-DDTHH:MM:SS
 *           description: The start date and time for this shift.
 *         endDateTime:
 *           type: String
 *           format: YYYY-MM-DDTHH:MM:SS
 *           description: The end date and time for this shift.
 *         primary:
 *           type: string
 *           description: Full name for the primary volunteer on this shift.
 *         secondary:
 *           type: string
 *           description: Full name for the secondary volunteer on this shift.
 *         backup:
 *           type: string
 *           description: Full name for the backup volunteer on this shift.
 *       example:
 *          shiftId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
 *          startDateTime: '2021-02-15T09:00:00'
 *          endDateTime: '2021-02-15T12:00:00'
 *          primary: 'Jack Fales'
 *          secondary: 'Justin Poist'
 *          backup: ''
 */


module.exports = router;