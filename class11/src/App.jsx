import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Courses from './components/pages/Courses';
import Koder from './components/pages/koder';
import Kodex from './components/pages/kodex';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className='h-screen bg-black text-white text-2xl flex flex-col justify-between'>
      <Navbar />
      <div className='p-10 text-center mt-10 text-4xl'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/courses' element={<Courses />} >
            <Route path='/courses/koder' element={<Koder/>}></Route>
            <Route path='/courses/kodex' element={<Kodex/>}></Route>
          </Route>
        </Routes>
    </div>
        <Footer/>
    </div >
  );
};

export default App;