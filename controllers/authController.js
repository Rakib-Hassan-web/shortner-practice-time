const userSchema = require("../models/userSchema");

const registration = async(req,res)=>{



    const {fullName,email,password}=req.body;

    if (!fullName) return res.status(400).send({messege:'FullName is required'})
    if (!email) return res.status(400).send({messege:'email is required'})
    if (!password) return res.status(400).send({messege:'password is required'})

        const existingUSer =  await userSchema.findOne({email});

        if(existingUSer) return res.status(400).send({messege:'User Already exist'})

            const newUser = new userSchema({
                fullName,
                email,
                password
            })
    
          await   newUser.save()


          res.status(201).send({messege:'Registration Successfull'})
}




const login =(req,res)=>{
res.send('Any ')
}










module.exports={registration , login}