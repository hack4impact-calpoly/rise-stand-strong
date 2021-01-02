const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('RISE/Stand Strong')
})
  
app.listen(3000, () => {
    console.log('App listening on port 3000')
})