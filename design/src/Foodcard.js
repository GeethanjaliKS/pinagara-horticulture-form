import React, { useState, useEffect } from "react";
import { viewfood } from "./Routes/Route";
import './App.css'
// import Card from "./Card"; // import your card component here

function Foodcard() {
  const [food, setFoods] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [membersPerPage, setMembersPerPage] = useState(10);

  
   
  const [name,setName]=useState([]);
  const [description,setDescription]=useState([]);
  const [cost,setCost]=useState([]);
  const [id,setId]=useState([]);
  const [image,setImage]=useState([]);

  const fetchData = async () => {
    const response = await viewfood();
    const data = await response.json();
    setFoods(data.data.foods);

  };

  useEffect(() => {
    fetchData();
  }, []);

  // const addToCart = async (e) => {
  //   e.preventDefault();
  //   await storefood({name:name,description:description,cost:cost,image:image})
  // }
  
  return (
    <div>
      <center>
      <div className=" mx-auto pt-[3%] bg-green-300  mb-1 drop-shadow-2xl shadow-green-300 ">
  <h1 className="text-4xl font-bold mb-4 font-bold" style={{fontFamily:'Josefin Sans'}} >FOOD</h1> <br/>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-2 mr-2">
  {food.map((foods) => (
            
      <div key={foods.id} className="bg-gray-200 overflow-hidden hover:drop-shadow-xl rounded-lg w-full  ">
        <img src={foods.image}  className="object-cover w-[100%] h-15" />
        <div className="px-4 py-1">
          <h2 className="font-bold text-xl mb-2">{foods.name}</h2>
          <p className="text-gray-700 text-base">{foods.description}</p>
          <p className="text-gray-700 text-base mt-2">$Price {foods.cost}</p>
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2 " onClick={(e) => addToCart(foods)}>Add to Cart</button> */}
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

  

