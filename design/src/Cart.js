import React, { useState, useEffect } from 'react';
import { deletecart, viewcart } from './Routes/Route';
import AddressForm from './AddressForm';
import './App.css';


const CartItem = ({ item, onQuantityChange, itemDetails, setItemDetails,handleBuyNow }) => {
  

  const handleIncrement = () => {
    onQuantityChange(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  };

 const handleRemove = async (id) => {
  try {
    const response = await deletecart(id);
    console.log(response);
    const data = await response.json();
    console.log("result", data.data);

    let filteredCart = itemDetails.filter((item) => item._id !== id);
    setItemDetails(filteredCart);
  } catch (error) {
    console.log(error.message);
  }
};



  

  return (
    <div className=' m-[2%]'>
<div className='grid grid-cols-3 gap-6 w-full h-50 rounded pt-[2%] border' >

    <div className="p-4 m-2  ">
      
   {/* <div className="flex  items-center space-x-4 mb-4 md:mb-0"> */}
        <img src={item.image} alt={item.name} className="w-[90%] h-[70%] "/>
        </div>
        <div className=' '>
          <h2 className="text-lg font-xxl font-bold" style={{fontFamily:'Norican'}}>{item.name}</h2> 
          <p className="text-gray-500 mt-6 font-bold" style={{fontFamily:'Norican'}}>${item.cost}</p>
          <p className="text-gray-500 font-bold " style={{fontFamily:'Norican'}}>{item.description}</p>

        {/* </div> */}
        
    </div>
    <div>
    <button className="px-2 py-1 bg-red-500 text-white rounded mr-4" style={{fontFamily:'Norican'}} onClick={() => handleRemove(item._id)}>
              Remove
            </button> 
    
            <div className="flex items-center space-x-2 mt-6">
            <button className="px-2 py-1 bg-gray-200 rounded" onClick={handleDecrement}>
                -
            </button>
            <span>{item.quantity}</span>
            <button className="px-2 py-1 bg-gray-200 rounded" onClick={handleIncrement}>
              +
            </button>
           
          </div>
            </div>
    </div>  </div>
  );
};

const Cart = () => {
  const [itemDetails, setItemDetails] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [addressForm,setAddressForm]=useState(false)  
  const [searchText, setSearchText] = useState('');

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('user'));
        const response = await viewcart(userData._id);
        const data = await response.json();
        const updatedItemDetails = data.itemDetails.map((item) => ({
          ...item,
          quantity: parseInt(item.quantity) || 1,
        }));
        setItemDetails(updatedItemDetails);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    calculateTotalAmount();
  }, [itemDetails]);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = itemDetails.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setItemDetails(updatedItems);
    // calculateTotalAmount();
  };

  const handleRemoveItem = (itemId) => {
    const updatedItems = itemDetails.filter((item) => item.id !== itemId);
    setItemDetails(updatedItems);
    calculateTotalAmount();
  };

  const calculateTotalAmount = () => {
    const total = itemDetails.reduce((acc, item) => acc + item.cost * item.quantity, 0);
    setTotalAmount(total);
  };
const handleBuyNow=()=>{
  setAddressForm(true)
  // navigator(AddressForm)
}

const filteredItemDetails = itemDetails.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );


  return (
    <div className='pt-[3%]  bg-green-100'>

  {addressForm ? (
  <AddressForm itemDetails={itemDetails} />
) : (
  <div>
    <h1 className='font-bold  text-4xl inline-block transform -skew-x-10  ml-5 ' style={{fontFamily:'Bitter'}}>Shopping Cart</h1>
    
  <div className="mb-3 ">
        <input
          type="search"
          className="relative   ml-[65%] mr-[5%] w-1/4 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          id="exampleSearch"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {filteredItemDetails.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={handleQuantityChange}
              itemDetails={itemDetails}
              setItemDetails={setItemDetails}
              handleBuyNow={handleBuyNow}
            />
          ))}
          <center>
 
  
  <h3 className='font-bold mb-2'style={{fontFamily:'Norican'}}>TOTAL AMOUNT: ${totalAmount}</h3>

  <button className="px-10 py-1  text-white rounded mb-5 bg-green-300 hover:bg-green-600 mb-[25%] " 
    onClick={handleBuyNow} style={{fontFamily:'Norican'}}
  >
    BuyNow
  </button>
  </center> </div>
)}
       {/* {AddressForm && <AddressForm />} */}
    
       
      
    </div>
  );
};

export default Cart;
