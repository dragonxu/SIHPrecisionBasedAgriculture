var mongoose=require("mongoose");


var irrigationSchema=new mongoose.Schema({
    ph:String,
    nitrogen:String,
    phosphorus:String,
    organiccarbon:String,
    particles:String,
    waterholdingcontent:String,
    soiltype:String,
    croptype:String
    
    
    
    
});
module.exports=mongoose.model("irrigation",irrigationSchema);