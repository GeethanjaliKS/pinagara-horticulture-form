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
    <div className='mx-auto py-8 px-4 bg-green-100 w-full  mb-1 drop-shadow-2xl '>
    <h2 className="text-4xl  mb-4 font-bold text-center" style={{fontFamily:'Bitter'}}>Our Team</h2> 
    <div className='flex flex-wrap justify-center  '>
      
      <div className='w-full md:w-1/4 p-4  ml-3 mr-3 '>
        <div className='block rounded-lg bg-white  dark:bg-neutral-700 shadow-lg shadow-green-300 hover:shadow-green-600'>
          
          <a href='#!'>
            <img
              className='rounded-t-lg '
              src={pre}
              alt=''
            />
          </a>
          <div className='p-6 '>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center'>
              Mr.Ramakishore K
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200 text-center'>
              Designation:President
            </p>
          </div>
        </div>
      </div>
      
      <div className='w-full md:w-1/4 p-4'>
        <div className='block rounded-lg bg-white  dark:bg-neutral-700 shadow-lg shadow-green-300 hover:shadow-green-600'>
          <a href='#!'>
            <img
              className='rounded-t-lg'
              src={ceo}
              alt=''
            />
          </a>
          <div className='p-6'>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center'>
              Mr.Pradeep S
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200 text-center'>
           Designation:CEO
            </p>
          </div>
        </div>
      </div>

      <div className='w-full md:w-1/4 p-4'>
        <div className='block rounded-lg bg-white  dark:bg-neutral-700 shadow-lg shadow-green-300 hover:shadow-green-600'>
          <a href='#!'>
            <img
              className='rounded-t-lg'
              src={director}
              alt=''
            />
          </a>
          <div className='p-6'>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center'>
              Mr.Rajaram C G
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200 text-center'>
           Designation:Director
            </p>
          </div>
        </div>
      </div>

      <div className='w-full md:w-1/4 p-4'>
        <div className='block rounded-lg bg-white  dark:bg-neutral-700 shadow-lg shadow-green-300 hover:shadow-green-600'>
          <a href='#!'>
            <img
              className='rounded-t-lg'
              src={director1}
              alt=''
            />
          </a>
          <div className='p-6'>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center'>
              Mr.Rajaram C G
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200 text-center'>
           Designation:Director
            </p>
          </div>
        </div>
      </div>

      <div className='w-full md:w-1/4 p-4'>
        <div className='block rounded-lg bg-white  dark:bg-neutral-700 shadow-lg shadow-green-300 hover:shadow-green-600'>
          <a href='#!'>
            <img
              className='rounded-t-lg'
              src={director3}
              alt=''
            />
          </a>
          <div className='p-6'>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center'>
              Mr.Ramesh N
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200 text-center'>
           Designation:Director
            </p>
          </div>
        </div>
      </div>

      <div className='w-full md:w-1/4 p-4'>
        <div className='block rounded-lg bg-white  dark:bg-neutral-700 shadow-lg shadow-green-300 hover:shadow-green-600'>
          <a href='#!'>
            <img
              className='rounded-t-lg'
              src={director4}
              alt=''
            />
          </a>
          <div className='p-6'>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center'>
              Mrs.Pushpha S Kamath
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200 text-center'>
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
