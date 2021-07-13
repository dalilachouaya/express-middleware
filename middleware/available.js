const available=(req,res,next)=>{
    let dat=new Date()
    let day = dat.getDay();
    console.log(day)

    let hours =dat.getHours(); 
    console.log(hours)
    if(day==0||day==6||hours<9||hours>17){
        res.send("💔Sorry,This web application is only available from  Monday to Friday, from 09:00 to 17:00  ")
    }
    else {
        next();
    }
}
    module.exports=available ;