import mongoose from "mongoose"
const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    contact:{
        type : String,
        required : true
    },
    email_id:{
        type : String,
        required : true,
        
    },
    address:{
        type : String,
        required : true
    },
    password:{
        type: String,
        required : true
    },
    membership:{
        type:Boolean,
        required: true
    },
    image:{
        type : String,
        required : true
    }


})
export default mongoose.model('user1',userSchema)
