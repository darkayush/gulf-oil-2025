import React from 'react'

const HindujaGroup = () => {
  return (
    <div className='marginal text-[#4d4d4f]'>
      <div>
        <h1 className='text-3xl text-center font-semibold text-[#f26824] mb-2'>Hinduja Group</h1>
        <h2 className='text-5xl font-bold text-[#222d65] text-center mb-4'>Heritage with a Horizon</h2>
        <p className='text-xl'>
          Founded over a century ago by Shri. Parmanand Deepchand Hinduja, a visionary entrepreneur from Shikarpur (then undivided India), the Hinduja Group began its journey in merchant banking and trade. Over the years, the Hinduja Group has expanded into one of the largest diversified conglomerates globally. With 110+ years of rich history and a workforce of over 200,000 employees spread across 100 countries, the Group operates in 10 sectors such as Mobility, Banking & Finance, Healthcare, Digital Technology and Renewable Energy. With a family-rooted approach, the group emphasises traditional values while embracing modern management practices. Committed to social responsibility, the Hinduja Group has a strong philanthropic ethos, evident through its charitable contributions.
        </p>
        <h3 className='text-2xl font-bold mt-8 mb-4 text-center'>Diversified Portfolio</h3>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
          <div className='flex flex-col items-center text-center'>
            <img src="./Hinduja Group/Mobility.webp" alt="Mobility" className='rounded-lg mb-2 w-40 object-cover' />
            <span className='font-semibold'>Mobility</span>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img src="./Hinduja Group/Lubricants and Specialty Chemicals.webp" alt="Lubricants and Specialty Chemicals" className='rounded-lg mb-2 w-40 object-cover' />
            <span className='font-semibold'>Lubricants and<br />Specialty Chemicals</span>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img src="./Hinduja Group/Banking and Finance.webp" alt="Banking and Finance" className='rounded-lg mb-2 w-40 object-cover' />
            <span className='font-semibold'>Banking and<br />Finance</span>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img src="./Hinduja Group/Digital-Technology.webp" alt="Digital Technology" className='rounded-lg mb-2 w-40 object-cover' />
            <span className='font-semibold'>Digital Technology</span>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img src="./Hinduja Group/Energy.webp" alt="Energy" className='rounded-lg mb-2 w-40 object-cover' />
            <span className='font-semibold'>Energy</span>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img src="./Hinduja Group/Media-Entertainment.webp" alt="Media, Entertainment and Communications" className='rounded-lg mb-2 w-40 object-cover' />
            <span className='font-semibold'>Media, Entertainment<br />and Communications</span>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img src="./Hinduja Group/Reality.webp" alt="Realty" className='rounded-lg mb-2 w-40 object-cover' />
            <span className='font-semibold'>Realty</span>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img src="./Hinduja Group/Healthcare.webp" alt="Healthcare" className='rounded-lg mb-2 w-40 object-cover' />
            <span className='font-semibold'>Healthcare</span>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img src="./Hinduja Group/Project-Development.webp" alt="Project Development" className='rounded-lg mb-2 w-40 object-cover' />
            <span className='font-semibold'>Project Development</span>
          </div>
          <div className='flex flex-col items-center text-center'>
            <img src="./Hinduja Group/Trading.webp" alt="Trading" className='rounded-lg mb-2 w-40 object-cover' />
            <span className='font-semibold'>Trading</span>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-5'>
          <div className=''>
            <h1 className='text-5xl font-bold text-[#f36f21] border-b-1 border-[#fcc198] pb-2'>110+</h1>
            <h2 className='text-xl'>Years of Excellence</h2>
          </div>
          <div className=''>
            <h1 className='text-5xl font-bold text-[#f36f21] border-b-1 border-[#fcc198] pb-2'>100+</h1>
            <h2 className='text-xl'>Countries Presence</h2>
          </div>
        </div>
        <div className='flex md:flex-row flex-col gap-4 items-center mt-8'>
        <img src="./Hinduja Group/Parmanand.webp" alt="Shri. Parmanand Deepchand Hinduja" className='w-full md:w-1/2 lg:w-1/3 object-cover' />
        <div className='flex flex-col justify-center p-4'>
          <p className='text-3xl font-serif italic text-gray-700 mb-4'>
            <span className='text-5xl text-[#f26824]'>&ldquo;</span>My dharma (duty) is to work, so that I can give.<span className='text-5xl text-[#3e4e92]'>&rdquo;</span>
          </p>
          <h4 className='text-2xl font-bold text-[#222d65]'>Shri. Parmanand Deepchand Hinduja</h4>
          <p className='text-lg'>Founder - Hinduja Group</p>
          <h4 className='text-2xl font-bold text-[#222d65] mt-6 mb-4'>The Guiding Principles of Hinduja Group</h4>
          <ul className='text-xl space-y-2'>
            <li>Work to <span className='font-bold text-[#f26824]'>give</span></li>
            <li>Word is a bond</li>
            <li>Act local, think <span className='font-bold text-[#f26824]'>global</span></li>
            <li>Partnership for growth</li>
            <li>Advance <span className='font-bold text-[#f26824]'>fearlessly</span></li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HindujaGroup