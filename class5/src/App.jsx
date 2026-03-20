import { useState } from 'react'
const App = () => {
  const [name, setName] = useState('')
  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    const oldUser = [...allUsers]
    oldUser.push(name)
    setAllUsers(oldUser)
  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
        const newUser = [...allUsers]
        newUser.push(name)
        setAllUsers(newUser)
        setName('')
      }}>
        <input
          type="text"
          placeholder='Enter Name'
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <button>Submit</button>
      </form>
      {allUsers.map((e,i) => {
        return <h1 key={i}>{e}</h1>
      })}
    </div>
  )
}

export default App
