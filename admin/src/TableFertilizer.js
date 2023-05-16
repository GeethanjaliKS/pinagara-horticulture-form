import React, { useState, useEffect } from 'react';
import { viewfertilizer } from './Routes/routes';

function TableFertilizer() {
  const [fertilizers, setFertilizers] = useState([]);
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

  // Get current members
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = fertilizers.slice(indexOfFirstMember, indexOfLastMember);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='pt-[10%]'>
      <center>
        <table className="border-collapse border border-slate-400 bg-slate-100">
          <caption className="caption-top font-bold text-lg pt-10 font-serif">FERTILIZER DETAILS</caption>
          <thead>
            <tr>
              <th className="border border-slate-300">NAME</th>
              <th className="border border-slate-300">COST</th>
              <th className="border border-slate-300">DESCRIPTION </th>
              <th className="border border-slate-300">IMAGE</th>
            </tr>
          </thead>
          <tbody>
            {currentMembers.map((fertilizers) => (
              <tr key={fertilizers._id}>
                <td className="border border-slate-300">{fertilizers.name}</td>
                <td className="border border-slate-300">{fertilizers.cost}</td>
                <td className="border border-slate-300">{fertilizers.description}</td>
                <td className="border border-slate-300 ">
                  <img src={fertilizers.image} alt={fertilizers.name} className="w-20 h-20 object-cover mt-3 mb-3" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
