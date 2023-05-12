import React,{useState} from 'react'
import { addworker } from './Routes/routes';

function Workers() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [email, setEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState('');

    
    const handleSubmit = async (e) => {
        console.log(name,contactNumber,address,email)
          e.preventDefault();
        await addworker({name:name,address:address,contact:contactNumber,email_id:email}).then((res)=>res.json()).then((res)=>console.log(res))
          // Handle form submission here
          console.log("Form submitted");
          setSuccessMessage('Worker add successful!');
          
      
      };
  return (
    <div>
        <div className="max-w-md mx-auto my-20 pt-[10%]  ">
        {successMessage && <p className="text-green-500">{successMessage}</p>}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-80"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div><br/>
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="contactNumber">
              Contact Number
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-80"
              id="contactNumber"
              type="text"
              placeholder="Enter your contact number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <br/>
          <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email ID
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-80"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
          <div className="col-span-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
              Address
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-80"
              id="address"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
     
    </div>
    </div>
  )
}

export default Workers