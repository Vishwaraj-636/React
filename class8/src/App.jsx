import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [allData, setallData] = useState([])
  async function getData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setllData(response.data)
    console.log(response.data)
  }
  useEffect(function() {
    getData()
  },[``])

  return (
    <div className='bg-black overflow-auto h-screen p-10 flex flex-col items-center'>
      <div className='flex flex-wrap gap-5 justify-center'>

        {allData.map(function (e, i) {
          return (
            <div className='lg:w-[20vw] md:w-[30vw] sm:w-[45vw] min-w-72 rounded-xl h-50 p-8 flex text-center items-center flex-col bg-gray-500 text-white '>
              <h1 className='text-2xl font-bold'>{e.name}</h1>
              <h2 className='italic'>@{e.username}</h2>
              <h2>+{e.phone}</h2>
              <a href="#" className='text-blue-400 text-xl '>{e.website}</a>
       
              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
