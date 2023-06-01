import React, { useState, useEffect } from "react";
import { viewfertilizer } from "./Routes/Route";
// import Card from "./Card"; // import your card component here

function Fertilizercart() {
  const [fertilizer, setFertilizers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [membersPerPage, setMembersPerPage] = useState(10);

  const fetchData = async () => {
    const response = await viewfertilizer();
    const data = await response.json();
    setFertilizers(data.data.fertilizers);

  };

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div>
      <center>
      <div className=" mx-auto pt-[3%] bg-green-300">
  <h1 className="text-4xl font-bold mb-4" style={{fontFamily:'Fugaz One'}}>FERTILIZER</h1> <br/>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
  {fertilizer.map((fertilizer) => (
            
      <div key={fertilizer.id} className="bg-gray-200 overflow-hidden hover:drop-shadow-xl rounded-lg w-full h-15  ">
        <img src={fertilizer.image}  className="object-cover w-full h-15" />
        <div className="px-4 py-2">
          <h2 className="font-bold text-xl mb-2">{fertilizer.name}</h2>
          <p className="text-gray-700 text-base">{fertilizer.description}</p>
          <p className="text-gray-700 text-base mt-2">$Price {fertilizer.cost}</p>
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

  

