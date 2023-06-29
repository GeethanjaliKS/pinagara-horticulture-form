import React, { useState, useEffect } from 'react';
import { addmembership, updatemember, viewmembers } from './Routes/routes';
import { deletememberapi } from './Routes/routes';
import Member from './Member';


function Table() {
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage, setMembersPerPage] = useState(10);
  const [deletedMemberId, setDeletedMemberId] = useState(null);
  const [currentMembers,setCurrentMembers]=useState([]);
  const [updateForm,setUpdateForm]=useState(false);
  const [updateFormData,setUpdateFormData]=useState([])
  const [searchInput, setSearchInput] = useState('');
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [membership, setMembership]= useState([]);
  
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
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

const handleMember= async(id)=>{
  // console.log(id)
  try {
    const  response= await addmembership(id);
    console.log(response)
      const data = await response.json();
      console.log(data.data)
      
       } catch (error) {
         console.log(error.message);
         // Handle error or show error notification
       }
     };







useEffect(() => {
  const filteredMembers = members.filter((member) => {
    const name = member.name.toLowerCase();
    const address = member.address.toLowerCase();
    const contact = member.contact.toLowerCase();
    const email = member.email_id.toLowerCase();
    const searchValue = searchInput.toLowerCase();

    return (
      name.includes(searchValue) ||
      address.includes(searchValue) ||
      contact.includes(searchValue) ||
      email.includes(searchValue)
    );
  });

  setFilteredMembers(filteredMembers);

 const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  setCurrentMembers(members.slice(indexOfFirstMember, indexOfLastMember));
}, [searchInput, members, currentPage, membersPerPage]);


  return (
    
     
    <div className='pt-[10%]'>
        <div className="mb-3">
        <input
          type="search"
          className="relative m-0 w-1/2 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          id="exampleSearch"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
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
            {filteredMembers.map((member,index) => (
            
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


<td className="border border-slate-300   "><button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => handleUpdate(member) }>Upadte</button>
</td>
<td>
  {member.membership ? (
    <p className='font-bold text-green-600'>membership added</p>
  ) : (
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleMember(member._id)}>
      Add membership
    </button>
  
  )}
  
</td>
</tr>
))}
          </tbody>
        </table>
        :
<Member updateFormData={updateFormData} updateForm={updateForm}/> 
}

        <div className="pagination mt-4">
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
        </div>
      </center>
    </div>


 );
}


export default Table;



