import cart from '../model/CartModel.js';

export const carts =  async (req,res) =>  {

    const { userId, itemId } = req.body;

    Item.findById(itemId, (err, item) => {

        // Find the cart for the user
        cart.findOne({ userId }, (err, cart) => {

            // Add the item to the existing cart
            cart.items.push(item._id);
        });

        cart.save((err, savedCart) => {
            if (err) {
                console.error("Error saving cart:", err);
                res.status(500).json({ error: "An error occurred" });
            } else {
                res.json(savedCart);
            }
        });
    });
}
        
        
    
    
