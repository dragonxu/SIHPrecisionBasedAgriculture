var mongoose=require("mongoose");


var fertilzerSchema=new mongoose.Schema({
    soiltype:String,
    nitrogen:String,
    phosphorus:String,
    potassium:String,
    fertilzer:String
    
    
});
module.exports=mongoose.model("fertlizer",fertilzerSchema);