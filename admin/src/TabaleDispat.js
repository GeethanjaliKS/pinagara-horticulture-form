import React from 'react'
import { useState ,useEffect} from 'react'
import { deliverycancel, dispatchdata, orderdelivery} from './Routes/routes.js';

function TabaleDispat() {
  
    const [dispatch,setDispatch]=useState([])
    const[deliveryCancel,setDeliveryCancel]=useState([]);


  const fetchData = async () => {
    const response= await dispatchdata();
    const data = await response.json();
    console.log(data)
    
    setDispatch(data.data.orders);
};

  useEffect(() => {
    fetchData();
  }, []);
  
  const handleDelivery = async (id) => {
    try {
      // const newStatus="dispatch";
      const response = await orderdelivery(id);
      const data = await response.json();
      console.log('data',data)
 const filteredOrder = dispatch.filter((orderItem) => orderItem._id !== id);
    
      
      console.log('details', filteredOrder);
    
      setDispatch(filteredOrder);
  } catch (error) {
      console.log(error.message);
      console.log('Error updating membership');
    }}
    
    const handleCancel = async (id) => {
      try {
        // const newStatus="dispatch";
        const response = await deliverycancel(id);
        const data = await response.json();
        // console.log('member', data);
      //  setMembership(true)
      // setUpdateOrder(true)

       const filteredOrder = deliveryCancel.filter((orderItem) => orderItem._id !== id);
      console.log('details', filteredOrder);
      setDeliveryCancel(filteredOrder);
    } catch (error) {
        console.log(error.message);
        console.log('Error updating membership');
      }}


    return (
    
    <div>

 <div className='pt-[5%]'>
 {dispatch.length > 0 ? (  
    <center>
        <table className="border-collapse border border-slate-400 bg-slate-100  ">
          <caption className="caption-top font-bold text-lg pt-[10%] font-serif" style={{fontFamily:'Righteous'}}>ORDER DISPATCH DETAILS</caption> 
          
           <thead>
            <tr>
            <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>Order ID</th>
              <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>Item</th>
              <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>Address</th>
              <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>Date</th>
              <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>OrderPlacedDate</th>
              <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>OrderDeliveryDate</th>
              <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>OrderStatus</th>
            </tr>
          </thead>
          <tbody>
         
          {dispatch && dispatch.map((orderItem) => (
  <tr key={orderItem._id}>
    <td className="border border-slate-300" style={{fontFamily:'Poppins'}}>{orderItem._id}</td>
    <td className="border border-slate-300">
    {orderItem.item.map((item) => (
        <div key={item._id} className="flex items-center">
          <img src={item.image} alt={item.name} className="w-24 h-24" />
          <div className="ml-4">
            <p className="font-bold" style={{fontFamily:'Poppins'}}>{item.name}</p>
            <p style={{fontFamily:'Poppins'}}>Cost: {item.cost}</p>
            {/* <p>Description: {item.description}</p> */}
          </div>
        </div>
    
      ))}
        
    </td>
    <td className="border border-slate-300">{orderItem.address ? (
      <>
        <p style={{fontFamily:'Poppins'}} >Name: {orderItem.address.name}</p>
        <p style={{fontFamily:'Poppins'}}>Door Number: {orderItem.address.doorNumber}</p>
        <p style={{fontFamily:'Poppins'}}>Address: {orderItem.address.address}</p>
        <p style={{fontFamily:'Poppins'}}>Mobile Number: {orderItem.address.mobileNumber}</p>
      </>
    ) : (
      <p>Address information not available</p>
    )}</td>
    <td className="border border-slate-300" style={{fontFamily:'Poppins'}}>{orderItem.date}</td>
    <td className="border border-slate-300" style={{fontFamily:'Poppins'}}>{orderItem.orderplacedate}</td>
    <td className="border border-slate-300" style={{fontFamily:'Poppins'}}>{orderItem.orderdeliverydate}</td>
    <td className="border border-slate-300" style={{fontFamily:'Poppins'}}>{orderItem.orderstatus}
  
    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" style={{fontFamily:'Poppins'}}
      onClick={() => handleDelivery(orderItem._id)}
    >
      move to delivery
    </button>

    <button
      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" style={{fontFamily:'Poppins'}}
      onClick={() => handleCancel(orderItem._id)}
    >
      cancel 
    </button>
      
   

    </td>
  </tr>
        
))}
 </tbody>
        </table> 
        </center>
          ) : (
            <p className="text-center mt-8 font-bold pt-[3%] text-4xl" style={{ fontFamily: 'Lobster Two' }}>
              No orders found.
            </p>
          )}
    </div>  
 </div>
  )
}

export default TabaleDispat