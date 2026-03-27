import React, { useState, useEffect, useContext } from 'react';
import {UserDataContext} from '../context/UserContext';

const Navbar = () => {
  const data = useContext(UserDataContext)

  return (
    <div className='h-[8%] w-full bg-red-800'>
           <h1>this is</h1> 
    </div>
  );
};

export default Navbar;