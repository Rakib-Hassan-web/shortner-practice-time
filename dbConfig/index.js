

const mongoose = require('mongoose');

const DATABASECONNECT =()=>{
    return mongoose.connect(process.env.DB_STRING)
  .then(() => console.log('DATABASE CONNECTED !'));

}


module.exports= DATABASECONNECT