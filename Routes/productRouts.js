const express=require("express")
const router=express.Router();
// const Product=require("../Models/prouducts.js")
// import * as productController from '../Controler/productController.js'
const {getProducts,getProduct,updateProduct,deleteProduct,addProduct}=require("../Controler/productController.js")

// router.get("/home", (req, resp) => {
//     resp.send("hello sir ");
//   });
  
  // To get list of all products
  router.get("/",getProducts );
  
  // to get the perticular info related to id
  router.get("/:id",getProduct );

  // to add the new prouduct
  router.post("/",addProduct );
  
  // update the proudct
  router.put("/:id",updateProduct);
  
  // delete or remove
  router.delete("/:id",deleteProduct)
  
  module.exports=router;