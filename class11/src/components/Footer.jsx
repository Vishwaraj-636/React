import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
  return (
      <div className='bg-rose-900 p-3'>
          <button className='bg-white text-sm text-black p-3' onClick={() => {
              navigate('/courses')
            }}>Explore courses</button>
    </div>
  );
};

export default Footer;