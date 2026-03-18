import React, { useState } from 'react'

const App = () => {
  const [marks, setmarks] = useState([60,55,89,12,29])

  function giveThemGrace() {
    const newMarks =marks.map(function (ele) {
      return ele+5
    })
    console.log(newMarks)
    setmarks(newMarks)
  }

  return (
    <div>
      {marks.map(function (elem, idx) {
        return <h1 key={idx}>Student {idx + 1} = {elem} ({elem>33?"PASS":"FAIL"})</h1>
      })}
      <button onClick={giveThemGrace}>Give grace marks</button>
    </div>
  )
}

export default App
