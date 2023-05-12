import React, { useState, useEffect } from "react";

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:4001/adduser");
      console.log(response)
      const jsonData = await response.json();
      console.log(jsonData)
      setData(jsonData);
     
      
    }
    fetchData();
 
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Data Table</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
