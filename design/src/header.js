import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import pic from './images/Logo.png'
import { List,Cart,Person} from 'react-bootstrap-icons';
import "./App.css"


const Header = ({ isLoggedIn }) => {

const [toggle,setToggle]=useState(false);
const handleClick =()=>{
  setToggle(!toggle);
};
  return (
    <div>

    <header className=" bg-green-300 py-1 shadow-xl md:fixed left-0 right-0 top-0 z-40 sm:sticky top-0" > 
      <div className="grid grid-cols-2 items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <List className='' size={20}> */}

        {/* <Link to="/" className="text-white font-bold text-xl"> */}
          <img src={pic} alt=" " height={80} width={80} />
        {/* </Link> */}
        <nav className="flex space-x-3  space-y-5  relative ">
         <div className=' visible md:invisible absolute top-0 right-0' > 
         
            
          <List className='/cart ' size={30} onClick={handleClick}/>
           </div> 
           
          <Link
            to="/"
            className="text-blue-900 hover:text-gray-950 font-medium text-base   invisible md:visible " 
            style={{fontFamily:'Bruno Ace SC' }} >
            Home
          </Link>
          <Link
            to="/fertilizer"
            className="text-blue-900 hover:text-gray-950 font-medium text-base  invisible md:visible"
            style={{fontFamily:'Bruno Ace SC'}}  >
            Fertilizer
          </Link>

          <Link
            to="/foodcard"
            className="text-blue-900 hover:text-gray-950 font-medium text-base font-serif invisible md:visible"
            style={{fontFamily:'Bruno Ace SC'}}   >
            Snacks
          </Link>

          <Link
            to="/contact"
            className="text-blue-900 hover:text-gray-950 font-medium text-base font-serif invisible md:visible"
            style={{fontFamily:'Bruno Ace SC'}}  >
            Contact
          </Link>
          <Link
            to="/about"
            className="text-blue-900 hover:text-gray-950 font-medium text-base font-serif invisible md:visible"
            style={{fontFamily:'Bruno Ace SC'}}   >
            About
          </Link>

          <Link
            to="/worker "
            className="text-blue-900 hover:text-gray-950 font-medium text-base font-serif invisible md:visible"
            style={{fontFamily:'Bruno Ace SC'}}   >
            Worker
          </Link>

          {isLoggedIn ? (
          <>
             <Link to="/cart" className="text-blue-900 hover:text-gray-950 font-medium text-base font-serif invisible md:visible">
      <Cart size={40} />
    </Link>
          
    <Link to="/viewprofile" className="text-blue-900 hover:text-gray-950 font-medium text-base font-serif invisible md:visible">
      <Person size={40} />
    </Link>
          </>
        ) :(
          
          <Link to="/register">
            <button type="button" className="text-white hover:text-gray-950 bg-gradient-to-r from-green-200 via-green-400 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center mr-4 mb-4 w-30 invisible md:visible"style={{fontFamily:'Bruno Ace SC'}}   >Register</button>
            </Link>
        )}

          {/* <Link
            to="/login"
            
            // className="text-white hover:text-gray-200 font-medium text-base font-serif"
          >
            login
          </Link> */}
         
          
           
           
    

          {/* <Link to="/cart" className="text-white hover:text-gray-200">
            <Cart size={20} />
          </Link> */}
        
        </nav>
        
        {/* </List> */}
      </div>
      
    </header>
    {toggle?
        <div>
        <div class="flex h-screen bg-gray-100">
  <div class="flex flex-col w-64 bg-gray-800">
    
    <nav class="flex-grow">
      <ul class="flex flex-col py-4">
        <li>
          <a href="#" class="flex items-center py-2 px-6 text-gray-500 hover:bg-gray-700 hover:text-white">
            <span class="mr-3">
              {/* <svg class="h-6 w-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,10H5V8H19V10M19,14H5V12H19V14Z" />
              </svg> */}
            </span>
            Home
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center py-2 px-6 text-gray-500 hover:bg-gray-700 hover:text-white">
            <span class="mr-3">
              {/* <svg class="h-6 w-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M9,16H7V14H9V16M13,16H11V14H13V16M17,16H15V14H17V16M19,10V14H21V10H19M5,10V14H3V10H5Z" />
              </svg> */}
            </span>
            Fertilizer
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center py-2 px-6 text-gray-500 hover:bg-gray-700 hover:text-white">
            <span class="mr-3">
              {/* <svg class="h-6 w-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,18H5V6H19M19,4H5C3.9,4 3,4.9 3,6V18C3,19.1 3.9,20 5,20H19C20.1,20 21,19.1 21,18V6C21,4.9 20.1,4 19,4Z" />
              </svg> */}
            </span>
            Snacks
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center py-2 px-6 text-gray-500 hover:bg-gray-700 hover:text-white">
            <span class="mr-3">
              {/* <svg class="h-6 w-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,18H5V6H19M19,4H5C3.9,4 3,4.9 3,6V18C3,19.1 3.9,20 5,20H19C20.1,20 21,19.1 21,18V6C21,4.9 20.1,4 19,4Z" />
              </svg> */}
            </span>
            About
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center py-2 px-6 text-gray-500 hover:bg-gray-700 hover:text-white">
            <span class="mr-3">
              {/* <svg class="h-6 w-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,18H5V6H19M19,4H5C3.9,4 3,4.9 3,6V18C3,19.1 3.9,20 5,20H19C20.1,20 21,19.1 21,18V6C21,4.9 20.1,4 19,4Z" />
              </svg> */}
            </span>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </div>
  
</div>

          
          </div>
          :
          ""
        }
    </div>
  );
        
};

  


export default Header



