const mongoose = require("mongoose");
const router = require("express").Router();
const User = require("../model/UserModel")
const bcrypt = require("bcrypt");
const { restart } = require("nodemon");

//create user
router.post("/Registration", async (req,res)=>{

    const checkIfEmailExist = await User.findOne({email: req.body.email})
    if(checkIfEmailExist) return res.status(400).send({message: "email was already used, please register with other mail id"})

    const checkIfUsernameExist = await User.findOne({username: req.body.username})
    if(checkIfUsernameExist) return res.status(400).send({message:"username was already used, please choose different username"})

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = await new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    })
    try{
        const saveUser = await user.save();
        res.status(200).json(user);
    }catch(err){
        res.status(400).send(err);
    }
    
});

//update user
router.post("/:id", async (req,res)=>{
    if(req.body.id === req.params.id){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(12);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch(err){
                res.status(500).send(err)
            }
        }

        const user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        res.status(200).send({message: "Account has been updated"})
    }else{
        return res.status(403).send({message: "you can update only your account"})
    }
})

//delete user
router.delete("/:id", async (req,res)=>{
    if(req.body.id === req.params.id){
        try{
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).send({message: "Account has been deleted"})
        }catch(err){
            res.status(500).send({message: err})
        }
    }else{
        return res.status(403).send({message: "you can delete only your account"})
    }
})

//get user
router.get("/:id", async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password,email, ...other} = user._doc;
        res.status(200).json(user); 
    }catch(err){
        res.status(404).json(err)
    }
});

//follow a user
router.post("/:id/follow", async (req,res)=>{
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers:req.body.userId}});
                await currentUser.updateOne({$push:{following:req.params.id}});
                res.status(200).send({message:"following the user"})
            }else{
                res.status(403).send({message:"you already followed this user"})
            }
        }catch(err){
            res.status(500).send({message:"500"})
        }

    }else{
        req.status(403).send({messaage:"you can't follow yourself"})
    }
});

//unfollow the user
router.post("/:id/unfollow", async (req,res)=>{
    if(req.body.userId !== req.param.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if(currentUser.following.includes(req.params.id)){
                await user.updateOne({$pull:{followers:req.body.userId}});
                await currentUser.updateOne({$pull:{following:req.params.id}});
                res.status(200).send({message:"successfully unfollowed the user"})
            }else{
                res.status(403).send({message:"you cant unfollow the user, as you are not following this user"})
            }
        }catch(err){
            res.status(500).send(err)
        }
    }else{
        req.status(403).send({message:"you cant unfollow yourself"})
    }

});


module.exports = router;