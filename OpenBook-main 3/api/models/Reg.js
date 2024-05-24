const mongoose=require('mongoose');


const RegSchema=mongoose.Schema({
    Email:String,
    Password:String,
})

module.exports=mongoose.model("Reg", RegSchema)