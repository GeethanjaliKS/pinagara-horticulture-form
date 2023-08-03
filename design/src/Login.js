import React,{ useEffect, useState } from 'react';
import { login } from './Routes/Route';
import './App.css'
import { useNavigate } from 'react-router-dom';

const Login= ({setIsLoggedIn}) => {
  
  const [email_idOrContact, setEmailOrContact] = useState('');
  const [password, setPassword] = useState('');
  // const [email_id, setEmailId] = useState('');
  // const [contact, setContact] = useState('');
  const [successMessage, setSuccessMessage] = useState(' ');
  const [errorMessage, setErrorMessage] = useState('');
  // const [items, setItems] = useState('');
  let navigate = useNavigate();
 
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    
  await login({emailOrContact:email_idOrContact,password:password}).then((res)=>res.json()).then((res)=>{
    if(res.message === 'login successful')
    {
      setIsLoggedIn(true)
      localStorage.setItem("user",JSON.stringify(res.data))
      const user=localStorage.getItem("user")
      console.log('login',user)
      setSuccessMessage("user logged in successfully")
      setErrorMessage('')
      navigate('/')
    }else 
    {
      setErrorMessage("Give correct information")
      setSuccessMessage('')
    }
   
  
  })

    setEmailOrContact('');
    setPassword('');
  
   
  };
  
  

	// API for get requests

  
  



  return (
  
<div>
  
    <div className="flex items-center justify-center min-h-screen bg-green-300">
      <div className="w-full max-w-sm p-6 bg-white rounded shadow-md shadow-slate-600" style={{fontFamily:'Bitter'}}>
    
      {successMessage && <p className="text-green-500 font-bold text-2xl style={{fontFamily:'Caprasimo'}}">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 font-bold text-2xl" style={{fontFamily:'Caprasimo'}}>{errorMessage}</p>}
        <h1 className="text-3xl font-semibold text-center ">Login</h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="emailOrContact" className="block mb-1 font-medium">
              Email or Contact
            </label>
            <input
              type="text"
              id="emailOrContact"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email or contact number"
              value={email_idOrContact}
              onChange={(e) => setEmailOrContact(e.target.value)}
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none" onClick={handleSubmit}
            >
              Login
            </button>  
          
          </div>
        </form>

      </div>
      
    </div>
    
    </div>
  );
};

export default Login;
