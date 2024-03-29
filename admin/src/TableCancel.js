import React, { useState,useEffect } from 'react'
import { viewcancel } from './Routes/routes';

function TableCancel() {
    const[cancel,setCancel]=useState([]);

    const fetchData = async () => {
        const response = await viewcancel();
        const data = await response.json();
        console.log(data)
        
        setCancel(data.data.orders);
    };
    
      useEffect(() => {
        fetchData();
      }, []);

  return (
    <div>
         <div className='pt-[5%]'>
         {cancel.length > 0 ? (  
    <center>
        <table className="border-collapse border border-slate-400 bg-slate-100  ">
          <caption className="caption-top font-bold text-lg pt-[10%] font-serif" style={{fontFamily:'Righteous'}}>ORDER CANCEL DETAILS</caption> 
          
           <thead>
            <tr>
            <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>Order ID</th>
              <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>Item</th>
              <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>Address</th>
              <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>Date</th>
              {/* <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>OrderPlacedDate</th> */}
              {/* <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>OrderDeliveryDate</th> */}
              <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>OrderStatus</th>
            </tr>
          </thead>
          <tbody>
          {cancel && cancel.map((orderItem) => (
  <tr key={orderItem._id}>
    <td className="border border-slate-300" style={{fontFamily:'Poppins'}}>{orderItem._id}</td>
    <td className="border border-slate-300">
    {orderItem.item.map((item) => (
        <div key={item._id} className="flex items-center">
          {/* <img src={item.image} alt={item.name} className="w-24 h-24" /> */}
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
    {/* <td className="border border-slate-300" style={{fontFamily:'Lobster Two'}}>{orderItem.orderplacedate}</td> */}
    {/* <td className="border border-slate-300" style={{fontFamily:'Lobster Two'}}>{orderItem.orderdeliverydate}</td> */}
    <td className="border border-slate-300" style={{fontFamily:'Poppins'}}>{orderItem.orderstatus}


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

export default TableCancel