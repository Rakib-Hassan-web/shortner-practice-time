

const express = require('express')

const authroute = require('./auth')

const Urlroute = require('./shortner')

const routee =express.Router()

routee.use('/auth' ,authroute)

routee.use('/url' , Urlroute)





module.exports= routee