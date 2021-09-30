const router = require("express").Router();
const User = require("../model/UserModel")
const bcrypt = require("bcrypt");

router.post("/login", async(req,res)=>{
   
    try{
        const user = await User.findOne({username: req.body.username});
        if(!user) return res.status(404).send({message:"username not found"});

        const validPass = await bcrypt.compare(req.body.password, user.password)
        if(!validPass) {
            return res.status(400).send({message: "Ivalid password, please try again"})
        }else{
            res.status(200).send({message: "Successfully logged in"})
        }


    }catch(err){
        res.status(400).send({message: err})
    }
    
    
});

module.exports = router;