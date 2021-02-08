const express = require('express')
const bodyParser = require('body-parser')
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerSettings = require('./swaggerSettings.json');
const { ModalTitle } = require('react-bootstrap');
const specs = swaggerJsdoc(swaggerSettings);

const announcementsRouter = require('./routes/announcements');

const app = express()
app.use(bodyParser.json())
const PORT = process.env.PORT || 3001;

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
app.get('/docs')

app.use('/announcements', announcementsRouter);

app.get('/', (req, res) => {
    res.send('RISE/Stand Strong')
})
  
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

module.exports = app;