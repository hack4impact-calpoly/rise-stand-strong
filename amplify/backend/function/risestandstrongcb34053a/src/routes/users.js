const express = require('express');
const router = express.Router();
const {
   listUsers,
} = require('../utils/aws-utils');

/**
 * @swagger
 *
 * /users:
 *    get:
 *      summary: Lists all users for the RSS application.
 *      tags: [Users]
 *      responses:
 *         "200":
 *            description: List of all Users
 *            content:
 *               application/json:
 *                  schema:
 *                    $ref: '#/components/schemas/User'
 */
router.get('/', async (req, res) => {
   const USER_POOL_IDS = ['us-west-2_P46uOdTPF'];

   try {
      const users = await listUsers(USER_POOL_IDS);
      res.send(users);
   } catch (err) {
      res.status(400).json(err);
   }
});

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - sub
 *       properties:
 *         sub:
 *           type: String
 *           description: Unique user identifier.
 *         phone_number:
 *           type: String
 *           description: The User's phone number
 *         email:
 *           type: String
 *           description: The User's email address.
 *         email_verified:
 *           type: string
 *           description: Whether or not the User's email is verified.
 *         phone_number_verified:
 *           type: string
 *           description: Whether or not the User's phone number is verified.
 *         given_name:
 *           type: string
 *           description: User's first name.
*         family_name:
 *           type: string
 *           description: User's last name.
 *       example:
 *          sub: '0664a433-0fbb-4fd3-ad81-fac53b3106ca'
 *          email_verified: "true"
 *          phone_number_verified: "true"
 *          phone_number: '+12222222222'
 *          email: 'test@gmail.com'
 */

module.exports = router;