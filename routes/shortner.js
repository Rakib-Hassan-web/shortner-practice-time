

const express = require('express')
const { UrlShortner, GetAllHistory } = require('../controllers/shortnerController')
const { authMiddlewere, isAuthintic } = require('../middleware/authmiddlewere')


const routee =express.Router()

routee.post('/create' ,isAuthintic,UrlShortner)

routee.post('/getall' ,authMiddlewere,GetAllHistory)





module.exports= routee