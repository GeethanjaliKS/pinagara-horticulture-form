import React,{useState,useEffect} from 'react'
import { NavLink,BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { List } from 'react-bootstrap-icons';
import pic from './images/Logo.png'
import './App.css';
// import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

const Admin = () => {


  const [toggle,setToggle]=useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const handleClick =()=>{
    setToggle(!toggle);

   
  
  };



  
    return (
      
      <div>
      <header className=" bg-gray-600 py-1 shadow-xl md:fixed left-0 right-0 top-0  ">
        <div className="grid grid-cols-2 items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          {/* <List className='' size={20}> */}
  
          {/* <Link to="/" className="text-white font-bold text-xl"> */}
            <img src={pic} alt=" " height={80} width={80} />
          {/* </Link> */}
          
          <nav className="flex space-x-5  relative">
          {/* <nav className="nav"> */}
           <div className=' visible md:invisible absolute top-0 right-0' > 
           
              
            <List className='  ' size={40} onClick={handleClick}/>
             </div> 
            <Link
              to="/memberviewpage"
              className="text-white hover:text-gray-200 font-medium text-base font-serif  invisible md:visible" 
            >
              Memberships
            </Link>

            <Link
              to="/fertilizerviewpage"
              className="text-white hover:text-gray-200 font-medium text-base font-serif invisible md:visible"
            >
              Fertilizer
            </Link>
  
            <Link
              to="/workerviewpage"
              className="text-white hover:text-gray-200 font-medium text-base font-serif invisible md:visible"
            >
              Workers
            </Link>
  
            <Link
              to="/foodviewpage"
              className="text-white hover:text-gray-200 font-medium text-base font-serif invisible md:visible"
            >
              Food Details
            </Link>
            {/* <Link
              to="/tableorder "
              className="text-white hover:text-gray-200 font-medium text-base font-serif invisible md:visible"
            >
              Order Details
            </Link> */}
            {/* <Link
              to="/login"
              
              // className="text-white hover:text-gray-200 font-medium text-base font-serif"
            >
              login
            </Link> */}
            {/* <button type="button" class="text-white hover:text-gray-200 bg-gradient-to-r from-green-200 via-green-400 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-2 py-2 text-center mr-3 mb-3 w-40 invisible md:visible">LOGIN</button> */}
      
          
           
          
          
            <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="text-white hover:text-gray-200 text-white font-medium "
      >
        Order Details 
      </button>

      {/* Dropdown Content */}
      <div
        className={`origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
          isDropdownOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {/* Dropdown Items */}
          <a
            href="/tableorder"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
            role="menuitem"
          >
            Order Placed
          </a>
          <a
            href="/tabledispat"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
            role="menuitem"
          >
            Order Dispatch
          </a>

          <a
            href="/tabledelivery"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
            role="menuitem"
          >
            Order Delivery
          </a>
          
          <a
            href="/tablecancel"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-500 hover:text-white"
            role="menuitem"
          >
            Cancelled Orders
          </a>
        </div>
      </div>
    </div>
    </nav>


        </div>
        
      </header>
      {toggle?
          <div>
          <div class="flex h-screen bg-gray-100">
    <div class="flex flex-col w-64 bg-gray-200">
      
      <nav class="flex-grow">
        <ul class="flex flex-col py-4">
          <li>         
             <NavLink to="/member" >
            
            <a href="#" class="flex items-center py-2 px-6 text-gray-500 hover:bg-gray-700 hover:text-white">
              <span class="mr-3">
                {/* <svg class="h-6 w-6" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19,10H5V8H19V10M19,14H5V12H19V14Z" />
                </svg> */}
              </span>
              Memberships
            </a>
            </NavLink> 
          </li>
          <li> <NavLink to="/fertilizer">
            <a href="#" class="flex items-center py-2 px-6 text-gray-500 hover:bg-gray-700 hover:text-white">
              <span class="mr-3">
                {/* <svg class="h-6 w-6" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M9,16H7V14H9V16M13,16H11V14H13V16M17,16H15V14H17V16M19,10V14H21V10H19M5,10V14H3V10H5Z" />
                </svg> */}
              </span>
              Fertilizer
            </a>
            </NavLink>
          </li>
          <li><NavLink to="/food">
            <a href="#" class="flex items-center py-2 px-6 text-gray-500 hover:bg-gray-700 hover:text-white">
              <span class="mr-3">
                {/* <svg class="h-6 w-6" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19,18H5V6H19M19,4H5C3.9,4 3,4.9 3,6V18C3,19.1 3.9,20 5,20H19C20.1,20 21,19.1 21,18V6C21,4.9 20.1,4 19,4Z" />
                </svg> */}
              </span>
               Food Details
            </a></NavLink>
          </li>
          <li><NavLink to="/worker">
            <a href="#" class="flex items-center py-2 px-6 text-gray-500 hover:bg-gray-700 hover:text-white">
              <span class="mr-3">
                {/* <svg class="h-6 w-6" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19,18H5V6H19M19,4H5C3.9,4 3,4.9 3,6V18C3,19.1 3.9,20 5,20H19C20.1,20 21,19.1 21,18V6C21,4.9 20.1,4 19,4Z" />
                </svg> */}
              </span>
              Workers
            </a></NavLink>
          </li>
          {/* <li>
            <a href="#" class="flex items-center py-2 px-6 text-gray-500 hover:bg-gray-700 hover:text-white">
              <span class="mr-3"> */}
                {/* <svg class="h-6 w-6" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19,18H5V6H19M19,4H5C3.9,4 3,4.9 3,6V18C3,19.1 3.9,20 5,20H19C20.1,20 21,19.1 21,18V6C21,4.9 20.1,4 19,4Z" />
                </svg> */}
              {/* </span> 
              Contact 
            </a> 
          </li>  */}
        </ul>
      </nav>
    </div>
    
  </div>
  
            
            </div>
            :
            ""
          }

    {/* <ArrowDownCircle className='animate-bounce w-12 h-12 text-[#f43f08]' onClick={()=>window.scrollTo(0,700)}/> */}
   
  </div>



    


    );
          
  };

  
  


export default Admin