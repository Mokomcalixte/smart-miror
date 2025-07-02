import React, { useEffect, useState } from 'react';

function Courses() {
  const [courses, setCourses] = useState([
    { time: '08:30', name: 'Linear Algebra', duration: '1h15' },
    { time: '09:45', name: 'Introduction to Economics', duration: '1h15' },
    { time: '11:00', name: 'Organic Chemistry', duration: '1h30' },
    { time: '13:30', name: 'World History', duration: '1h' },
  ]);

  const [lastUpdate, setLastUpdate] = useState('');
  const [nextCourse, setNextCourse] = useState(null);

  useEffect(() => {
    // Simule une heure de mise à jour
    const now = new Date();
    setLastUpdate(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    // Simule la détection du prochain cours (ici, le 3e)
    setNextCourse(courses[2]);
  }, []);

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
          color: '#4fc3f7',
          fontSize: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        📚 Today's Courses
      </h2>

      <p style={{ fontSize: '14px', color: '#bbb', margin: 0 }}>
        {courses.length} cours prévus aujourd’hui
      </p>

      {nextCourse && (
        <p style={{ fontSize: '14px', color: '#81c784', margin: 0 }}>
          ➡️ Prochain : {nextCourse.name} à {nextCourse.time}
        </p>
      )}

      <div className="list" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {courses.map((course, index) => (
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
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 'bold', color: '#fdd835' }}>{course.time}</span>
              <span style={{ fontSize: '16px' }}>{course.name}</span>
            </div>
            <span style={{ fontSize: '12px', color: '#ccc' }}>
              Durée : {course.duration}
            </span>
          </div>
        ))}
      </div>

      <p style={{ fontSize: '12px', color: '#aaa', marginTop: '8px' }}>
        🔄 Mis à jour à {lastUpdate}
      </p>

      <a href="#" style={{ fontSize: '12px', color: '#4fc3f7', textDecoration: 'none' }}>
        📅 Voir le planning de la semaine
      </a>
    </div>
  );
}

export default Courses;
