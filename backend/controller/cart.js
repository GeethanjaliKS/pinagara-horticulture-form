import cart from '../model/CartModel.js';
import item from '../model/Item.js';

export const storecart = async (req, res) => {
    try {
      const { userId, itemId } = req.body;
      // console.log('cartbody', req.body);
  
      const Cart = await cart.findOneAndUpdate(
        { userId:userId },
        { $push: { items: itemId }});
        console.log('cart',Cart)
     res.json(cart);
    
    } catch (err) {
      console.error("Error saving cart:", err);
      res.status(500).json({ error: "An error occurred" });
    }
  };
 
  

  export const viewcart = async (req, res) => {
    try {
      const  {id}  = req.params;
      console.log('id',id)

  
      const Cart = await cart.findOne({ userId:id });
      console.log( 'user',Cart)
      const itemIds = Cart.items;
      // console.log(itemIds)
  
      const itemDetails = await item.find({ _id: { $in: itemIds } });
  
      console.log('itemDetails', itemDetails);
      // console.log('cart', cart);

     res.json({itemDetails:itemDetails});
     
   
     } catch (err) {
      console.error("Error retrieving cart:", err);
      res.status(500).json({ error: "An error occurred" });
    }
  };

//delete cart
export const deletecart=async (req,res) => {
  try {
    const {id}= req.params
  console.log("id",id)

 const dat= await cart.findByIdAndRemove(id)
 console.log(dat)
  res.json({data:'Deleted'})
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
      
    });
    console.log(err.message)
  }
  
}
  
  