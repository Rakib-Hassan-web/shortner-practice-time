

const express = require('express')
const { UrlShortner } = require('../controllers/shortnerController')


const routee =express.Router()

routee.post('/create' ,UrlShortner)





module.exports= routee