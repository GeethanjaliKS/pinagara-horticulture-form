import React, { useState } from 'react';
import { FiUsers, FiCamera, FiMessageSquare } from 'react-icons/fi';
import {useNavigate}  from "react-router-dom"

const ViewProfile = () => {
  const [isLogOut, setIsLogOut] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('user');
    setIsLogOut(true);
    navigate("/login")
  };

 

  return (
    <div className="p-16">
      <div className="p-8 bg-white shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"></div>
          <div className="relative">
  <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 overflow-hidden">
    <img src={user.image} alt="User" className="w-full h-full object-cover" />
  </div>
</div>
          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button
              className="text-white py-2 px-4 uppercase rounded bg-red-400 hover:bg-red-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              onClickCapture={logout}
            >
              Logout
            </button>
          </div>
        </div>
        <div className="mt-20 text-center pb-12">
          <h1 className="text-4xl font-medium text-gray-700">
            {user.name}
          </h1>
          <p className="font-light text-gray-600 mt-3">{user.address}</p>
          <p className="mt-8 text-gray-500">{user.contact}</p>
          <p className="mt-2 text-gray-500">{user.email_id}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
