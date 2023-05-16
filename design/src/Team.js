import React from 'react'
import pre from './images/president.png'
import "./App.css"

function Team() {
  return (
    <div className='bg-green-300'>
    <h2 className="text-2xl  mb-4 hover:font-bold">Our Team</h2> 
    <div className='flex flex-wrap justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300'>
      
      <div className='w-full md:w-1/4 p-4 '>
        <div className='block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 '>
          <a href='#!'>
            <img
              className='rounded-t-lg'
              src={pre}
              alt=''
            />
          </a>
          <div className='p-6'>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
              Card title 1
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>

      <div className='w-full md:w-1/4 p-4'>
        <div className='block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
          <a href='#!'>
            <img
              className='rounded-t-lg'
              src='https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg'
              alt=''
            />
          </a>
          <div className='p-6'>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
              Card title 2
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>

      <div className='w-full md:w-1/4 p-4'>
        <div className='block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
          <a href='#!'>
            <img
              className='rounded-t-lg'
              src='https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg'
              alt=''
            />
          </a>
          <div className='p-6'>
            <h5 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
              Card title 3
            </h5>
            <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Team
