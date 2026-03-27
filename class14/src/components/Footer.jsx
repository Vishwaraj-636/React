import React, { useState, useEffect, useContext } from 'react';
import { ThemeDataContext } from '../context/ThemeContext';

const Footer = () => {
    const [theme, setTheme] = useContext(ThemeDataContext)

    return (
        <div className='foot'>
            <h1>footer</h1>
            {theme}
            <button onClick={() => {
                if (theme === 'light') {
                    setTheme('dark')
                }
                else {
                    setTheme('light')
                }
            }}>change theme</button>
        </div>
    );
};

export default Footer;