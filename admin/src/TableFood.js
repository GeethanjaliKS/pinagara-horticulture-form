import React, { useState, useEffect } from 'react';
import { deletefoodapi, viewfood } from './Routes/routes';
import Food from './Food';
import './App.css';

function TableFood() {
  const [foods, setFoods] = useState([]);
  const [updateForm,setUpdateForm]=useState(false);
  const [updateFormData,setUpdateFormData]=useState([])
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

  const handleDelete = async (id) => {
    try {
 const  response= await deletefoodapi(id);
   const data = await response.json();
   console.log(data.data)
   
 
   let filterfood= foods.filter((item) => item._id !==id);
      setFoods(filterfood);
      // console.log(filtermember);
      console.log(foods)
      // Handle success or show notification
    } catch (error) {
      console.log(error.message);
      // Handle error or show error notification
    }
  };

// update Food

const handleUpdate=(item)=>{
  // console.log(member)
 setUpdateFormData([item])
 try{
   // const response=await updatemember(id);
   // const data=await response.json();
   // console.log(data.data)
   setUpdateForm(!updateForm);
 }catch(error){
   console.log(error.message)
 }
}


  // Get current members
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = foods.slice(indexOfFirstMember, indexOfLastMember);

  // // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='pt-[10%]'>
      <center>
      {(!updateForm )?
        <table className="border-collapse border border-slate-400 bg-slate-100">
          <caption className="caption-top font-bold text-lg pt-10 font-serif">FOOD DETAILS</caption>
          <thead>
            <tr>
              <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>NAME</th>
              <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>COST</th>
              <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>DESCRIPTION </th>
              <th className="border border-slate-300"style={{fontFamily:'Tektur'}}>IMAGE</th>
              <th className="border border-slate-300"style={{fontFamily:'Tektur'}}>ACTIVITY</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((foods) => (
              <tr key={foods._id}>
                <td className="border border-slate-300" style={{fontFamily:'Poppins'}}>{foods.name}</td>
                <td className="border border-slate-300" style={{fontFamily:'Poppins'}}>{foods.cost}</td>
                <td className="border border-slate-300" style={{fontFamily:'Poppins'}}>{foods.description}</td>
                <td className="border border-slate-300 ">
                  <img src={foods.image} alt={foods.name} className="w-20 h-20 object-cover mt-3 mb-3" />
                </td>
                <td className="border border-slate-300" style={{fontFamily:'Poppins'}}><button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleDelete(foods._id)}>Delete</button>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleUpdate(foods) }>Upadte</button>

                </td>

              </tr>
            ))}
          </tbody>
        </table>
          :
          <Food updateFormData={updateFormData} updateForm={updateForm}/> 
          }

        <div className="pagination mt-4">
          {membersPerPage < foods.length && (
            <div className="flex">
              {[...Array(Math.ceil(foods.length / membersPerPage)).keys()].map((number) => (
                <div
                  key={number}
                  className={`mx-1 px-3 py-1 border border-gray-300 hover:bg-gray-200 ${
                    currentPage === number + 1 ? 'bg-gray-300' : ''
                  }`}
                  onClick={() => paginate(number + 1)}
                >
                  {number + 1}
                </div>
              ))}
            </div>
          )}
        </div>
      </center>
    </div>
  );
}

export default TableFood;
