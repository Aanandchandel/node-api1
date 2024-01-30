const mongoose=require("mongoose");
const userSchma=mongoose.Schema(
    {name:{
        type:String,
        required:true},
    password:{type:Number,
              required:true},
     age:{
              type:Number,
        required:true}

    }
)
const User=mongoose.model("usr",userSchma);
module.exports=User;