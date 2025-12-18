const express = require('express')
require('dotenv').config()
const DATABASECONNECT = require('./dbConfig')
const routee = require('./routes')
const app = express()

app.use(express.json())


DATABASECONNECT()
app.use(routee)


app.listen(8000, () => {
  console.log("server is running on port 8000")
})
