import React, { useState,useEffect } from 'react';
import { viewcart, viewcartdetails } from './Routes/Route';
import OrderView from './OrderView';



const CartItem = ({ item, removeItem, incrementQuantity, decrementQuantity }) => {

  const[itemDetails,setItemDetails]=useState([])
  // const [name,setName]= useState([]);
  // const [cost,setCost] = useState([]);
  // const [description,setDescriptionescription]=useState([])
    // const [userId,setUserId]=useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('user'));
        console.log("userdata", userData._id);
        // 64a8e297529bbf1d1e3edeb2
   await viewcart(userData._id);
  //  console.log(res)
  const response= await viewcart(userData._id);
  console.log(response)
  const data=await response.json();
  console.log("details",data)
  setItemDetails(data.itemDetails)

      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);

  
 
 return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 border-b border-gray-200">
{itemDetails.map((item) => (
  <div key={item} className="flex items-center space-x-4 mb-4 md:mb-0">
    <img src={item.image} alt={item.name} className="w-12 h-12" />
    <div>
      <h2 className="text-lg font-semibold">{item.name}</h2>
      <p className="text-gray-500">${item.cost}</p>
      <p className="text-gray-500">{item.description}</p>
    </div>
  </div> 
))}

      {/* <div className="flex items-center space-x-2">
        <button
          onClick={() => decrementQuantity(item.id)}
          className="text-gray-500 font-semibold hover:text-gray-700 focus:outline-none focus:text-gray-700"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => incrementQuantity(item.id)}
          className="text-gray-500 font-semibold hover:text-gray-700 focus:outline-none focus:text-gray-700"
        >
          +
        </button>
      </div>
      <button
        onClick={() => removeItem(item.id)}
        className="text-red-500 font-semibold hover:text-red-700 focus:outline-none focus:text-red-700 mt-4 md:mt-0"
      >
        Remove
      </button> */}
  
    </div>
  );
};

const Cart = ({ items, removeItem, incrementQuantity, decrementQuantity }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h1 className="text-2xl font-semibold mb-4">Cart</h1>
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        ))
      )}
    </div>
  );
};

// const Payment = ({ total, applyDiscount, handlePayment }) => {
//   const [discountCode, setDiscountCode] = useState('');
//   const [discountError, setDiscountError] = useState('');

//   const handleApplyDiscount = () => {
//     if (discountCode === 'DISCOUNT10') {
//       applyDiscount(0.1); // Apply 10% discount
//       setDiscountError('');
//     } else {
//       setDiscountError('Invalid discount code.');
//     }
//   };

//   return (
//     <div className="p-4 border rounded shadow">
//       <h1 className="text-2xl font-semibold mb-4">Payment</h1>
//       <p className="text-lg">Total: ${total.toFixed(2)}</p>
//       <div className="mt-4">
//         <input
//           type="text"
//           placeholder="Discount code"
//           className="border p-2"
//           value={discountCode}
//           onChange={(e) => setDiscountCode(e.target.value)}
//         />
//         <button
//           onClick={handleApplyDiscount}
//           className="ml-2 bg-blue-500 text-white px-4 py-2 rounded font-semibold"
//         >
//           Apply Discount
//         </button>
//         {discountError && <p className="text-red-500">{discountError}</p>}
//       </div>
//       <button
//         onClick={handlePayment}
//         className="mt-4 bg-blue-500 text-white px-4 py-2 rounded font-semibold"
//       >
//         Pay Now
//       </button>
//     </div>
//   );
// };

const App = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 1, quantity: 1, image: 'product1.jpg' },
    // { id: 2, name: 'Product 2', price: 15.49, quantity: 1, image: 'product2.jpg' },
    // { id: 3, name: 'Product 3', price: 5.99, quantity: 1, image: 'product3.jpg' },
  ]);

  const [discount, setDiscount] = useState(0);

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const incrementQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (total, item) => total + item.cost * item.quantity,
      0
    );
    return subtotal - subtotal * discount;
  };

  const applyDiscount = (discountRate) => {
    setDiscount(discountRate);
  };

  const handlePayment = () => {
    // Handle the payment logic here
    console.log('Payment processed!');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-semibold mb-8">Simple View Cart and Payment</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Cart
          items={cartItems}
          removeItem={removeItem}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
        {/* <Payment
          total={calculateTotal()}
          applyDiscount={applyDiscount}
          handlePayment={handlePayment}
        /> */}
      </div>
    </div>
  );
};

export default App;
