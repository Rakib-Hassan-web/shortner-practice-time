
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


module.exports =GenarateRAndomStr