import React, { useState, useEffect } from "react";
import { viewfood,storecart} from "./Routes/Route";
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

  const addToCart=async (foodId)=> {
  
    const userData = JSON.parse(localStorage.getItem('user'));
    console.log(userData)
     const data = { userData, foodId };
     console.log(data)
    await storecart({userId:userData,itemId:foodId})
  
  }
  
  return (
    <div>
      
      <div className=" mx-auto pt-[3%] bg-green-100  mb-1 drop-shadow-2xl shadow-green-300  ">
      <h1 className="font-bold text-green-600 text-4xl inline-block  shadow-lg  shadow-green-300 mb-[2%] md:w-1/2 md:mx-96  sm:w-full mb-6 md:mb-10 ml-10 mr-10 rounded-lg p-[2%] text-center bg-white pb-[2%] " style={{ fontFamily: 'Bitter' }}>SNACKS</h1> <br />


<center>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-5 mr-2 pb-[3%] h-[450px]  ">
  {food.map((foods) => (
            
      <div key={foods.id} className="flex bg-gray-200 overflow-hidden  rounded-2xl  border-2 shadow-lg shadow-green-500  hover:shadow-lg focus:shadow-lg border-4 relative m-6">
       <div className="  ">
        <img src={foods.image}  className="   " />
    </div>

        <div className="px-4 py-2 absolute bottom-0 bg-white w-full pb-6 ">
          <h2 className="font-bold text-2xl mb-2" style={{fontFamily:'Lugrasimo'}}>{foods.name}</h2>
          {/* <p className="text-gray-700 text-xl" style={{fontFamily:'Lugrasimo'}}>{foods.description}</p> */}
          <p className="text-gray-700 text-xl mt-2 font-bold" style={{fontFamily:'Lugrasimo'}}>Price {foods.cost}/Kg</p>
          <button className=" bg-green-300 hover:bg-green-600 text-white font-bold py-2 px-4 w-full mt-2" onClick={() => addToCart(foods._id)}>
  Add to Cart
</button>

        </div>
      </div>
    ))}
  </div>
  </center>
</div>

      
    </div>
  );
}


export default Foodcard;

  

