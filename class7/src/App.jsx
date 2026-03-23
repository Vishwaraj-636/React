import { useState } from 'react'

const App = () => {
  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [userDesc, setUserDesc] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const localData = JSON.parse(localStorage.getItem('all-users')) || []
  console.log(localData)
  const [allUser, setAllUser] = useState(localData)

  const handleSubmit = (e) => {
    e.preventDefault()
    const oldUsers = [...allUser]

    oldUsers.push({ userName, imageUrl, userRole, userDesc })
    setAllUser(oldUsers)
    localStorage.setItem('all-users',JSON.stringify(oldUsers))
    setUserName('')
    setImageUrl('')
    setUserRole('')
    setUserDesc('')
  }

  const handleDelete = (idx) => {
    const copyUser = [...allUser]
    const conf = confirm('Are you sure you want to delete this user?')
    if (conf) {
      copyUser.splice(idx,1)
    }
    else {
      alert('User deletion cancelled')
    }
    setAllUser(copyUser)
    localStorage.setItem('all-users',JSON.stringify(copyUser))
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
              <div className='lg:w-[20vw] md:w-[30vw] sm:w-[45vw] min-w-72 rounded-xl h-80 p-8 flex text-center items-center flex-col bg-white text-black'>
                <img
                  className='w-24 h-24 rounded-full object-cover'
                  src={e.imageUrl}
                  alt='Profile'
                />
                <h1 className='text-2xl font-semibold'>{e.userName}</h1>
                <h5 className='text-lg mt-2 text-blue-500 font-semibold my-3'>{e.userRole}</h5>
                <p className='text-sm font-medium leading-tight'>{e.userDesc}</p>
                <button
                  onClick={() => handleDelete(i)}
                  className='px-4 mt-4 py-2 rounded bg-red-500 text-white font-bold cursor-pointer transform transition-transform duration-100 active:scale-[0.96]'>
                  Remove
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App