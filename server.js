const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./Models/prouducts.js");
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get("/", (req, resp) => {
  resp.send("hello sir ");
});

// To get list of all products
app.get("/product", async (req, res) => {
  try {
    const produc = await Product.find({});
    res.status(200).json(produc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// to get the perticular info related to id

app.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const produc = await Product.findById(id);
    res.status(200).json(produc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// to add the new prouduct
app.post("/product", async (req, res) => {
  try {
    const produc = await Product.create(req.body);
    res.status(200).json(produc);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: err.message });
  }
});

// update the proudct
app.put("/product/:id",async(req,res)=>{
    try {
        const { id } = req.params;
        const produc = await Product.findByIdAndUpdate(id,req.body);
        if(!produc){
            return res.status(404).json({message:`not find any product with id
            ${id}`})}
        const updated=await Product.findById(id);    
        res.status(200).json(updated);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
});

// delete or remove
app.delete("/product/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const produc=await Product.findByIdAndDelete(id);
        if(!produc){
            return res.status(404).json({message:`product is not found with the id ${id}`})
        }
res.status(200).json(produc);
    }catch(err){
        res.status(500).json({message:err.message})
    }
})



mongoose
  .connect(
    "mongodb+srv://jacklinuxnd:p4CeG4LxCP8IdakF@cluster0.gkvajcw.mongodb.net/node-api?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4000, (req, resp) => {
      console.log("server is running on port 4000");
    });
    console.log("connected to database db");
  })
  .catch((err) => {
    console.log(`${err}`);
  });
