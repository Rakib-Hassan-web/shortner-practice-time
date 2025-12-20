const express = require('express')
require('dotenv').config()
const DATABASECONNECT = require('./dbConfig')
const cookieParser = require('cookie-parser')
const routee = require('./routes')
const app = express()

app.use(express.json())
app.use(cookieParser())



DATABASECONNECT()
app.use(routee)


app.listen(8000, () => {
  console.log("server is running on port 8000")
})
