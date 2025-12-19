



const isvalidEmail =(email)=>{
    const emailregex=/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;

    return emailregex.test(email)

}


const isvalidPassword =(password)=>{
   const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


    return passwordRegex.test(password)

}


const isvalidUrl =(LongUrl)=>{
   const LongUrlRegex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})(\/\S*)?$/;


    return LongUrlRegex.test(LongUrl)

}


module.exports={isvalidEmail,isvalidPassword,isvalidUrl}