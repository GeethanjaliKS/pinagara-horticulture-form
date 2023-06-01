import React from 'react';
import product from './images/Logo.png';
import "./App.css";

function Product() {
   return(
<div className="container mx-auto px-4 pt-[3%] left-0 right-0 top-0">
  <h1 className="text-2xl hover:font-bold mb-8 "  style={{fontFamily:'Bruno Ace SC' }}>Our Products and Services</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white rounded-lg shadow-lg">
      <img className="rounded-t-lg" src={product} alt="Product 1"/>
      <div className="p-6">
        <h2 className="text-lg font-bold mb-2">Product 1</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        {/* <a href="#" className="text-blue-500 hover:text-blue-700">Learn More</a> */}
      </div>
    </div>
    <div className="bg-white rounded-lg shadow-lg">
      <img className="rounded-t-lg" src="https://via.placeholder.com/600x400" alt="Product 2"/>
      <div className="p-6">
        <h2 className="text-lg font-bold mb-2">Product 2</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        {/* <a href="#" className="text-blue-500 hover:text-blue-700">Learn More</a> */}
      </div>
    </div>
    <div className="bg-white rounded-lg shadow-lg">
      <img className="rounded-t-lg" src="https://via.placeholder.com/600x400" alt="Service 1"/>
      <div className="p-6">
        <h2 className="text-lg font-bold mb-2">Service 1</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        {/* <a href="#" className="text-blue-500 hover:text-blue-700">Learn More</a> */}
      </div>
    </div>
    <div className="bg-white rounded-lg shadow-lg">
      <img className="rounded-t-lg" src="https://via.placeholder.com/600x400" alt="Service 2"/>
      <div className="p-6">
        <h2 className="text-lg font-bold mb-2">Service 2</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        {/* <a href="#" className="text-blue-500 hover:text-blue-700">Learn More</a> */}
      </div>
    </div></div> </div>
 

  )
}

export default Product;