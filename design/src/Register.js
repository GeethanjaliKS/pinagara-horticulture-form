import React,{useState} from 'react'
import { usereg } from './Routes/Route';
import './App.css';

function Register() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [emailId, setEmailId] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    const handleSubmit = async (e) => {
      // console.log(name,contactNumber,address,emailId,password)
        e.preventDefault();
       const user=   await usereg({name:name,address:address,contact:contactNumber,email_id:emailId,password:password}).then((res)=>res.json()).then((res)=>console.log(res))
       console.log(user)   
       console.log("Form submitted");
          setSuccessMessage('user registered successfully!');
          // Handle form submission here
          setName("");
          setAddress("");
          setContactNumber("");
          setPassword("");
          setEmailId("");
        }
       




  return (
    <div className='bg-green-200 h-full pb-5 '>
      
    <div className="max-w-md mx-auto  pt-[2%]  ">
    
        <h1 className='text-center font-bold text-2xl my-2'>Registration Form</h1>
        {successMessage && <p className="text-black-500">{successMessage}</p>}
     <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-7 pt-10 pb-5 justify-center">
       <div className="grid grid-cols-2 gap-4">
         <div>
           <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
             Name
           </label>
           <input
             className="appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
             id="name"
             type="text"
             placeholder="Enter your name"
             value={name}
             onChange={(e) => setName(e.target.value)}
           />
         </div><br/>
         <div>
           <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
             Email_ID
           </label>
           <input
             className="appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
             id="email"
             type="text"
             placeholder="Enter your Email_id"
             value={emailId}
             onChange={(e) => setEmailId(e.target.value)}
           />
         </div><br/>
         <div>
           <label className="block text-gray-700 font-bold mb-2" htmlFor="contactNumber">
             Contact Number
           </label>
           <input
             className="appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-80"
             id="contactNumber"
             type="text"
             placeholder="Enter your contact number"
             value={contactNumber}
             onChange={(e) => setContactNumber(e.target.value)}
           />
         </div>
         <br/>
         <div className="col-span-2">
           <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
             Address
           </label>
           <textarea
             className="appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-80"
             id="address"
             placeholder="Enter your address"
             value={address}
             onChange={(e) => setAddress(e.target.value)}
           ></textarea>
         </div>
       </div> <br/> 
       <div>
           <label className="block text-gray-700 font-bold mb-2" htmlFor="contactNumber">
             Password
           </label>
           <input
             className="appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-80"
             id="password"
             type="password"
             placeholder="Enter your password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
           />
         </div>
         <br/>
      
       <div className="flex items-center justify-center mt-4">
         <button
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
           type="submit" onClick={handleSubmit}
         >
           Submit
         </button>
       </div>
       
     </form>
     <p className='text-md text-center' style={{fontFamily:"Robo Mono"}} >Please login Here   <a href='/login' className='font-bold underline'>Login</a></p>
     
   </div>
   </div>
  )
};

export default Register