const jwt = require('jsonwebtoken');



const GenarateAccTkn = (payload)=>{

var token = jwt.sign( payload,process.env.JWT_SEC);


return token;


}


const VerifyToken =(token)=>{

    const decoded = jwt.verify(token,process.env.JWT_SEC );

    return decoded
}


module.exports = {GenarateAccTkn ,VerifyToken}
