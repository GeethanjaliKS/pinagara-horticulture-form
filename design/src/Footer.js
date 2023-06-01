import React from "react";
import "./App.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-green-300 text-black" id="footer">
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'Bruno Ace SC' }}>
            PIGARA HORTICULTURE FORM
          </h2>
        </div>
        <div className="grid grid-rows-1 sm:grid-flow-col gap-4   ">
        <div>
          <Link to="/" className="text-white" style={{ fontFamily: 'Bruno Ace SC' }}>
            About US
          </Link>
          </div>
          <div>
          <Link to="/" className="text-white" style={{ fontFamily: 'Bruno Ace SC' }}>
            Contact US
          </Link>
          </div>
          <div>
          <Link to="/" className="text-white" style={{ fontFamily: 'Bruno Ace SC' }}>
            Product & Services
          </Link>
          </div>
          <Link to="/" className="text-white" style={{ fontFamily: 'Bruno Ace SC' }}>
            Opening Hours
          </Link>
        </div>
      </div>
      <p className="text-center text-gray-400">© {new Date().getFullYear()} Company Name. All rights reserved.</p>

    </div>

     </footer>
  
  
  );
}

export default Footer;


