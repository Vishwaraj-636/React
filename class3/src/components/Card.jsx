import React from 'react'

const Card = (props) => {
    return (
        <div className='bg-white border-2 m-2 rounded-xl p-5 w-80 h-100 flex items-center justify-center flex-col'>
            {/* nav */}
            <div className=' w-full h-1/5 position-absolute top-0 left-0 flex items-center justify-start px-5'>
                <img src={props.logo} className='rounded-full border-2 w-11 h-11 border-gray-400 p-1 object-cover' />
            </div>
            {/* info */}
            <div className='w-full h-3/5  '>
                <div className='flex items-center justify-start gap-2'>
                    <h1 className='text-lg font-bold'>{props.user}</h1>
                    <p className='text-sm text-gray-600 font-light'>{props.posted}</p>
                </div>
                <h1 className='text-2xl font-bold py-1'>{props.role}</h1>

                <div className='flex gap-2 relative'>
                    <div class="absolute top-36.5 left-0 w-full h-[1px] bg-black"></div>
                    <p className='bg-gray-300 px-2 py-1 rounded'>{props.type}</p>
                    <p className='bg-gray-300 px-2 py-1 rounded'>{props.level}</p>
                </div>
            </div>
            {/* salary and apply */}
            <div className='w-full h-1/5 flex items-center justify-between p-3 '>
                <div >
                    <h1 className='text-lg font-bold'>{props.salary}</h1>
                    <p className='text-sm text-gray-600 font-light'>{props.location}</p>
                </div>
                <button className='bg-black p-2 text-white rounded cursor-pointer transform transition-transform duration-100
               active:scale-[0.96]'>Apply now</button>
            </div>
        </div>
    )
}

export default Card
