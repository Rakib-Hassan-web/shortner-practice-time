const { VerifyToken } = require("../utils/token")



const authMiddlewere =(req,res,next)=>{
 try {
    const token =req.cookies.accesToken
    const decoded =VerifyToken(token)

    next()
    
 } catch (error) {
    next()
    console.log(error);
    
    
    
 }
    
}

module.exports = authMiddlewere