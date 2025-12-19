

const express = require('express')

const authroute = require('./auth')

const Urlroute = require('./shortner')

const routee =express.Router()

routee.use('/auth' ,authroute)

routee.use('/url' , Urlroute)

routee.get('/:id' , (req,res)=>{
    res.send('rakib bhi')
})




module.exports= routee