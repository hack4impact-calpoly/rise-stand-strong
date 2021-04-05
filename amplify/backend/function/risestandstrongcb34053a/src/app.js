/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

var express = require('express');
var bodyParser = require('body-parser');
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

// Swagger
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerSettings = require('./swaggerSettings.json');
const specs = swaggerJsdoc(swaggerSettings);

// Routers
const announcementsRouter = require('./routes/announcements');
const shiftsRouter = require('./routes/shifts');

// declare a new express app
var app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Headers', '*');
   next();
});

// Use Routers
app.use('/announcements', announcementsRouter);
app.use('/shifts', shiftsRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/docs');

app.get('/', (req, res) => {
   res.send('RISE/Stand Strong');
});

// Change the port here
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
   console.log(`App listening on port ${PORT}`);
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
