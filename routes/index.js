

const express = require('express')

const authroute = require('./auth')

const routee =express.Router()

routee.use('/auth' ,authroute)


module.exports= routee