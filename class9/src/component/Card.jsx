import React from 'react';

const Card = ({ user }) => {
  return (
    <div className='w-160 h-80 bg-white rounded-xl mb-5'>

      <div className='m-5'>
        <div className='bg-gray-500  rounded-full flex gap-5 p-2  '>
          <img
            className='rounded-full w-24 h-24'
            src={user.picture.large}
            alt="user"
          />
          <div className='flex flex-col gap-2items-center justify-center'>
            <h1 className='font-bold text-3xl text-white'>
              {user.name.first} {user.name.last}
            </h1>
            <p className='italic text-blue-300'>@{user.login.username}</p>
          </div>
        </div>

        <div className='mt-4 flex flex-col items-start text'>
          <p className=''>
            <b>Email: </b>{user.email}
          </p>
          <p className=''>
            <b>Phone No: </b>+{user.phone}
          </p>
          <p className=''>
            <b>Location: </b>{user.location.city}, {user.location.country}
          </p>
        </div>
      </div>

    </div>
  );
};

export default Card;