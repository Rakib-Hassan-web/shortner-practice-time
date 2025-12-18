const express = require('express')
require('dotenv').config()

const dbconnect = require('./dbConfig')

const app = express()

app.use(express.json())


dbconnect()





app.listen(8000, () => {
    console.log('Server Running on port 8000 ')
})