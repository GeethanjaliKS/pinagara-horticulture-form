import React, { useState } from 'react';
import { FiUsers, FiCamera, FiMessageSquare } from 'react-icons/fi';
import {useNavigate}  from "react-router-dom"

const ViewProfile = ({setIsLoggedIn}) => {
  const [isLogOut, setIsLogOut] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));
console.log('userLogin',user)
  
const navigate = useNavigate()

  const logout = () => {
    const remove=localStorage.removeItem('user');
    console.log('remove',remove)

    setIsLogOut(true);
    // navigate("/login")
    setIsLoggedIn(false)
  };

 

  return (
  <div className="p-16 bg-green-100">
      <div className="p-6 bg-white shadow-xl shadow-green-300 hover:shadow-green-600 mt-24 md:w-[50%] md:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {/* Empty div for spacing */}
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"></div>

          {/* User Image */}
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 overflow-hidden">
              <img src={user.image} alt="User" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Logout button */}
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button
              className="text-white py-2 px-4 uppercase rounded bg-red-400 hover:bg-red-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              onClickCapture={logout}
            >
              Logout
            </button>
          </div>
        </div>

        {/* User Information */}
        <div className="mt-20 text-center pb-12">
          <h1 className="text-2xl font-medium text-gray-700">
            {user.name}
          </h1>
          <p className="font-light text-gray-600 mt-3">{user.address}</p>
          <p className=" text-gray-500">{user.contact}</p>
          <p className=" text-gray-500">{user.email_id}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
