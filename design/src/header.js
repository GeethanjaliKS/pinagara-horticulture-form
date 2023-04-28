import React from 'react'
import { Link } from 'react-router-dom';

// import logo from "../images/logo.png";

const header = () => {
  return (
    <header className="bg-green-300 py-1 shadow-xl">
      <div className="flex flex-row-reverse ">
        {/* <Link to="/" className="text-white font-bold text-xl">
          <img src={logo} alt="Logo" className="h-12" />
        </Link> */}
        <nav className="flex space-x-10  ">
          <Link
            to="/"
            className="text-white hover:text-gray-200 font-medium text-base font-serif"
          >
            Home
          </Link>
          <Link
            to="/fertilizer"
            className="text-white hover:text-gray-200 font-medium text-base font-serif"
          >
            Fertilizer
          </Link>
          <Link
            to="/workers"
            className="text-white hover:text-gray-200 font-medium text-base font-serif"
          >
            Workers
          </Link>
          {/* <Link
            to="/login"
            
            // className="text-white hover:text-gray-200 font-medium text-base font-serif"
          >
            login
          </Link> */}
          <button type="button" class="text-white hover:text-gray-200 bg-gradient-to-r from-green-200 via-green-400 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-2 py-2 text-center mr-2 mb-2">Login</button>
    


        </nav>
       
      </div>
    </header>
  );
};
  


export default header



