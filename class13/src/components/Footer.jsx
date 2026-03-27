import React, { useState, useEffect, useContext } from 'react';
import { UserDataContext } from '../context/UserContext';

const Footer = () => {
  const data= useContext(UserDataContext)
  return (
      <div className='h-[8%] w-screen bg-blue-800'>
    </div>
  );
};

export default Footer;