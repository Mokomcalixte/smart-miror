import React from 'react';
import Header from './components/Header';
import StudentsToday from './components/StudentsToday';
import Visitors from './components/Visitors';
import Courses from './components/Courses';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="dashboard">
        <StudentsToday />
        <Courses />
        <Visitors />
      </div>
    </div>
  );
}

export default App;
