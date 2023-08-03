import React, { useState, useEffect } from 'react';
import { allorder, itemcancel } from './Routes/Route';
import './App.css'
// import { MailOptions } from 'nodemailer/lib/json-transport';

function OrderPage() {
  const [orderView, setOrderView] = useState([]);
  const [orderstatus,setOrderStatus]=useState([]);
  console.log(orderstatus)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await allorder();
        const data = await response.json();
        console.log('result', data);

        if (data.status === 'success') {
          setOrderView(data.data.orders);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleCancel = async (id) => {
    try {
      // const newStatus="dispatch";
      const response = await itemcancel(id);
      const data = await response.json();
      // console.log('member', data);
    //  setMembership(true)
    // setUpdateOrder(true)
    
     const filteredOrder = orderstatus.filter((orderItem) => orderItem._id !== id);
     console.log('details', filteredOrder);
  setOrderStatus(filteredOrder);
  console.log('order',orderstatus)
  } catch (error) {
      console.log(error.message);
      console.log('Error updating membership');
    }}


  

  return (
    <div className=' pt-[2%]  bg-green-100'>
       <h1 className="font-bold text-green-600 text-4xl inline-block  shadow-lg  shadow-green-300 mb-[2%] md:w-1/2 md:mx-96  sm:w-full mb-6 md:mb-10 ml-10 mr-10 rounded-lg p-[2%] text-center bg-white pb-[2%] " style={{ fontFamily: 'Bitter' }}>ORDERS</h1> <br /> 
            {orderView.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-[2%] bg-white pt-1 m-6 ">
          {orderView.map((order) => (
            <div key={order.id} className=" p-4 mb-4 shadow-lg shadow-green-300">
              <h3 className='font-bold' style={{fontFamily:'Quicksand'}}>Order ID: {order._id}</h3>
              <p className='' style={{fontFamily:'Quicksand'}}>Order Placed Date: {new Date(order.orderplacedate).toLocaleString()}</p>
              <p className='font-bold' style={{fontFamily:'Quicksand'}}>Order Delivery Date: {order.orderdeliverydate ? new Date(order.orderdeliverydate).toLocaleString() : 'Not specified'}</p>
              <p className='' style={{fontFamily:'Quicksand'}}>Order Status: {order.orderstatus}</p>
              <h4 className='font-bold' style={{fontFamily:'Quicksand'}}>Items:</h4>
            {order.item.map((item) => (
              <div key={item._id} className=" p-4 mt-4 flex items-center">
              <img src={item.image} alt={item.name} className="w-24 h-24" />
              <div className="ml-4 ">
                  <p className='font-bold' style={{fontFamily:'Quicksand'}}>Name: {item.name}</p>
                  <p className='font-bold'style={{fontFamily:'Quicksand'}}>Quantity: {item.quantity}</p>
                  <p className='font-bold' style={{fontFamily:'Quicksand'}}>Cost: ${item.cost}</p>
                  
                  {/* Render other item details */}
                </div>
              </div>
            ))}
            
            <div className="mt-4">
          <h4 className='font-bold' style={{ fontFamily: 'Quicksand' }}>Address:</h4>
          <p className='' style={{ fontFamily: 'Quicksand' }}>Name: {order.address.name}</p>
          <p className='' style={{ fontFamily: 'Quicksand' }}>Door Number: {order.address.doorNumber}</p>
          <p className='' style={{ fontFamily: 'Quicksand' }}>Address: {order.address.address}</p>
          <p className='' style={{ fontFamily: 'Quicksand' }}>Mobile Number: {order.address.mobileNumber}</p>
        </div>
       <div className='flex justify-end'>
        {order.orderstatus === 'orderplaced' || order.orderstatus === 'dispatch' ? (
        <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full " style={{fontFamily:'Lobster Two'}}
        onClick={() => handleCancel(order._id)}
      >
        cancel 
      </button>
      ) : ''}
</div>
       
            </div>
          ))}

        </div>
        
      )}

    </div>
  );
}

export default OrderPage;

