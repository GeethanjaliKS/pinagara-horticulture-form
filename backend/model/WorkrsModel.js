import mongoose from "mongoose"
const workerSchema = new mongoose.Schema({
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
        
    },
    address:{
        type : String,
        required : true
    
    }
})

export default mongoose.model('worker',workerSchema)