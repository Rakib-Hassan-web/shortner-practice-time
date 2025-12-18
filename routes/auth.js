const express = require('express')



const routee =express.Router()


routee.post("/registration" ,(req,res)=>{
    res.send('hello rakib')
})


module.exports= routee