const { VerifyToken } = require("../utils/token")



const authMiddlewere =(req,res,next)=>{
 try {
    const token =req.headers.acc_token
    const decoded =VerifyToken(token)


 } catch (error) {
    next()
    console.log(error);

    
 }
    
}

module.exports = authMiddlewere





