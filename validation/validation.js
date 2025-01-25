const validationParam=(res,req,next)=>{
    if(isNaN(req.param.id)){
        return res.sendStatus(400)
    }
    next()
}
module.exports=validationParam;