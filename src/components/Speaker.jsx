import React from 'react';

const Speaker = ({ speaker }) => {
  return (
    <div className='flex flex-col items-center justify-center m-auto'>
      <div className='h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-40 border-radius overflow-hidden object-cover mb-6 bg-red-500'>
        <img
          src={speaker.avatar || speaker.img}
          alt={speaker.name}
          className=' w-full '
        />
      </div>
      <h1 className='text-yellow-300 uppercase mb-2 text-sm font-bold'>
        {speaker.position || speaker.role}
      </h1>
      <h1 className='text-lg font-semibold'>speaker</h1>
      <h1 className=' '>
        {speaker.name}
      </h1>
      <h1 className='text-yellow-300 uppercase mt-2 mb-2 text-sm font-bold'>
        {speaker.company || 'World.Org'}
      </h1>
    </div>
  );
};

export default Speaker;