

const express = require('express')

const authroute = require('./auth')

const Urlroute = require('./shortner')
const { RedirectUrl } = require('../controllers/shortnerController')

const routee =express.Router()


routee.get('/', (req,res)=>{
    res.send('hello')
})

routee.use('/auth' ,authroute)

routee.use('/url' , Urlroute)

routee.get('/:id' , RedirectUrl)




module.exports= routee