
import React from "react";
// import fonts from "google-fonts";
import './App.css'
//  import aboutpic from './images/about.png';


function About() {
  return (
    <div className=" mx-auto py-8 px-4 bg-green-300 w-full ">
         <div className="flex flex-wrap ">
      <div className="w-full">
        <h2 className="text-4xl  mb-4 font-bold text-center" style={{fontFamily:'Josefin Sans'}}>About Us</h2>
        {/* <p className="mb-8">
        <h2 className=" text-4xl text-center  font-extrabold  mb-4 ">PINGAARA</h2>
        </p> */}
        <p className="mb-8 text-red-600 text-italic font-normal hover:italic hover:font-extrabold">
        From the farmers the farmers by the farmers
        </p>
        <p className="mb-8 leading-8 justify-center font-bold" style={{fontFamily:"'Josefin Sans', sans-serif"}}> 
        The Pingaara HFPC Ltd was born and registered on 23 May 2016 under companies act and that the company is limited by shares.The company is having 1085 farmer members.
        The area of operation of this company extends 16 villages of Bantwala taluk.The management of Pingaara HFPC Ltd vests with a Board Of Directors are elected per the provision of Bye-laws of the company.Board Of Directors elected the president.
        </p>
        
      </div>
       {/* <div className="right-0 "> 
        <img
          src={aboutpic}
          alt="About Us"
          height={200}
          width={200}

        
        /> */}
    
    </div>
    </div>
  );
}

export default About;
