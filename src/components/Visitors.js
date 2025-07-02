import React, { useEffect, useState } from 'react';

function Visitors() {
  const [visitors, setVisitors] = useState([
    { name: 'John Smith', purpose: 'Campus Tour', status: 'In Progress' },
    { name: 'Mary Johnson', purpose: 'Meeting', status: 'Completed' },
    { name: 'Robert Brown', purpose: 'Vendor', status: 'In Progress' },
    { name: 'Patricia Lee', purpose: 'Interview', status: 'Completed' },
  ]);

  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    const now = new Date();
    setLastUpdate(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  }, []);

  // Associe une icône au type de visite
  const getPurposeIcon = (purpose) => {
    switch (purpose) {
      case 'Campus Tour':
        return '🗺️';
      case 'Meeting':
        return '🧑‍💼';
      case 'Vendor':
        return '📦';
      case 'Interview':
        return '🎤';
      default:
        return '👤';
    }
  };

  return (
    <div
      className="card"
      style={{
        backgroundColor: '#2c2c3b',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        color: '#ffffff',
        width: '100%',
        maxWidth: '400px',
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <h2
        style={{
          color: '#81c784',
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        🧑‍💼 Visitors Today
      </h2>

      <p style={{ fontSize: '14px', color: '#bbb', margin: 0 }}>
        {visitors.length} visiteurs enregistrés aujourd’hui
      </p>

      <div className="list" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {visitors.map((visitor, index) => (
          <div
            key={index}
            className="list-item"
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#3a3a4d',
              padding: '10px 15px',
              borderRadius: '8px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontWeight: 'bold', fontSize: '16px' }}>
                {getPurposeIcon(visitor.purpose)} {visitor.name}
              </span>
              <span
                style={{
                  fontSize: '12px',
                  color: visitor.status === 'In Progress' ? '#66bb6a' : '#ffa726',
                }}
              >
                {visitor.status}
              </span>
            </div>
            <span style={{ color: '#b0bec5', fontSize: '14px' }}>{visitor.purpose}</span>
          </div>
        ))}
      </div>

      <p style={{ fontSize: '12px', color: '#aaa', marginTop: '8px' }}>
        🔄 Mis à jour à {lastUpdate}
      </p>

      <a href="#" style={{ fontSize: '12px', color: '#4fc3f7', textDecoration: 'none' }}>
        📋 Voir tous les visiteurs
      </a>
    </div>
  );
}

export default Visitors;
