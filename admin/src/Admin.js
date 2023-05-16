import React,{useState,useEffect} from 'react'
import { NavLink,BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { List } from 'react-bootstrap-icons';
import pic from './images/Logo.png'
import './App.css';



const Admin = () => {


  const [toggle,setToggle]=useState(false);
  const handleClick =()=>{
    setToggle(!toggle);

   
  
  };
    return (
      <div>
      <header className=" bg-gray-600 py-1 shadow-xl md:fixed left-0 right-0 top-0  ">
        <div className="grid grid-cols-2 items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* <List className='' size={20}> */}
  
          {/* <Link to="/" className="text-white font-bold text-xl"> */}
            <img src={pic} alt=" " height={80} width={80} />
          {/* </Link> */}
          
          <nav className="flex space-x-10  relative">
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
              to="/about"
              className="text-white hover:text-gray-200 font-medium text-base font-serif invisible md:visible"
            >
              About
            </Link> */}
            {/* <Link
              to="/login"
              
              // className="text-white hover:text-gray-200 font-medium text-base font-serif"
            >
              login
            </Link> */}
            {/* <button type="button" class="text-white hover:text-gray-200 bg-gradient-to-r from-green-200 via-green-400 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-2 py-2 text-center mr-3 mb-3 w-40 invisible md:visible">LOGIN</button> */}
      
          
           
          </nav>
          
          {/* </List> */}
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

{/* <div className="container mx-auto">
<h1 className="text-2xl font-bold mb-4">Data Table</h1>
<table className="table-auto">
  <thead>
    <tr>
      <th className="px-4 py-2">ID</th>
      <th className="px-4 py-2">Name</th>
      <th className="px-4 py-2">Email</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item) => (
      <tr key={item.id}>
        <td className="border px-4 py-2">{item.id}</td>
        <td className="border px-4 py-2">{item.name}</td>
        <td className="border px-4 py-2">{item.email}</td>
      </tr>
    ))}
  </tbody>
</table>
</div> */}
      </div>


    );
          
  };

  
  
// function Admin() {
// //   const [showForm, setShowForm] = useState(false);
// //   const handleComponentClick = () => {
// //     setShowForm(true);
// //   };
//   return (
   
  
      
// <div>
     
//     <div className="flex h-screen bg-gray-100">
//       <div className="flex flex-col w-64 bg-gray-600">
//         <div className="flex items-center justify-center h-14 text-white text-xl font-bold">Admin Panel</div>
//        {/* {showForm ?  */}
//         <nav className="flex-grow">
//           <ul className="flex flex-col py-4">
          
//             <li>
//               <a href="#" className="flex items-center py-2 px-6 text-gray-500 hover:bg-gray-700 hover:text-white">
//                 <span className="mr-3">
//                   {/* <svg className="h-6 w-6" viewBox="0 0 24 24">
//                     <path fill="currentColor" d="M9,16H7V14H9V16M13,16H11V14H13V16M17,16H15V14H17V16M19,10V14H21V10H19M5,10V14H3V10H5Z" />
//                   </svg> */}
//                 </span>
//                 Memberships
//               </a>
//             </li>
//             <li> <BrowserRouter>
//             <NavLink to="/food" >
//               <a href="#" className="flex items-center py-2 px-6 text-gray-500 hover:bg-gray-700 hover:text-white" >
//                 <span className="mr-3">
//                   {/* <svg className="h-6 w-6" viewBox="0 0 24 24">
//                     <path fill="currentColor" d="M3,7H21V9H3V7M3,13H21V11H3V13M3,17H21V15H3V17Z" />
//                   </svg> */}
//                 </span>
//                 Food Details
//               </a>
//               </NavLink></BrowserRouter>
//             </li>
//             <li>
//               <a href="#" className="flex items-center py-2 px-6 text-gray-500 hover:bg-gray-700 hover:text-white">
//                 <span className="mr-3">
//                   {/* <svg className="h-6 w-6" viewBox="0 0 24 24">
//                     <path fill="currentColor" d="M3,7H21V9H3V7M3,13H21V11H3V13M3,17H21V15H3V17Z" />
//                   </svg> */}
//                 </span>
//                 Workers
//               </a>
//             </li>
//             <li>
//               <a href="#" className="flex items-center py-2 px-6 text-gray-500 hover:bg-gray-700 hover:text-white">
//                 <span className="mr-3">
//                   {/* <svg className="h-6 w-6" viewBox="0 0 24 24">
//                     <path fill="currentColor" d="M19,18H5V6H19M19,4H5C3.9,4 3,4.9 3,6V18C3,19.1 3.9,20 5,20H19C20.1,20 21,19.1 21,18V6C21,4.9 20.1,4 19,4Z" />
//                   </svg> */}
//                 </span>
//                 Fertilizer
//               </a>
//             </li>
//           </ul>
//         </nav>
//       {/* :
//       ""
//       }   */}
 
//       </div>
//       {/* <div className="flex-grow flex flex-col items-center justify-center">
//         <h1 className="text-4xl font-bold">Welcome to Admin Panel</h1>
//       </div> */}
//     </div>
    

// </div>
    
   
//   )
// }

export default Admin