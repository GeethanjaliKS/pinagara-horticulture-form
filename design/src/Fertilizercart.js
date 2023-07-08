import React, { useState, useEffect } from "react";
import { viewfertilizer,storecart} from "./Routes/Route";
// import Card from "./Card"; // import your card component here

function Fertilizercart() {
  const [fertilizer, setFertilizers] = useState([]);
  const [name,setName]=useState([]);
  const [description,setDescription]=useState([]);
  const [cost,setCost]=useState([]);
  const [id,setId]=useState([]);
  const [image,setImage]=useState([]);

  // const [addToCart,setAddToCart] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [membersPerPage, setMembersPerPage] = useState(10);

  const fetchData = async () => {
    const response = await viewfertilizer();
    const data = await response.json();
    console.log(data)
    setFertilizers(data.data.fertilizers);

  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart=async (fertilizerId)=> {
  
    const userData = JSON.parse(localStorage.getItem('user'));
     const data = { userData, fertilizerId };
    await storecart({userId:userData,itemId:fertilizerId})
  
  }

  
  return (
    <div>
    <center>
      <div className="mx-auto pt-[3%] bg-green-300 mb-1 drop-shadow-2xl shadow-green-300">
        <h1 className="text-4xl font-bold mb-4 font-bold" style={{ fontFamily: 'Josefin Sans' }}>FERTILIZER</h1> <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ml-2 mr-2">
          {fertilizer.map((fertilizer) => (
            <div key={fertilizer.id} className="bg-gray-200 overflow-hidden hover:drop-shadow-xl rounded-lg">
              <div className="relative h-48">
                <img src={fertilizer.image} className="object-cover w-full h-full" alt={fertilizer.name} />
              </div>
              <div className="px-4 py-2">
                <h2 className="font-bold text-xl mb-2">{fertilizer.name}</h2>
                <p className="text-gray-700 text-base">{fertilizer.description}</p>
                <p className="text-gray-700 text-base mt-2">$Price {fertilizer.cost}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2" onClick={() => addToCart(fertilizer._id)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </center>
  </div>
  
  
  
  );
}

export default Fertilizercart;

  

