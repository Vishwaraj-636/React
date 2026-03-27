import React, { useState, useEffect , useContext} from 'react';
import { ThemeDataContext } from '../context/ThemeContext';
const Section2 = () => {
    const data = useContext(ThemeDataContext)
    return (
        <div >
            <h1>section2</h1>
            <p>{data}</p>
        </div>
    );
};

export default Section2;