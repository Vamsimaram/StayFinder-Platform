const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const userSchema= new Schema({
    email:{
        type:String,
        required:true,
    },
});

userSchema.plugin(passportLocalMongoose);  //this automatically creates username,hash and salt

module.exports=mongoose.model("User",userSchema);