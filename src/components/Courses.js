import React from 'react';

function Courses() {
  const courses = [
    { time: '8:30', name: 'Linear Algebra' },
    { time: '9:45', name: 'Introduction to Economics' },
    { time: '11:00', name: 'Organic Chemistry' },
    { time: '13:30', name: 'World History' },
  ];

  return (
    <div className="card">
      <h2>Today's Courses</h2>
      <div className="list">
        {courses.map((course, index) => (
          <div key={index} className="list-item">
            <span>{course.time}</span>
            <span>{course.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
