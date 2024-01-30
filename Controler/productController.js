const Product=require("../Models/prouducts.js")
// get all products
const getProducts=async (req, res) => {
    try {
        const produc = await Product.find({});
        res.status(200).json(produc);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//   to get perticular product
const getProduct=async (req, res) => {
    try {
        const { id } = req.params;
        const produc = await Product.findById(id);
        res.status(200).json(produc);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
// to update product
const updateProduct=async(req,res)=>{
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
    }
    // to delete perticular product
    const deleteProduct=async(req,res)=>{
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
}

// to add a new product
const addProduct=async (req, res) => {
    try {
        const produc = await Product.create(req.body);
        res.status(200).json(produc);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: err.message });
    }
}
module.exports={getProducts,getProduct,updateProduct,deleteProduct,addProduct};