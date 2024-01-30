const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const productRoute=require("./Routes/productRouts.js");
const userRoutes=require("./Routes/userRoutes.js");
app.use(express.json());
app.use(express.urlencoded({extended:false}))
const PORT=process.env.PORT||3000
const MONGO_URL = process.env.MONGO_URL
// const Product = require("./Models/prouducts.js");
app.use("/api/product",productRoute)
app.use("/api/user",userRoutes)

app.get("/err",(req,res)=>{
throw new Error('fack error');
})




// ..........................
mongoose.connect(MONGO_URL)
.then(() => {
  app.listen(PORT, (req, resp) => {
    console.log(`server is running on port ${PORT} `);
  });
  console.log("connected to database db");
})
  .catch((err) => {
    console.log(`${err}`);
  });

