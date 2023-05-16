
// import React, { useState, useEffect } from "react";

// function Table() {
//   const [data, setData] = useState([{}]);
 
//   async function fetchData() {
//     const response = await fetch("http://localhost:4001/viewmembers");
    
//     const jsonData = await response.json();
//     console.log(jsonData)
//     setData(jsonData);
   
    
//   }
//   useEffect(() => {

//     fetchData();
 
//   }, []);

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Data Table</h1>
//       <table className="table-auto">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">ID</th>
//             <th className="px-4 py-2">Name</th>
//             <th className="px-4 py-2">Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td className="border px-4 py-2">{item.id}</td>
//               <td className="border px-4 py-2">{item.name}</td>
//               <td className="border px-4 py-2">{item.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Table;


import React, { useState, useEffect } from 'react';
import { viewmembers } from './Routes/routes';

function Table() {
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage, setMembersPerPage] = useState(10);

  const fetchData = async () => {
    const response = await viewmembers();
    const data = await response.json();
    setMembers(data.data.members);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Get current members
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='pt-[10%]'>
      <center>
        <table className="border-collapse border border-slate-400 bg-slate-100 ">
          <caption className="caption-top font-bold text-lg pt-10 font-serif">MEMBER DETAILS</caption>
          <thead>
            <tr>
            {/* <th className="border border-slate-300">Member ID</th> */}
              <th className="border border-slate-300">NAME</th>
              <th className="border border-slate-300">ADDRESS</th>
              <th className="border border-slate-300">CONTACT NUMBER</th>
              <th className="border border-slate-300">EMAIL-ID</th>
              <th className="border border-slate-300">IMAGE</th>
            </tr>
          </thead>
          <tbody>
            {currentMembers.map((member) => (
              <tr key={member._id}>
                {/* <td className="border border-slate-300">{member._id}</td> */}
                <td className="border border-slate-300">{member.name}</td>
                <td className="border border-slate-300">{member.address}</td>
                <td className="border border-slate-300">{member.contact}</td>
                <td className="border border-slate-300">{member.email_id}</td>
                <td className="border border-slate-300 ">
                  <img src={member.image} alt={member.name} className="w-20 h-20 object-cover mt-3 mb-3" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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



