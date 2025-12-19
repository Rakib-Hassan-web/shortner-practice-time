const shortnerSchema = require("../models/shortnerSchema");
const GenarateRAndomStr = require("../utils/service");
const { isvalidUrl } = require("../utils/validation");




// ----------UrlShortner-------------
const UrlShortner = async(req,res)=>{
   

  try {
      const {LongUrl} =req.body;



    if (!LongUrl) return res.status(400).send({messege:'Url is required '})
   if (!isvalidUrl(LongUrl)) return res.status(400).send({messege:'Please Enter a valid Url'})


    const ShortUrl = GenarateRAndomStr()

    const URLData = new shortnerSchema({
        LongUrl,
        ShortUrl
    })

   await URLData.save()


   res.status(200).send(URLData)
    
  } catch (error) {
    
    
  }

        


}




module.exports ={UrlShortner}