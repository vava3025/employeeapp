const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneno:{
        type:Number,
        required:true
    }
})
const userData=mongoose.model('user',userSchema);
module.exports=userData;