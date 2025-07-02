import React, { useEffect, useState } from 'react';

function StudentsToday() {
  const [count, setCount] = useState(0);
  const [variation, setVariation] = useState(0);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setCount(468);      // valeur simulée
      setVariation(12);   // % de variation simulé
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setLastUpdate(formattedTime);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#2c2c3b',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        color: '#ffffff',
        width: '100%',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <h2
        style={{
          color: '#fdd835',
          fontSize: '18px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        🎓 Students Today
      </h2>

      {loading ? (
        <div style={{ fontSize: '24px' }}>Loading...</div>
      ) : (
        <>
          <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#ffffff' }}>
            {count}
          </div>

          <div
            style={{
              fontSize: '16px',
              color: variation >= 0 ? '#66bb6a' : '#ef5350',
              fontWeight: 500,
            }}
          >
            {variation >= 0 ? '▲' : '▼'} {Math.abs(variation)}% vs yesterday
          </div>

          <div style={{ fontSize: '14px', color: '#bbb' }}>
            Étudiants présents dans le campus
          </div>

          {/* Nouveaux éléments ajoutés 👇 */}
          <div style={{ fontSize: '13px', color: '#4fc3f7' }}>
            📈 Tendance : {count > 450 ? 'Forte affluence' : 'Normale'}
          </div>

          <div style={{ fontSize: '13px', color: '#aaa' }}>
            ⏱️ Durée moyenne de présence : 4h15
          </div>

          <div style={{ fontSize: '13px', color: '#ccc' }}>
            📊 +25 étudiants par rapport à la semaine dernière
          </div>

          <div style={{ fontSize: '13px', color: '#aaa' }}>
            📍 Zone la plus fréquentée : Bibliothèque
          </div>

          <div style={{ fontSize: '12px', color: '#aaa' }}>
            🔄 Mis à jour à {lastUpdate}
          </div>

          <a
            href="#"
            style={{
              fontSize: '12px',
              color: '#4fc3f7',
              textDecoration: 'none',
              marginTop: '4px',
            }}
          >
            📅 Voir historique semaine
          </a>

          <button
            style={{
              fontSize: '12px',
              marginTop: '8px',
              backgroundColor: 'transparent',
              color: '#4fc3f7',
              border: '1px solid #4fc3f7',
              borderRadius: '5px',
              padding: '4px 10px',
              cursor: 'pointer',
              width: 'fit-content',
            }}
          >
            ⬇️ Exporter les données
          </button>

          <div
            style={{
              height: '4px',
              width: '100%',
              backgroundColor: variation >= 0 ? '#66bb6a' : '#ef5350',
              borderRadius: '2px',
              marginTop: '10px',
            }}
          ></div>
        </>
      )}
    </div>
  );
}

export default StudentsToday;
