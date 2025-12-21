const { VerifyToken } = require("../utils/token")







const isAuthintic =(req,res,next)=>{
 try {
    const token =req.headers.acc_token
    const decoded =VerifyToken(token)


   
   console.log(  decoded)
   req.user =decoded
    next();
 } catch (error) {
    next()
    console.log(error);

    
 }
    
}


const authMiddlewere =(req,res,next)=>{
 try {
    const token =req.headers.acc_token
    const decoded =VerifyToken(token)

    if(!decoded) return res.status(401).send({message :"unauthorized access"})

   req.user =decoded
    next();
 } catch (error) {

  res.status(500).send({message :"unauthorized request"})


    
 }
    
}


module.exports ={isAuthintic, authMiddlewere}





