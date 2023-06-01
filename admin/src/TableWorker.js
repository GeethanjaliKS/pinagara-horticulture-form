import React, { useState, useEffect } from 'react';
import { viewworker } from './Routes/routes';

function TableWorker() {
  const [workers, setWorkers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage, setMembersPerPage] = useState(10);

  const fetchData = async () => {
    const response = await viewworker();
    const data = await response.json();
    setWorkers(data.data.workers);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Get current members
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = workers.slice(indexOfFirstMember, indexOfLastMember);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='pt-[10%]'>
      <center>
        <table className="border-collapse border border-slate-400 bg-slate-100">
          <caption className="caption-top font-bold text-lg pt-10 font-serif">WORKERS DETAILS</caption>
          <thead>
            <tr>
              <th className="border border-slate-300">NAME</th>
              <th className="border border-slate-300">CONTACT</th>
              <th className="border border-slate-300">EMAIL-ID </th>
              <th className="border border-slate-300">ADDRESS</th>
              <th className="border border-slate-300">IMAGE</th>
            </tr>
          </thead>
          <tbody>
            {currentMembers.map((workers) => (
              <tr key={workers._id}>
                <td className="border border-slate-300">{workers.name}</td>
                <td className="border border-slate-300">{workers.contact}</td>
                <td className="border border-slate-300">{workers.email_id}</td>
                <td className="border border-slate-300">{workers.address}</td>
                <td className="border border-slate-300 ">
                  <img src={workers.image} alt={workers.name} className="w-20 h-20 object-cover mt-3 mb-3" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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