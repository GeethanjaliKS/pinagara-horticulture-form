import React, { useState,useEffect } from 'react'
import { viewworker } from './Routes/Route';
import { Person,PhoneVibrate } from 'react-bootstrap-icons';
import './App.css';

function Worker() {

const[totalWoker,setTotalWorker]=useState(0)
  
useEffect(() => {
  
  const workercount = async () => {
    try {
      const response = await  viewworker();
      const data = await response.json();
      // console.log(data)
     
      
      const { totalWorker } = data.data;
      setTotalWorker(totalWorker); 
      console.log(totalWorker);
      
    } catch (error) {
      console.error(error);
    }
  };

 workercount ();
}, []);

  return (
    <div className='bg-green-100 pt-1 pb-1'>
    <div className=' m-[4%] '>
    <div className="border max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-xl shadow-gray-400 pt-[2%]">
      <h1 className='text-center text-4xl' style={{fontFamily:'Bitter'}}>Customer Hire Center</h1>
     <div className='text-center pt-[2%] mb-[2%] mt-[5%] leading-10 ' style={{fontFamily:'Tektur'}}>
      <p>weed cutters</p>
      <p>Spraying and harvesting(Arecanuts)</p>
      <p>Tillers</p>
      <p>Arecanut dehusking machine</p>
      <p>Chain saw</p>
      <p>Earth digger(13 inch bit)</p>
      <p>Earth digger(8 inches bit)</p>
      <p>Power sprayers</p>
      <p className='font-bold ' style={{fontFamily:'Tektur'}} >Total Workers Available Now: {totalWoker}</p>
      <p className='font-bold ' style={{fontFamily:'Tektur'}}>Contact Us: +91 9480253747 </p>
</div>

</div>

    {/* <div className="flex items-center mr-4">
      <p>Total workers available in</p>
      <Person size={40} className="text-black-500" />
      <h1 className="text-xl font-bold">{totalWoker}</h1>
    </div> <br/>
    <div className="flex items-center mr-4">
      <p>Contact Us</p>
      <PhoneVibrate size={40} className="text-black-500" />
      <h1>+916273627897</h1>
    </div> */}
<div className='grid grid-cols-2 pt-[3%] gap-x-[6%] border-3 focus '>
{/* <div className='border-2 mr-4 shadow-lg shadow-green-300 max-w-sm p-[4%] mb-[3%] ml-8 hover:shadow focus bg-white'>

<h1 className='font-bold' style={{fontFamily:'Tektur'}} >Total Workers Available Now: {totalWoker}</h1>
</div> */}
{/* <div className='border-2 mr-4 shadow-lg shadow-green-300 max-w-sm p-[4%] mb-[3%]  hover:shadow focus bg-white'>

<h1 className='font-bold' style={{fontFamily:'Tektur'}}>Contact Us: +91 9480253747 </h1>
</div> */}
</div>
   </div></div>
  
    
  )
}

export default Worker