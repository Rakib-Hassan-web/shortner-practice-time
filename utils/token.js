const jwt = require('jsonwebtoken');



const GenarateAccTkn = (payload)=>{

var token = jwt.sign( payload,process.env.JWT_SEC);


return token;


}


module.exports = GenarateAccTkn