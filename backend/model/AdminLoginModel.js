import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      default: 'admin',
    },
    password: {
      type: String,
      default: 'admin',
    },
  });
  export default mongoose.model('admin',adminSchema)