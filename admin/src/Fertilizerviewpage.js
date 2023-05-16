import React from 'react'
import { Link } from 'react-router-dom';

function Fertilizerviewpage() {
  return(
  <center>
  <div className='pt-[15%] '>
<div className=''>
<div
className="block rounded-lg bg-slate-300  p-6 drop-shadow-md hover:drop-shadow-xl duration-300 dark:bg-neutral-800  md:w-1/2">
<h5
  className="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-100  hover:font-bold " style={{fontFamily:'Bruno Ace SC'}}>
  Adding Member
</h5><br/> <br/>
<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
  Some quick example text to build on the card title and make up the 
  bulk of the card's content.
</p>
<div className='text-end'>
<Link to="/fertilizer" className="text-blue-500 font-bold font-serif hover:text-blue-900 text-2xl " style={{fontFamily:'Dancing Script'}}>
          ADD
        </Link> 
</div>
{/* <div className='text-center'>
  <Link to="/table" className="text-blue-500 font-bold font-serif hover:text-blue-900 text-2xl ">
          VIEW
        </Link>       
        </div> */}
</div>

<div className='pt-[5%]  '>
<div
  className="block rounded-lg bg-slate-300  p-6 drop-shadow-md hover:drop-shadow-xl duration-300 dark:bg-neutral-800  md:w-1/2 ">
<h5
  className="mb-2 text-2xl font-medium leading-tight text-neutral-800 dark:text-neutral-100 " style={{fontFamily:'Bruno Ace SC'}}>
  Viewing Member
</h5><br/><br/>
<p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
  Some quick example text to build on the card title and make up the 
  bulk of the card's content.
</p>
<div className='text-end'>
  <Link to="/tablefertilizer" className="text-blue-500 font-bold font-serif hover:text-blue-900 text-2xl" style={{fontFamily:'Dancing Script'}}>
          VIEW
        </Link> 
</div> 
</div>
</div></div> </div>

</center>  
)
}

export default Fertilizerviewpage