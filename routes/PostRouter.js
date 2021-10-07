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
router.post("/update/:id", async (req,res)=>{
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

//delete post
router.post("/delete/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).send({message:"post has been deleted"})
        }else{
            res.status(404).send({message:"you can delete only your post"})
        }
    }catch(err){
        res.status(500).json(err)
    }
})

//like and dislike a post
router.post("/:id/like", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}})
            res.status(200).send({messgae: "The post has been liked"})
        }else{
            await post.updateOne({$pull:{likes:req.body.userId}})
            res.status(200).send({message:"the post has been disliked"})
        }   
    }catch(err){
        res.status(500).json(err)
    }
})

//get a post
router.get("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).send(post)
    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router;