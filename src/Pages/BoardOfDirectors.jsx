import React from 'react'

const BoardOfDirectors = () => {
  return (
    <div>
      <div className='marginal text-[#4d4d4f]'>
        <h1 className='text-3xl text-center font-semibold text-[#f26824] mb-2'>Board of Directors</h1>
        <h2 className='text-5xl font-bold text-[#222d65] text-center mb-4'>Guiding the Charge</h2>
        <p className='text-xl text-center'>
          Our Board of Directors provides strategic oversight, ethical leadership and directional
          clarity across all our value-creation priorities. Their collective expertise in governance,
          finance, technology, energy and sustainability enables us to steer through market
          complexities while pursuing responsible and forward-looking growth.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8'>
          <img src="./Board of Directors/1.png" alt="" />
          <img src="./Board of Directors/2.png" alt="" />
          <img src="./Board of Directors/3.png" alt="" />
          <img src="./Board of Directors/4.png" alt="" />
          <img src="./Board of Directors/5.png" alt="" />
          <img src="./Board of Directors/6.png" alt="" />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
          <img src="./Board of Directors/table.png" alt="" />
          <img src="./Board of Directors/legend.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default BoardOfDirectors