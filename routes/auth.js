const express = require('express')
const { registration, login } = require('../controllers/authController')



const routee =express.Router()


routee.post("/registration" ,registration)

routee.post("/login" ,login)


module.exports= routee