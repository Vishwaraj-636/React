import React from 'react'
import { useState } from 'react'
const App = () => {
  const submitHandler = (e) => {
    e.preventDefault()
  }

  const [name, setname] = useState('')

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          type="text"
          placeholder='Enter Name'
          value={name}
          onChange={(e) => {
            setname(e.target.value)
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
