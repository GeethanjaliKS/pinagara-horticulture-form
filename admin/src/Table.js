import React, { useState, useEffect } from 'react';
import { updatemember, viewmembers } from './Routes/routes';
import { deletememberapi } from './Routes/routes';
import Member from './Member';


function Table() {
  const [members, setMembers] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [membersPerPage, setMembersPerPage] = useState(10);
  // const [deletedMemberId, setDeletedMemberId] = useState(null);
  // const [currentMembers,setCurrentMembers]=useState([]);
  const [updateForm,setUpdateForm]=useState(false);
  const [updateFormData,setUpdateFormData]=useState([])
  
  
  //view details
  const fetchData = async () => {
    const response = await viewmembers();
    const data = await response.json();
    setMembers(data.data.members);
  
 };

  useEffect(() => {
    fetchData();
  }, []);

  //delete member
  const handleDelete = async (id) => {
    try {
 const  response= await deletememberapi(id);
   const data = await response.json();
   console.log(data.data)
   
 
   let filtermember= members.filter((member) => member._id !==id);
      setMembers(filtermember);
      // console.log(filtermember);
      // console.log(members)
      // Handle success or show notification
    } catch (error) {
      console.log(error.message);
      // Handle error or show error notification
    }
  };

// update member

const handleUpdate=(member)=>{
   console.log(member)
  setUpdateFormData([member])
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
//   const indexOfLastMember = currentPage * membersPerPage;
//   const indexOfFirstMember = indexOfLastMember - membersPerPage;
//  setMembers( members.slice(indexOfFirstMember, indexOfLastMember));
//  console.log(members)
//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    
     
    <div className='pt-[10%]'>
      <center>
      {(!updateForm )?
        <table className="border-collapse border border-slate-400 bg-slate-100 ">
          <caption className="caption-top font-bold text-lg pt-10 font-serif">MEMBER DETAILS</caption>
          <thead>
            <tr>
            <th className="border border-slate-300">Member ID</th>
              <th className="border border-slate-300">NAME</th>
              <th className="border border-slate-300">ADDRESS</th>
              <th className="border border-slate-300">CONTACT NUMBER</th>
              <th className="border border-slate-300">EMAIL-ID</th>
              <th className="border border-slate-300">IMAGE</th>
              {/* <th className="border border-slate-300">DELETE BUTTON</th> */}
            </tr>
          </thead>
          <tbody>
            {members.map((member,index) => (
            
              <tr key={member._id}>
              
                <td className="border border-slate-300">{index}</td>
                <td className="border border-slate-300">{member.name}</td>
                <td className="border border-slate-300">{member.address}</td>
                <td className="border border-slate-300">{member.contact}</td>
                <td className="border border-slate-300">{member.email_id}</td>
                <td className="border border-slate-300 ">
                  <img src={member.image} alt={member.name} className="w-20 h-20 object-cover mt-3 mb-3" />
                </td>
                <td className="border border-slate-300   "><button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleDelete(member._id)}>Delete</button>
</td>


<td className="border border-slate-300   "><button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleUpdate(member) }>Upadte</button>
</td>


              </tr>
              ))}
          </tbody>
        </table>
        :
<Member updateFormData={updateFormData} updateForm={updateForm}/> 
}

        {/* <div className="pagination mt-4">
          {membersPerPage < members.length && (
            <div className="flex">
              {[...Array(Math.ceil(members.length / membersPerPage)).keys()].map((number) => (
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
        </div> */}
      </center>
    </div>


 );
}


export default Table;



