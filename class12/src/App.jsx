import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AllSections from './components/AllSections';
import Footer from './components/Footer';

const App = () => {
  const courseData = {
    courseName: 'Cohort 2.0',
    instrctor: 'sarthak',
    mentor: 'harsh',
    duration: '6 hours'
  }
  return (
    <div>
      <Navbar />
      <AllSections courseData={courseData} />
      <Footer />
    </div>
  );
};

export default App;