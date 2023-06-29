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
        required : true
    },
    address:{
        type : String,
        required : true
    },
    image:{
        type : String,
        required : true
    }
});
export default mongoose.model('member',userSchema)



// import mongoose from "mongoose";

// import autoIncrement from 'mongoose-auto-increment';

// const connection = mongoose.createConnection("mongodb://localhost/pingara");
// autoIncrement.initialize(connection);
// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     contact: {
//         type: String,
//         required: true
//     },
//     email_id: {
//         type: String,
//         required: true
//     },
//     address: {
//         type: String,
//         required: true
//     },
//     image: {
//         type: String,
//         required: true
//     }
// })

// userSchema.plugin(autoIncrement.plugin, { model: 'member', field: '_id' });
// const member = connection.model('member', userSchema);

// export default member;
