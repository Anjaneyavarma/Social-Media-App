const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    username:{
        type: String,
        require: true,
        min:8,
        max:25,
        unique:true
    },
    email:{
        type:String,
        require:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        require:true,
        min:8
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    profilePicture:{
        type:String,
        default:""
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    Bio:{
        type:String,
        max:255,
        default:""
    },
    City:{
        type:String,
        max:50,
        default:""
    }
},
{timestamps: true}

);

module.exports = mongoose.model("User", UserSchema);