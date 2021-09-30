const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/UserRouter");
const authRouter = require("./routes/AuthRouter");
const postRouter = require("./routes/PostRouter");
const bodyParser = require('body-parser');

dotenv.config();
const app = express();

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
  } = process.env;

const clientURI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect(clientURI, 
{useNewUrlParser: true, useUnifiedTopology: true,})
.then(()=> console.log("mongodb connected"))
.catch((err)=> console.log(err))


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);

app.get("/", (req,res)=>{
    res.send("hello world");
});

app.listen(8000, ()=>{
    console.log("server is ready to use");
})