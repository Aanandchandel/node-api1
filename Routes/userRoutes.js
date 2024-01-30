const express=require("express")
const router=express.Router();
const {addUser,getUsers,getUser,deleteUser,updateUser} =require("../Controler/userControler.js");
// used to craet a user
router.post("/",addUser)

// to get all user
router.get("/",getUsers)  

// to find a user
router.get("/:id",getUser
)
// to delete the data

router.delete("/:id",deleteUser)

// to update or edit
router.put("/:id",updateUser)

module.exports=router;