const User =require("../Models/user");
// to create a user
const addUser=async(req,res)=>{
    try{
        const data=await User.create(req.body)
        res.status(200).json(data)}
        catch(err){
            return res.status(500).json({message:err.message})
        }
    }
    
    // to get users
    const getUsers=async(req,res)=>{
        try{
            const data=await User.find({})
            res.status(200).json(data)
        }catch(err){
            res.status(500).json({message:err.message})
        }
    }
    
    // find the perticulare user
    const getUser=async(req,res)=>{
        try{
            const id =req.params.id
            const data=await User.findById(id)
            if(!data){
                return res.status(404).json({message:"id not found"})}
                res.status(200).json(data);
            }catch(err){
                res.status(500).json({message:err.message})
            }
        }
        
        //   to delete the user 
        const deleteUser=async(req,res)=>{
            try{const id=req.params.id;
                const data=await User.findByIdAndDelete(id);
                if(!data){
                    return res.status(404).json({message:"user not found"})
                }
                res.status(200).json(data)
            }
            catch(err){
                res.status(500).json({message:err.message})
            }
        }
        const updateUser=async(req,res)=>{
            try{
                const {id}=req.params;
                const data= await User.findByIdAndUpdate(id,req.body);
                if(!data){
                    return res.status(404).json({message:"user not found"})}
                    res.status(200).json( await User.findById(id))
                }
                catch(err){ res.status(500).json({message:err.message})}
            }
            
module.exports={addUser,getUsers,getUser,deleteUser,updateUser}