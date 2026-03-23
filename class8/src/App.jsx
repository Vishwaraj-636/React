import React from 'react'
import axios from 'axios'
const App = () => {
  async function getData() {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    console.log(response)
  }
  return (
    <div>
      <button className='m-5 p-3 text-white bg-red-500' onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
