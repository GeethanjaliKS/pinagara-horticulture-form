import React,{useState} from 'react'

function Login() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [pincode, setPincode] = useState('');
    const [contactNumber, setContactNumber] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
    };
  return (
    <div className='bg-green-200 h-full pb-5 '>
    <div className="max-w-md mx-auto  pt-[2%]  ">
        <h1 className='text-center font-bold text-2xl my-2'>Login</h1>
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
           <label className="block text-gray-700 font-bold mb-2" htmlFor="contactNumber">
             Contact Number
           </label>
           <input
             className="appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-80"
             id="contactNumber"
             type="text"
             placeholder="Enter your contact number"
             value={contactNumber}
             onChange={(e) => setPincode(e.target.value)}
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
             Pincode
           </label>
           <input
             className="appearance-none border rounded w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-80"
             id="contactNumber"
             type="text"
             placeholder="Enter your pincode"
             value={pincode}
             onChange={(e) => setContactNumber(e.target.value)}
           />
         </div>
         <br/>
      
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

export default Login