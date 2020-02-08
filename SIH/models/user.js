var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");

var UserSchema=new mongoose.Schema({
    username:String,
    password:String
});
//add bunch of methods to user Schema
UserSchema.plugin(passportLocalMongoose); 


module.exports=mongoose.model("User",UserSchema);