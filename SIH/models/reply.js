var mongoose=require("mongoose");


var replySchema=new mongoose.Schema({
    text:String,
    created:{type:Date,default:Date.now},
});
module.exports=mongoose.model("Reply",replySchema);