
const registration =(req,res)=>{



    const {fullName,email,password}=req.body;

    if (!fullName) return res.status(400).send({messege:'FullName is required'})
    
}




const login =(req,res)=>{
res.send('Any ')
}










module.exports={registration , login}