import React from 'react';
 import { Person ,Cart,CartCheck,PersonCheck} from 'react-bootstrap-icons'
import { motion } from 'framer-motion';


import './App.css';

function Count() {
  return (
    <div>
<div className="pt-[10%]">
  <div className="cols">
    
  <div className="grid grid-rows-2">
    <div className=" grid grid-cols-2 " >
      {/* <motion.div animate={{x:0}} initial={{x:-100}} transition={{type:'spring'}} > */}
    <div className="border-1 shadow-lg rounded  flex flex-nowrap p-2 heroBox  ">
      <Person size={60} className='boxIcons pt-5  ' />
      <div className='ele flex flex-col items-start justify-center ml-2'>
       
      <p style={{fontFamily:'Bitter '}} className='text-bold'>Total Member</p> 
      <h1 style={{fontFamily:'Fredoka'}} className='indent-[10%]'>200</h1> 
      
    
      </div>
    </div>
    {/* </motion.div> */}
    </div>
    <div className="grid grid-cols-2 ">
    {/* <motion.div animate={{x:600}} initial={{x:100}} transition={{delay:0.1}} > */}
    <div className="border-1 shadow-lg rounded  flex flex-nowrap p-2 heroBox ">
      <Cart size={60} className='boxIcons pt-4'/>
      <div className='ele flex flex-col items-start justify-center ml-2'>
      <p style={{fontFamily:'Bitter '}} className='text-bold'>Total Order</p>
      
      <h1 style={{fontFamily:'Fredoka '}} className='indent-5'>1000</h1>
      </div>
    </div>
    {/* </motion.div> */}
    </div></div>
    <div className="grid grid-rows-2">
    <div className=" col-start-4 col-end-4">
    {/* <motion.div animate={{x:0}} initial={{x:-100}} transition={{delay:0.2}} > */}
    <div className="border-1 shadow-lg rounded  flex flex-nowrap p-2 heroBox">
      <CartCheck size={60} className='boxIcons pt-4'/>
      <div className='ele flex flex-col items-start justify-center ml-2'>
      <p style={{fontFamily:'Bitter '}} className='text-bold'>Pending Order</p>
      
      <h1 style={{fontFamily:'Fredoka '}} className='indent-2'>1610</h1>
      </div>
    </div> </div>
    {/* </motion.div> */}
    
    <div className="col-start-4 col-end-4">
    {/* <motion.div animate={{x:600}} initial={{x:100}} transition={{delay:0.3}}> */}
    <div className="border-1 shadow-lg rounded  flex flex-nowrap p-2 heroBox">
      <PersonCheck size={60} className='boxIcons pt-4'/>
      <div className='ele flex flex-col items-start justify-center ml-2'>
      <p style={{fontFamily:'Bitter '}} className='text-bold'>Total Worker</p>
      
      <h1 style={{fontFamily:'Fredoka '}} className='indent-0'>10000</h1>
      </div>
    </div>    
    {/* </motion.div> */}
    </div></div>
    {/* <div className="grid grid-rows-2">
    <div className="grid grid-cols-2"> */}
    {/* <motion.div animate={{x:0}} initial={{x:-100}} transition={{delay:0.4}}> */}
    {/* <div className="border-1 shadow-lg rounded  flex flex-nowrap p-2 heroBox"> */}
      {/* <CurrencyRupee size={60} className='boxIcons pt-4'/> */}
      {/* <div className='ele -space-y-5 indent-10'>
      <p>Today's Total Expense</p>
      
      <h1 style={{fontFamily:'Fredoka '}} className='indent-2'>100</h1>
      </div>
    </div> </div> */}
    {/* </motion.div> */}
    {/* </div> */}


    </div> </div></div>
  )
}

export default Count