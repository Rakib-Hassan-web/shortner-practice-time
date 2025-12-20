

const express = require('express')
const { UrlShortner } = require('../controllers/shortnerController')
const authMiddlewere = require('../middleware/authmiddlewere')


const routee =express.Router()

routee.post('/create' ,authMiddlewere,UrlShortner)





module.exports= routee