import React from 'react'

const Card = (props) => {
    // NEW: Call the function passed from App.jsx, using this card's specific index
    const deleteHandler = () => {
        props.onRemove(props.index)
    }

    return (
        <div className='lg:w-[20vw] md:w-[30vw] sm:w-[45vw] min-w-72 rounded-xl h-80 p-8 flex text-center items-center flex-col bg-white text-black'>
            <img
                className='w-24 h-24 rounded-full object-cover'
                src={props.image}
                alt='Profile'
            />
            <h1 className='text-2xl font-semibold'>{props.name}</h1>
            <h5 className='text-lg mt-2 text-blue-500 font-semibold my-3'>{props.role}</h5>
            <p className='text-sm font-medium leading-tight'>{props.desc}</p>
            <button
                onClick={deleteHandler}
                className='px-4 mt-4 py-2 rounded bg-red-500 text-white font-bold cursor-pointer transform transition-transform duration-100 active:scale-[0.96]'>
                Remove
            </button>
        </div>
    )
}

export default Card