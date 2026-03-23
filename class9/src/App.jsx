import React, { useEffect, useState } from 'react'

const App = () => {
  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(0)
  const [num3, setnum3] = useState(0)
 
  useEffect(() => {
    console.log('done')
  },[num1,num2])
  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={() => {
        setnum1(Math.floor(Math.random()*100))
      }}>change number 1</button>
      <br />
      <h1>{num2}</h1>
      <button onClick={() => {
        setnum2(Math.floor(Math.random()*100))
      }}>change number 1</button>
      <br />
      <h1>{num3}</h1>
      <button onClick={() => {
        setnum3(Math.floor(Math.random()*100))
      }}>change number 1</button>
    </div>
  )
}

export default App
