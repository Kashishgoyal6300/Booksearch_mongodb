const Reg=require('../models/Reg');

exports.register=async(req,res)=>{
    try{
    const{email,pass}=req.body
    const userCheck= await Reg.findOne({Email:email})
    if(userCheck==null){
   const record= new Reg({Email:email, Password:pass})
   record.save()
   res.json({
    status:201,
    apiData:record,
    message:"Successfully Registered"
   })
}else{
    res.json({
        status:400,
        message:"Username is already taken"
    })
}
    }catch(error){
        res.json({
            status:400,
            message:error.message
        })
    }
}

exports.login=async(req,res)=>{
       const{email,pass}=req.body
       const record= await Reg.findOne({Email:email,Password:pass})
       if(record!==null){
        if(record.Password==pass){
        res.json({
            status:200,
            apiData:record
        })
    }else{
        res.json({
                status:400,
                message:"Wrong Credentials"
        })
    }
        }else{
            res.json({
                status:400,
                message:"Wrong Credentials"
            })
       }
}