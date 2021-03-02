const express = require('express');
const router = express.Router();
const { postShift, queryShiftsRange } = require('../utils/aws-utils');
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
 *                   startTimestamp: 
 *                      type: String
 *                      description: The start timestamp for this shift.
 *                   endTimestamp: 
 *                      type: String
 *                      description: The end timestamp for this shift.
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
 *                   startTimestamp: 1609520400
 *                   endTimestamp: 1609520800
 *                   primary: 'Jack Fales'
 *                   secondary: 'Justin Poist'
 *                   backup: ''
 *      responses:
 *         "200":
 *             description: The created Shift.
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
   }

   try {
       await postShift(newShift);
       res.send(newShift);
   }
   catch (err) {
      // TODO: Once we have the user pools and IAM set up throw a 403 if not
      // allowed to access writing to a table
       res.status(400).json(err);
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
 *           name: startTimestamp
 *           required: true
 *           schema:
 *              type: Number
 *         - in: query
 *           name: endTimestamp
 *           required: true
 *           schema:
 *              type: Number
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
   const { startTimestamp, endTimestamp } = req.query;
   const parsedStartTS = parseInt(startTimestamp);
   const parsedEndTS = parseInt(endTimestamp);

   if(Number.isNaN(parsedStartTS) || Number.isNaN(parsedEndTS)) {
      res.status(400).send({
         error: 'Invalid query parameters, startTimestamp and endTimestamp are both required and must be Numbers.',
      });
   } else {
      try{
         const matchingShifts = await queryShiftsRange(parsedStartTS, parsedEndTS);
         res.send(matchingShifts);
      } catch(err) {
         console.log(err);
         res.status(400).send(err);
      }
   }
});


/**
 * @swagger
 * 
 * /shifts/{startTimestamp}:
 *    get:
 *      summary: Gets a shift with the specified startTimestamp
 *      tags: [Shifts]
 *      parameters:
 *         - name: startTimestamp
 *           in: path
 *           required: true
 *           description: startTimestamp of desired shift.
 *           schema:
 *              type: Number
 *      responses:
 *         "200":
 *            description: The Shift with the specified startTimestamp.
 *            content:
 *               application/json:
 *                  schema:
 *                    $ref: '#/components/schemas/Shift'
 *         "404":
 *            description: startTimestamp not found
 */
router.get('/:startTimestamp', async (req, res) => {
   let startTimestamp = req.params.startTimestamp;
   try {
     const shift = await getShift(startTimestamp);
     res.send(shift)
   }
   catch (err) {
      res.status(404).json({ error });
   }
})


/**
 * @swagger
 * 
 * /shifts/{startTimeStamp}:
 *    put:
 *      summary: Modifies a shift with the specified startTimestamp. Any ommitted fields in the request body will not be updated.
 *      tags: [Shifts]
 *      parameters:
 *         - name: startTimestamp
 *           in: path
 *           required: true
 *           description: startTimestamp of the specific Shift
 *           schema:
 *              type: Number
 *      requestBody:
 *         required: true
 *         content:
 *           application/json:
 *              schema:
 *                 properties:
 *                   startTimestamp: 
 *                      type: Number
 *                      description: The new start timestamp for this shift.
 *                   endTimestamp: 
 *                      type: Number
 *                      description: The new end timestamp for this shift.
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
 *                   startTimestamp: 1609520400
 *                   endTimestamp: 1613419200
 *                   primary: 'Jack Fales'
 *                   secondary: 'Justin Poist'
 *                   backup: ''
 *      responses:
 *         "200":
 *            description: Success
 *         "404":
 *            description: startTimestamp not found
 */
router.put('/:startTimestamp', async (req, res) => {
   res.end();
})


/**
 * @swagger
 * 
 * /shifts/{startTimeStamp}:
 *    delete:
 *      summary: Deletes a shift with the specified startTimeStamp
 *      tags: [Shifts]
 *      parameters:
 *         - name: startTimeStamp
 *           in: path
 *           required: true
 *           description: startTimeStamp of the specific Shift
 *           schema:
 *              type: String
 *      responses:
 *         "200":
 *            description: Success
 *         "403":
 *            description: Admin privileges required
 *         "404":
 *            description: startTimestamp not found
 */
router.delete('/:startTimestamp', async (req, res) => {
   res.end();
})


/**
 * @swagger
 * components:
 *   schemas:
 *     Shift:
 *       type: object
 *       required:
 *         - startTimestamp
 *         - endTimestamp
 *       properties:
 *         pk:
 *           type: String
 *           description: The partition key for this shift. (Always RSS)
 *         startTimestamp:
 *           type: Number
 *           description: The start timestamp for this shift.
 *         endTimestamp:
 *           type: Number
 *           description: The end timestamp for this shift.
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
 *          pk: 'RSS'
 *          startTimestamp: 1613419200
 *          endTimestamp: 1613419400
 *          primary: 'Jack Fales'
 *          secondary: 'Justin Poist'
 *          backup: ''
 */


module.exports = router;