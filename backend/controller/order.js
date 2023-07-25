import order from '../model/OrderModel.js';
import cart from '../model/CartModel.js';

export const orderdetails =  async (req,res) => {
 
    console.log(req.body)
    let {userId,item,address,orderPlaceDate} = req.body 



    try{

        let newuser = new order({
           userId,item,address,orderPlaceDate
            
        })
        console.log('data',newuser)
    
       let createdOrder = await newuser.save() 
       await cart.findOneAndUpdate(userId,{items:[]},{new:true})

   
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        // used for connect front end
         res.status(201).json({
        status : 'Success',
        data : {
            createdOrder
        }
    })
    }catch(err){
        console.log(err)
    }
}


export const allorder= async (req, res) => {
  try {
    const orders = await order.find();
    const totalOrder=await order.count();
    // console.log(totalOrder)
    
  console.log(orders);
    
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.status(200).json({
      status: 'success',
      data: {
        orders,totalOrder
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};


export const vieworder= async (req, res) => {
    try {
      const orders = await order.find({orderstatus:'orderplaced'});
      const totalOrder=await order.count();
      // console.log(totalOrder)
      
    console.log(orders);
      
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).json({
        status: 'success',
        data: {
          orders,totalOrder
        },
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  };

  //update order status

  export const orderstatus = async (req, res) => {
    try {
      const { id} = req.params; 
      // const { newStatus } = req.body;
      console.log('orderid',id);
  
      const data = await order.findByIdAndUpdate(id,{orderstatus:'dispatch'});
      console.log(data);
  
      res.json({ data: 'updated' });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message,
      });
      console.log(err.message);
    }
  }


  export const dispatch= async (req, res) => {
    try {
      const orders = await order.find({orderstatus:'dispatch'});
      // const totalOrder=await order.count();
      // console.log(totalOrder)
      
    console.log(orders);
      
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).json({
        status: 'success',
        data: {
          orders
        },
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  };

//update delivery
  export const orderdelivery = async (req, res) => {
    try {
      const { id} = req.params; 
      // const { newStatus } = req.body;
      console.log('orderid',id);
  
      const data = await order.findByIdAndUpdate(id,{orderstatus:'delivery'},{new:true});
      console.log(data);
  
      res.json({ data: 'updated' });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message,
      });
      console.log(err.message);
    }
  }

  //view delivery
  export const viewdelivery= async (req, res) => {
    try {
      const orders = await order.find({orderstatus:'delivery'});
    console.log(orders);
      
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).json({
        status: 'success',
        data: {
          orders
        },
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  };

  export const ordercancel = async (req, res) => {
    try {
      const { id} = req.params; 
      // const { newStatus } = req.body;
      console.log('orderid',id);
  
      const data = await order.findByIdAndUpdate(id,{orderstatus:'cancel'},{new:true});
      console.log(data);
  
      res.json({ data: 'updated' });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message,
      });
      console.log(err.message);
    }
  }


  export const deliverycancel = async (req, res) => {
    try {
      const { id} = req.params; 
      // const { newStatus } = req.body;
      console.log('orderid',id);
  
      const data = await order.findByIdAndUpdate(id,{orderstatus:'cancel'},{new:true});
      console.log(data);
  
      res.json({ data: 'updated' });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message,
      });
      console.log(err.message);
    }
  }

  export const viewcancel= async (req, res) => {
    try {
      const orders = await order.find({orderstatus:'cancel'});
    console.log(orders);
      
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
      res.status(200).json({
        status: 'success',
        data: {
          orders
        },
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message,
      });
    }
  };

  export const itemcancel = async (req, res) => {
    try {
      const { id} = req.params; 
      // const { newStatus } = req.body;
      console.log('orderid',id);
  
      const data = await order.findByIdAndUpdate(id,{orderstatus:'cancel'},{new:true});
      console.log(data);
  
      res.json({ data: 'updated' });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: err.message,
      });
      console.log(err.message);
    }
  }