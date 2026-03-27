import React, { useState, useEffect, useContext } from 'react';
import { UserDataContext } from '../context/UserContext';

const Sections = () => {
  const data = useContext(UserDataContext)
  console.log(data)
  return (
    <div className='bg-gray-800 h-[84%]'>
          <h1>this is section</h1>
    </div>
  );
};

export default Sections;