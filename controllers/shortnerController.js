const { isvalidUrl } = require("../utils/validation");

// ----------RAndom string genarate function---------

const GenarateRAndomStr = ( length = 5)=>{
     const carecters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
     let RandomStr ='';

     for( let i = 0;i< length;i++){

        let RandomNumber =Math.floor(Math.random() * carecters.length);
        RandomStr += carecters[RandomNumber]
     }
     return RandomStr
}


console.log(GenarateRAndomStr());



// ----------UrlShortner-------------
const UrlShortner =(req,res)=>{
   

    const {LongUrl} =req.body;



    if (!LongUrl) return res.status(400).send({messege:'Url is required '})
   if (!isvalidUrl(LongUrl)) return res.status(400).send({messege:'Please Enter a valid Url'})
        


}




module.exports ={UrlShortner}