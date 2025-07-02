import React from 'react';

function Header() {
  return (
    <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>SMART MIRROR</h1>
      <button>Admin</button>
    </div>
  );
}

export default Header;
