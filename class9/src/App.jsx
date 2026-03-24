import React, { useState } from 'react';
import axios from 'axios';
import Card from './component/Card';

const App = () => {
  const [user, setUser] = useState(null); 
  const getData = async () => {
    const response = await axios.get('https://randomuser.me/api/');
    setUser(response.data.results[0]);
    console.log(response.data.results[0]);
  };

  return (
    <div className='bg-black h-screen p-10 '>
      <div className='border-2 border-white flex flex-col gap-10 items-center'>
        <button
          className='text-white bg-emerald-800 p-2 mt-5'
          onClick={getData}
        >
          Click me
        </button>

        {user && <Card user={user} />} 
      </div>
    </div>
  );
};

export default App;