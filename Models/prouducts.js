const mongoose=require("mongoose");
const prouductScham=new mongoose.Schema(
    {
        name:{type:String,
              required:[true,"please"]},
        quentity:{type:Number,
                 required:true,
                 default:0},
        price:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:false
        }
    },
    {timestamps:true}
)

const Product=mongoose.model("product",prouductScham);
module.exports=Product;