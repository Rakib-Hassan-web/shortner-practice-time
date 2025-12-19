















const UrlShortner =(req,res)=>{
   

    const {LongUrl} =req.body;



    if (!LongUrl) return res.status(400).send({messege:'Url is required '})


}




module.exports ={UrlShortner}