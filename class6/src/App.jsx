import { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [userDesc, setUserDesc] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [allUser, setAllUser] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const oldUsers = [...allUser]
    oldUsers.push({ userName, imageUrl, userRole, userDesc })
    setAllUser(oldUsers)
    setUserName('')
    setImageUrl('')
    setUserRole('')
    setUserDesc('')
  }

  const handleDelete = (idx) => {
    const updatedUsers = allUser.filter((user, index) => index !== idx)
    setAllUser(updatedUsers)
  }

  return (
    <div className='bg-black h-screen text-white overflow-auto'>
      <div className='p-10' >
        <form className='flex flex-wrap p-5 justify-center' onSubmit={handleSubmit}>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border-2 text-xl font-semibold px-6 py-2 m-4 w-[45%] bg-black text-white rounded"
            type="text"
            placeholder='Enter your name ' />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="border-2 text-xl font-semibold px-6 py-2 m-4 w-[45%] bg-black text-white rounded"
            type="text"
            placeholder='image url' />
          <input
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
            className="border-2 text-xl font-semibold px-6 py-2 m-4 w-[45%] bg-black text-white rounded"
            type="text"
            placeholder='Enter role' />
          <input
            value={userDesc}
            onChange={(e) => setUserDesc(e.target.value)}
            className="border-2 text-xl font-semibold px-6 py-2 m-4 w-[45%] bg-black text-white rounded"
            type="text"
            placeholder='Enter description' />
          <button
            className='px-10 py-2 m-5 bg-emerald-700 text-white rounded cursor-pointer transform transition-transform duration-100 active:scale-[0.96]'>
            Create User
          </button>
        </form>

        <div className='py-10 gap-4 flex flex-wrap justify-center'>
          {allUser.map((e, i) => {
            return (
              <Card
                key={i}
                index={i} 
                onRemove={handleDelete} 
                name={e.userName}
                image={e.imageUrl}
                role={e.userRole}
                desc={e.userDesc}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App