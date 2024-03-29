import React, { useState, useEffect } from 'react';
import { deletefertilizerapi, viewfertilizer } from './Routes/routes';
import Fertilizer from './Fertilizer';
import './App.css'

function TableFertilizer() {
  const [fertilizers, setFertilizers] = useState([]);
  const [updateForm,setUpdateForm]=useState(false);
  const [updateFormData,setUpdateFormData]=useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage, setMembersPerPage] = useState(10);

  const fetchData = async () => {
    const response = await viewfertilizer();
    const data = await response.json();
    setFertilizers(data.data.fertilizers);
  };

  useEffect(() => {
    fetchData();
  }, []);


   //delete member
   const handleDelete = async (id) => {
    try {
 const  response= await deletefertilizerapi(id);
   const data = await response.json();
   console.log(data.data)
   
 
   let filterfertilizer= fertilizers.filter((fertilizer) => fertilizer._id !==id);
      setFertilizers(filterfertilizer);
      // console.log(filtermember);
      console.log(fertilizers)
      // Handle success or show notification
    } catch (error) {
      console.log(error.message);
      // Handle error or show error notification
    }
  };

  const handleUpdate=(fertilizer)=>{
    // console.log(member)
   setUpdateFormData([fertilizer])
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
  const currentMembers = fertilizers.slice(indexOfFirstMember, indexOfLastMember);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='pt-[10%]'>
      <center>
      {(!updateForm )?
        <table className="border-collapse border border-slate-400 bg-slate-100">
          <caption className="caption-top font-bold text-lg pt-10 font-serif" style={{fontFamily:'Righteous'}}>FERTILIZER DETAILS</caption>
          <thead>
            <tr>
              <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>NAME</th>
              <th className="border border-slate-300" style={{fontFamily:'Tektur'}}>COST</th>
              <th className="border border-slate-300"style={{fontFamily:'Tektur'}}>DESCRIPTION </th>
              <th className="border border-slate-300"style={{fontFamily:'Tektur'}}>IMAGE</th>
              <th className="border border-slate-300"style={{fontFamily:'Tektur'}}>ACTIVITY</th>
            </tr>
          </thead>
          <tbody>
            {fertilizers.map((fertilizers) => (
              <tr key={fertilizers._id}>
                <td className="border border-slate-300" style={{fontFamily:'Poppins'}}>{fertilizers.name}</td>
                <td className="border border-slate-300" style={{fontFamily:'Poppins'}}>{fertilizers.cost}</td>
                <td className="border border-slate-300" style={{fontFamily:'Poppins'}}>{fertilizers.description}</td>
                <td className="border border-slate-300 " style={{fontFamily:'Poppins'}}>
                  <img src={fertilizers.image} alt={fertilizers.name} className="w-20 h-20 object-cover mt-3 mb-3" />
                </td>
                <td className="border border-slate-300 " style={{fontFamily:'Poppins'}}><button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleDelete(fertilizers._id)}>Delete</button>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleUpdate(fertilizers) }>Upadte</button>
                </td>


              </tr>
            ))}
          </tbody>
        </table>
:
<Fertilizer updateFormData={updateFormData} updateForm={updateForm}/> 
}
        <div className="pagination mt-4">
          {membersPerPage < fertilizers.length && (
            <div className="flex">
              {[...Array(Math.ceil(fertilizers.length / membersPerPage)).keys()].map((number) => (
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

export default TableFertilizer;
