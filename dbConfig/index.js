
const mongoose = require('mongoose');

const dbconnect=()=>{
 return mongoose.connect(process.env.DB_STRING)
  .then(() => console.log('db Connected!'));
}




  module.exports = dbconnect