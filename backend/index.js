const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Rise Stand Strong Backend API",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Hack4Impact",
          url: "https://calpoly.hack4impact.org/",
          email: "jackfales@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000/books",
        },
      ],
    },
    apis: ["./routes/books.js"],
  };
  
const specs = swaggerJsdoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('RISE/Stand Strong')
})
  
app.listen(3000, () => {
    console.log('App listening on port 3000')
})