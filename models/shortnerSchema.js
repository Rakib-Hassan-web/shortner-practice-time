

const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const ShortnerSchema = new Schema({

    LongUrl:{
        type:String,
        required: true,
    },
     ShortUrl:{
        type:String,
        required: true,
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"allusers"
    },
    VisitHistory:[
        {
            VisitTime:{
                type:Date,
                default:Date.now()
            }
        },
    ]
},{timestamps:true});



module.exports= mongoose.model("ShortnerUrl" ,ShortnerSchema)










// const randomstr = (length = 5) => {

//   const carecters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
//   let randomstring = '';

//   for (let i = 0; i < length; i++) {
//     const randomgenerate = Math.floor(Math.random() * carecters.length);
//     randomstring += carecters[randomgenerate];
//   }

//   return randomstring;
// }

// console.log(randomstr());     
// console.log(randomstr(10));    
