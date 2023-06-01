import React from 'react'
import pre from './images/president.png'
import ceo from './images/CEO.png'
import director from './images/director.png'
import director1 from './images/director1.png'
import director3 from './images/director3.png'
import director4 from './images/director4.png'
import "./App.css"

function Team() {
  return (
    <div className='bg-green-300'>
    <h2 className="text-4xl  mb-6 font-bold text-center" style={{fontFamily:'Josefin Sans'}}>Our Team</h2> 
    <div className='flex flex-wrap justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  '>
      
      <div className='w-full md:w-1/4 p-4'>
        <div className='block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 '>
          
          <a href='#!'>
            <img
              className='rounded-t-lg '
              src={pre}
              alt=''
            />
          </a>
          <div className='p-6 '>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
              Mr.Ramakishore K
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
              Designation:President
            </p>
          </div>
        </div>
      </div>
      
      <div className='w-full md:w-1/4 p-4'>
        <div className='block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
          <a href='#!'>
            <img
              className='rounded-t-lg'
              src={ceo}
              alt=''
            />
          </a>
          <div className='p-6'>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
              Mr.Pradeep S
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
           Designation:CEO
            </p>
          </div>
        </div>
      </div>

      <div className='w-full md:w-1/4 p-4'>
        <div className='block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
          <a href='#!'>
            <img
              className='rounded-t-lg'
              src={director}
              alt=''
            />
          </a>
          <div className='p-6'>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
              Mr.Rajaram C G
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
           Designation:Director
            </p>
          </div>
        </div>
      </div>

      <div className='w-full md:w-1/4 p-4'>
        <div className='block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
          <a href='#!'>
            <img
              className='rounded-t-lg'
              src={director1}
              alt=''
            />
          </a>
          <div className='p-6'>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
              Mr.Rajaram C G
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
           Designation:Director
            </p>
          </div>
        </div>
      </div>

      <div className='w-full md:w-1/4 p-4'>
        <div className='block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
          <a href='#!'>
            <img
              className='rounded-t-lg'
              src={director3}
              alt=''
            />
          </a>
          <div className='p-6'>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
              Mr.Ramesh N
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
           Designation:Director
            </p>
          </div>
        </div>
      </div>

      <div className='w-full md:w-1/4 p-4'>
        <div className='block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
          <a href='#!'>
            <img
              className='rounded-t-lg'
              src={director4}
              alt=''
            />
          </a>
          <div className='p-6'>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
              Mrs.Pushpha S Kamath
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
           Designation:Director
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Team
