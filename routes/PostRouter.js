const mongoose = require("mongoose");
const router = require("express").Router();
const Post = require("../model/PostModel");
const { restart } = require("nodemon");

router.post("/CreatePost", async (req,res)=>{
    const newPost = await new Post({
        userId:req.body.userId,
        desc: req.body.desc,
        img: req.body.img
    });
    try{
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    }catch(err){
        res.status(400).send({message:"error creating post"});
    } 
});

//get all posts
router.get("/", async (req,res)=>{
    await Post.find((posts, err)=>{
        if(err){
            res.status(404).send("posts not found");
        }else{
            res.status(200).send(posts)
        }
    })
});

//update a post
router.post("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).send({message:"post has been updated"})
        }else{
            res.status(404).send({message:"you can update only your post"})
        }
    }catch(err){
        res.status(500).json(err)
    }
    
})

module.exports = router;