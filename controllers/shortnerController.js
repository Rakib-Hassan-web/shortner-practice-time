





const randomstr = (length=5) =>{

    let carecters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    let randomstring = '';

    for( let i = 0; i<length;i++){
      const randomgenerate = Math.floor(Math.random() * carecters.length);

      randomstring += carecters[randomgenerate]


      
    }
    return randomstring

}

console.log(randomstr());










const UrlShortner =(req,res)=>{
    res.send('ho aiche url')
}




module.exports ={UrlShortner}