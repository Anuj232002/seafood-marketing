const mongoose=require('mongoose')
const {Schema} =mongoose;
//creating collection
const UserSchema=new Schema({
    name:{
        type:String,
        required:true

    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
module.exports=mongoose.model('user',UserSchema)
//UserSchema = It will create user name collection
//the data will inserted with help with model it is wrapper for schema 