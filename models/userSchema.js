

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const Schema = mongoose.Schema;


const UserSchema = new Schema({

    fullName:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
          type:String,
        required: true,
        
    }
},{timestamps:true});


// ============= hash  pass----------=========


UserSchema.pre('save', async function () {


    if(!this.isModified('password')) return

    const salt = await bcrypt.genSalt(10)

    this.password= await bcrypt.hash(this.password ,salt)
})

// =============  compare pass----------=========

UserSchema.methods.ComparePAss = async function (Candidatepass) {
    return  await bcrypt.compare(Candidatepass,this.password )
}





module.exports =mongoose.model('allusers' , UserSchema)









