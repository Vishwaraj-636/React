import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './component/pages/about';
import Home from './component/pages/home';
import Products from './component/pages/Products';
import Navbar from './component/Navbar';
const App = () => {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;