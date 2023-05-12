import mongoose from "mongoose"
const foodSchema = new mongoose.Schema({
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
    }
    
})

export default mongoose.model('food',foodSchema)