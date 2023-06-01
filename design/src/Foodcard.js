import React, { useState, useEffect } from "react";
import { viewfood } from "./Routes/Route";
import './App.css'
// import Card from "./Card"; // import your card component here

function Foodcard() {
  const [food, setFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage, setMembersPerPage] = useState(10);

  const fetchData = async () => {
    const response = await viewfood();
    const data = await response.json();
    setFoods(data.data.foods);

  };

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div>
      <center>
      <div className=" mx-auto pt-[3%] bg-green-300 ">
  <h1 className="text-4xl font-bold mb-4" style={{fontFamily:'Fugaz One'}}>FOOD</h1> <br/>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
  {food.map((foods) => (
            
      <div key={foods.id} className="bg-gray-200 overflow-hidden hover:drop-shadow-xl rounded-lg w-full  ">
        <img src={foods.image}  className="object-cover w-full min-h-10" />
        <div className="px-4 py-2">
          <h2 className="font-bold text-xl mb-2">{foods.name}</h2>
          <p className="text-gray-700 text-base">{foods.description}</p>
          <p className="text-gray-700 text-base mt-2">$Price {foods.cost}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      </center>
    </div>
  );
}

export default Foodcard;

  

