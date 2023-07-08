import mongoose from "mongoose"
const cartSchema = new mongoose.Schema({
    userId: {
      type: String,
      // ref: "User",
      required: true,
    },
    items: [
      {
        type: String,
        // ref: "Item",
      },
    ],
  });

export default mongoose.model('cart',cartSchema)