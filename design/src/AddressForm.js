import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'
import {  orderdetails } from './Routes/Route';

const AddressForm = ({ itemDetails }) => {
  console.log('test',itemDetails)
  const [name, setName] = useState('');
  const [doorNumber, setDoorNumber] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
navigate("/orderpage")
const userData = JSON.parse(localStorage.getItem('user'));
const orderData = {
  userId: userData._id,
  item:itemDetails,
  address:({name:name,doorNumber:doorNumber,address:address,mobileNumber:mobileNumber}),
  orderPlacedDate: new Date()
};
try {
  const response = await orderdetails(orderData);
  console.log(response);
} catch (error) {
  console.error(error);
}
};

  


  return (
    <div className='pb-[5%]'>
        <h1 className='font-bold text-center text-3xl pt-[5%]' style={{fontFamily:'Bitter'}}>User Address Form</h1>
    <div className="max-w-md mx-auto p-4 shadow-xl  shadow-slate-600">
      <form onSubmit={handleSubmit} className="space-y-4 pt-[2%] " >
        <div>
          <label htmlFor="name" className="block mb-1 font-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="doorNumber" className="block mb-1 font-semibold">
            Door Number:
          </label>
          <input
            type="text"
            id="doorNumber"
            value={doorNumber}
            onChange={(e) => setDoorNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="address" className="block mb-1 font-semibold">
            Address:
          </label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="mobileNumber" className="block mb-1 font-semibold">
            Mobile Number:
          </label>
          <input
            type="text"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={handleSubmit}>
            Confirm Order Place
          </button>
        </div>
      </form>
    </div></div>
  );

  };
export default AddressForm;
