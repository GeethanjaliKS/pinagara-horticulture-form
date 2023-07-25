import mongoose from "mongoose"
const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    // required: true,
  },
  
  item: [
    {
      name: {
        type: String,
        required: true
      },
      quantity: {
        type: String,
        required: true
       
      },
      image:{
        type:String,
        required:true
      },
      cost:{
        type:String,
        required:true
      }
    }
  ],
   address:{
    name:String,                 // using string format
    doorNumber:String,
    address:String,
    mobileNumber:String
    // required:true
   },
   date:{
    type:Date,
    default: Date.now()
   },
   orderplacedate:{
    type:Date,
    default: Date.now()
   },
   orderdeliverydate:{
    type:Date,
    default:null
   },
   orderstatus:{
    type: String,
    default:"orderplaced"
   }
  });

export default mongoose.model('order',orderSchema)