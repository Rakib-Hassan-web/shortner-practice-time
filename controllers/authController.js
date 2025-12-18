const userSchema = require("../models/userSchema");
const { isvalidEmail, isvalidPassword } = require("../utils/validation");


const registration = async(req,res)=>{



    const {fullName,email,password}=req.body;

    if (!fullName) return res.status(400).send({messege:'FullName is required  '})
    if (!email) return res.status(400).send({messege:'email is required'})
    if (!isvalidEmail(email)) return res.status(400).send({messege:'Please Enter a valid email'})
    if (!password) return res.status(400).send({messege:'password is required'})
    if (!isvalidPassword(password)) return res.status(400).send({messege:' Invalid password '})

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




const login = async(req,res)=>{


    const {email,password}=req.body;

    if (!email) return res.status(400).send({messege:'FullName is required  '})
    if (!isvalidEmail(email)) return res.status(400).send({messege:'Please Enter a valid email'})
         if (!password) return res.status(400).send({messege:'password is required'})
    if (!isvalidPassword(password)) return res.status(400).send({messege:' Invalid password '})


        const existingUSer = await userSchema.findOne({email})

        if(!existingUSer) return res.status(400).send({messege:'No User Found In this Email'})




            res.status(200).send({messege:' Login su '})


}










module.exports={registration , login}