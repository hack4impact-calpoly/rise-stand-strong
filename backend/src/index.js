const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

/**
 * @api {get} / Request User information
 * @apiGroup BOB
 *
 * @apiParam {Number} id User's unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
app.get('/', (req, res) => {
    res.send('RISE/Stand Strong')
})
  
app.listen(3000, () => {
    console.log('App listening on port 3000')
})