import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import { Routes, Route } from 'react-router-dom';
const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
      </Routes>
    </div>
  );
};

export default App;