
import React from "react";
// import fonts from "google-fonts";
import './App.css'

//  import aboutpic from './images/about.png';


function About() {
  
  return (
    
    <div className="">
    <div className=" mx-auto py-8 px-10 bg-green-100 w-full  mb-1 drop-shadow-2xl shadow-green-300 pb-[20%]  ">
         <div className="flex flex-wrap ">
      <div className="w-full">
        <h2 className="text-4xl   font-bold text-center pt-[2%] pb-[5px]" style={{fontFamily:'Bitter'}}>About Us</h2>
        {/* <p className="mb-8">
        <h2 className=" text-4xl text-center  font-extrabold  mb-4 ">PINGAARA</h2>
        </p> */}
<blockquote className="block pt-[70px]   rounded-lg ">
          <div className="relative">
          
           
            <p className="text-center text-xl font-semibold "  style={{fontFamily:'Bitter'}}>
            <span className="font-bold text-4xl">&#8220;</span> From the farmers, by the farmers, for the farmers
            </p>
          </div>
          <p className="mt-6 text-xl leading-10 text-center"  style={{fontFamily:'Bitter'}}>
            The Pingaara HFPC Ltd was born and registered on 23 May 2016 
            <br/>under the Companies Act,and the company is limited by shares.<br/>
             The company has 1085 farmer members.
            The area of operation of this company<br/>
             extends to 16 villages of Bantwala taluk.<br/>
             The management of Pingaara HFPC Ltd vests with a Board Of Directors<br/> 
             who are elected as per the provisions of the company's Bye-laws. <br/>
             The Board Of Directors elects the president.<span className="font-bold text-4xl">&#8221;</span>
          </p>
        </blockquote>
        
      </div>
    
    </div>
    </div>
    </div>
  );
}

export default About;
