import React from 'react';

function Visitors() {
  const visitors = [
    { name: 'John Smith', purpose: 'Campus Tour' },
    { name: 'Mary Johnson', purpose: 'Meeting' },
    { name: 'Robert Brown', purpose: 'Vendor' },
    { name: 'Patricia Lee', purpose: 'Interview' },
  ];

  return (
    <div className="card">
      <h2>Visitors</h2>
      <div className="list">
        {visitors.map((visitor, index) => (
          <div key={index} className="list-item">
            <span>{visitor.name}</span>
            <span>{visitor.purpose}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Visitors;
