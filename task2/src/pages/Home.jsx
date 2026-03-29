import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className='home'>
            <h1>this is home page</h1>
            <button onClick={() => {
                navigate('/products')
            }}>Explore products</button>
        </div>
    );
};

export default Home;