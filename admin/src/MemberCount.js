import React, { useState, useEffect } from 'react';

function MemberCount() {
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    // Fetch the total count of members from the server
    fetch('your-api-endpoint')
      .then(response => response.json())
      .then(data => setTotalCount(data.totalCount))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="member-count">
      <h3>Total Members</h3>
      <p>{totalCount}</p>
    </div>
  );
}

export default MemberCount;
