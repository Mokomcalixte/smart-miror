import React, { useEffect, useState } from 'react';

function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const currentDate = time.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const currentTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div
      className="header"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1c1c2e',
        padding: '30px 35px',
        borderRadius: '10px',
        color: '#fff',
        marginBottom: '20px',
        flexWrap: 'wrap',
        gap: '10px',
      }}
    >
      {/* Logo & Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            backgroundColor: '#6c63ff',
            padding: '10px',
            borderRadius: '50%',
            fontSize: '20px',
          }}
        >
          🪞
        </div>
        <h1 style={{ fontSize: '24px', margin: 0 }}>SMART MIRROR</h1>
      </div>

      {/* Date, Heure, Infos utilisateur */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <div style={{ fontSize: '14px', color: '#ccc' }}>{currentDate}</div>
          <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{currentTime}</div>
        </div>

        <div style={{ fontSize: '14px', color: '#aaa' }}>Bienvenue, Admin</div>

        {/* Notifications */}
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          🔔
          <span
            style={{
              position: 'absolute',
              top: '-5px',
              right: '-8px',
              backgroundColor: '#f44336',
              color: 'white',
              fontSize: '10px',
              borderRadius: '50%',
              padding: '2px 6px',
            }}
          >
            3
          </span>
        </div>

        {/* Dark mode icon */}
        <span style={{ cursor: 'pointer', fontSize: '18px' }}>🌓</span>

        {/* Bouton Admin */}
        <button
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #fdd835',
            color: '#fdd835',
            padding: '6px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          Admin
        </button>
      </div>
    </div>
  );
}

export default Header;
