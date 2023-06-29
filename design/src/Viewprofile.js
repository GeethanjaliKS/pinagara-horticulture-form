import React from 'react';

const Viewprofile = ({ image, name, address, contact }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative">
        <img
          className="w-full h-40 object-cover object-top"
          src={image}
          alt="User Profile"
        />
        <div className="absolute top-0 left-0 p-2">
          <div className="bg-white rounded-full p-1">
            <img
              className="w-16 h-16 rounded-full"
              src={image}
              alt="User Profile"
            />
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-2">{address}</p>
        <p className="text-gray-700 text-base">{contact}</p>
      </div>
    </div>
  );
};

export default Viewprofile;
