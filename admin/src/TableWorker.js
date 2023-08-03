import React, { useState, useEffect } from 'react';
import { deleteworkapi, viewworker } from './Routes/routes';
import Workers from './Workers';
import './App.css';

function TableWorker() {
  const [workers, setWorkers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage, setMembersPerPage] = useState(10);
  const [updateForm,setUpdateForm]=useState(false);
  const [updateFormData,setUpdateFormData]=useState([])
//view data
  const fetchData = async () => {
    const response = await viewworker();
    const data = await response.json();
    setWorkers(data.data.workers);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //delete worker
  const handleDelete = async (id) => {
    try {
 const  response= await deleteworkapi(id);
   const data = await response.json();
   console.log(data.data)
   
 
   let filterworker= workers.filter((worker) => worker._id !==id);
      setWorkers(filterworker);
      // console.log(filtermember);
      console.log(workers)
      // Handle success or show notification
    } catch (error) {
      console.log(error.message);
      // Handle error or show error notification
    }
  };
//update
  const handleUpdate=(worker)=>{
    // console.log(worker)
   setUpdateFormData([worker])
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
  const currentMembers = workers.slice(indexOfFirstMember, indexOfLastMember);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='pt-[10%]'>
      <center>
      {(!updateForm )?
        <table className="border-collapse border border-slate-400 bg-slate-100">
          <caption className="caption-top font-bold text-lg pt-10 font-serif" style={{fontFamily:'Righteous'}}>WORKERS DETAILS</caption>
          <thead>
            <tr>
              <th className="border border-slate-300"style={{fontFamily:'Tektur'}}>NAME</th>
              <th className="border border-slate-300"style={{fontFamily:'Tektur'}}>CONTACT</th>
              <th className="border border-slate-300"style={{fontFamily:'Tektur'}}>EMAIL-ID </th>
              <th className="border border-slate-300"style={{fontFamily:'Tektur'}}>ADDRESS</th>
              <th className="border border-slate-300"style={{fontFamily:'Tektur'}}>IMAGE</th>
              <th className="border border-slate-300"style={{fontFamily:'Tektur'}}>ACTIVITY</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((workers) => (
              <tr key={workers._id}>
                <td className="border border-slate-300" style={{fontFamily:'Poppins'}}>{workers.name}</td>
                <td className="border border-slate-300" style={{fontFamily:'Poppins'}}>{workers.contact}</td>
                <td className="border border-slate-300" style={{fontFamily:'Poppins'}}>{workers.email_id}</td>
                <td className="border border-slate-300" style={{fontFamily:'Poppins'}}>{workers.address}</td>
                <td className="border border-slate-300 ">
                  <img src={workers.image} alt={workers.name} className="w-20 h-20 object-cover mt-3 mb-3" />
                </td>
                <td className="border border-slate-300" style={{fontFamily:'Poppins'}}><button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleDelete(workers._id)}>Delete</button>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleUpdate(workers) }>Upadte</button>

              </td>


              </tr>
            ))}
          </tbody>
             </table>
               :
               <Workers updateFormData={updateFormData} updateForm={updateForm}/> 
               }
                  

        <div className="pagination mt-4">
          {membersPerPage < workers.length && (
            <div className="flex">
              {[...Array(Math.ceil(workers.length / membersPerPage)).keys()].map((number) => (
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

export default TableWorker;
