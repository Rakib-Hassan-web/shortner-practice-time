const express = require('express')
require('dotenv').config()
const DATABASECONNECT = require('./dbConfig')
const app = express()

app.use(express.json())


DATABASECONNECT()



app.listen(8000, () => {
  console.log("server is running on port 8000")
})
