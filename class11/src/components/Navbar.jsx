import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-cyan-900 text-white text-sm p-5 flex gap-3'>
      <NavLink to='/' className={({ isActive }) => (isActive ? 'text-red-400' : 'text-white')}>
        Home
      </NavLink>
      <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-red-400' : 'text-white')}>
        About
      </NavLink>
      <NavLink to='/courses' className={({ isActive }) => (isActive ? 'text-red-400' : 'text-white')}>
        Courses
      </NavLink>
    </div>
  );
};

export default Navbar;