

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