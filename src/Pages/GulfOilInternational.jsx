import React from 'react'

const GulfOilInternational = () => {
  return (
    <div className='text-white bg-[#0f357f]'>
      <div className='marginal'>
        <h1 className='text-3xl text-center font-semibold text-[#f26824] mb-2'>Gulf Oil International</h1>
        <h2 className='text-5xl font-bold text-[#b9e2f8] text-center mb-4'>Sparking Global Momentum</h2>
        <p className='text-xl font-medium mb-3'>
          Gulf Oil International, part of the Hinduja Group, stands as one of the
          most recognisable lubricant brands worldwide. We power the world’s
          momentum with purpose. With our roots tracing back to the early
          1900s, we have built a reputation for high-quality products, innovation
          and strong partnerships in both automotive and industrial lubricant
          segments.
        </p>
        <p className='text-xl font-medium mb-3'>
          Our wide spectrum of high-performance lubricants, spanning automotive
          and engine oils, gear and marine solutions and hydraulic formulations,
          keeps machines moving, engines running and industries thriving.
        </p>
        <div className='flex justify-center'>
          <img src="./SparkingGlobalMomentum/Infographic.webp" alt="" className='mt-5 w-200' />
        </div>
      </div>
      <div className='mt-5'>
        <img src="./SparkingGlobalMomentum/BG.png" alt="" />
      </div>
      <div className='marginal'>
        <div>
          <div className='text-center p-5'>
            <h2 className='text-2xl font-bold mb-4'>Global Partnerships</h2>
            <p className='text-lg font-medium'>
              With a rich legacy in motorsports and a history of collaborations with numerous
              renowned brands, the company has cultivated an iconic and effortlessly cool image.
              Today, it partners with Atlassian William Racing in Formula 1 and Trackhouse Racing
              in MotoGP. It also owns and partners with leading names such as Reviva Coffee,
              ROFOGO, TAG Heuer, strengthening its presence in both performance and style.
            </p>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4'>
            <img src="./GlobalPartnerships/Williams.webp" alt="Williams Racing" className='w-full h-auto object-contain' />
            <img src="./GlobalPartnerships/Mclaren.webp" alt="McLaren Automotive" className='w-full h-auto object-contain' />
            <img src="./GlobalPartnerships/Rofgo.webp" alt="ROFGO" className='w-full h-auto object-contain' />
            <img src="./GlobalPartnerships/Everrati.webp" alt="Everrati" className='w-full h-auto object-contain' />
            <img src="./GlobalPartnerships/TagHeuer.webp" alt="TAG Heuer" className='w-full h-auto object-contain' />
            <img src="./GlobalPartnerships/Trackhouse.webp" alt="Trackhouse Racing" className='w-full h-auto object-contain' />
          </div>
        </div>
      </div>
      <div className='bg-[url("./GlobalPartnerships/BG2.png")] bg-no-repeat bg-contain md:min-h-230 h-65 flex items- justify-center'>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2'>
            <img src="./GlobalPartnerships/Global-Partnerships.webp" alt="" className='w-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GulfOilInternational