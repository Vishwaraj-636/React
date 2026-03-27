import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sections from './components/Sections';

const App = () => {
  return (
    <div className='h-screen overflow-y-auto no-scrollbar '>
      <Navbar />
      <Sections/>
      <Footer/>
    </div>
  );
};

export default App;