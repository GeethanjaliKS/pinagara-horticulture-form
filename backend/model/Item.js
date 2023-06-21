import mongoose from "mongoose"
const itemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    cost:{
        type : Number,
        required : true
    },
    description:{
        type : String,
        required : true
    },
    image:{
        type : String,
        required : true
    },
    type:{
        type : String
    }
    
})

export default mongoose.model('item',itemSchema)