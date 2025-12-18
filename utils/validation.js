

const isvalidEmail =(email)=>{
    const emailregex=/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
    return emailregex.test(email)
}


module.exports={isvalidEmail}