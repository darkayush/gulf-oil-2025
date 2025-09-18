import React from 'react'

const CFOReview = () => {
  return (
    <div className='marginal text-[#4d4d4f]'>
      <div className=''>
        <h1 className='text-3xl text-center font-semibold text-[#f26824] mb-2'>CFO’s Review of Financial Performance</h1>
        <h2 className='text-5xl font-bold text-[#222d65] text-center mb-4'>The Spark Beneath the Numbers</h2>
        <div className='bg-[#0f357f] flex md:flex-row flex-col items-center justify-center p-5 rounded-lg'>
          <div className='flex flex-col items-center  md:w-1/2'>
            <img src="./CFOs Review of Financial Performance/Manish-Kumar-Gangwal.webp" alt="Manish Kumar Gangwal" className='w-100 mb-4 md:mb-0' />
            <div className='text-white text-center mt-4 md:mt-0'>
              <h3 className='text-2xl font-bold'>Manish Kumar Gangwal</h3>
              <p>Chief Financial Officer & President - <br />Strategic Sourcing, IT & Legal</p>
            </div>
          </div>
          <div className='text-white mt-8 md:mt-0 md:w-1/2'>
            <blockquote className='text-xl italic font-medium relative'>
              <span className='absolute left-0 top-0 text-7xl font-bold text-[#f26824] -translate-y-1/2 -translate-x-1/2'>&ldquo;</span>
              The financial year 2024–25 was a defining year for us, as we achieved all-time high volume, revenue and EBITDA. Revenue surpassed ₹3,500 Crores with volume growth of 7%, exceeding twice the industry average. Our EBITDA for the year rose by 12.1%, with margin strong at 13.2% despite significant USD-INR fluctuations particularly in the second half of the year. This growth, along with 17.6% increase in PAT, was supported by an improved product mix, robust distribution expansion and disciplined cost management. We delivered operational cash flow of ₹423 Crores, pushing cash reserves to ₹1,000+ Crores—a historic milestone for the company. Reflecting this strength, we raised our payout ratio to 65%, declaring a total dividend of ₹48 per equity share for the year.
              <span className='absolute bottom-0 right-0 text-7xl font-bold text-[#f26824] translate-y-1/2 translate-x-1/2'>&rdquo;</span>
            </blockquote>
          </div>
        </div>
        <div className="border border-orange-300 bg-orange-50 p-4 mt-5">
          <p className="text-black font-medium">
            “As we enter FY 2025-26, we remain confident in our path forward, actively seeking opportunities to leverage our strengths while staying dedicated to delivering shareholder value and fostering sustainable growth.”
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-8'>
          <div className="text-center">
            <h3 className="text-xl font-bold">Revenue</h3>
            <img src="/CFOs Review of Financial Performance/Revenue.webp" alt="Revenue" className="w-full h-auto rounded-lg shadow" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">EBITDA</h3>
            <img src="/CFOs Review of Financial Performance/Ebitda.webp" alt="EBITDA" className="w-full h-auto rounded-lg shadow" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">PAT</h3>
            <img src="/CFOs Review of Financial Performance/PAT.webp" alt="PAT" className="w-full h-auto rounded-lg shadow" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">EPS (Basic)</h3>
            <img src="/CFOs Review of Financial Performance/EPS.webp" alt="EPS" className="w-full h-auto rounded-lg shadow" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">Net worth</h3>
            <img src="/CFOs Review of Financial Performance/Net-worth.webp" alt="Net Worth" className="w-full h-auto rounded-lg shadow" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">Cash and Bank Balance</h3>
            <img src="/CFOs Review of Financial Performance/Cash-and-Bank-Balance.webp" alt="Cash and Bank Balance" className="w-full h-auto rounded-lg shadow" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">Dividend Per Share</h3>
            <img src="/CFOs Review of Financial Performance/Dividend-Per-Share.webp" alt="Dividend Per Share" className="w-full h-auto rounded-lg shadow" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">Dividend Payout</h3>
            <img src="/CFOs Review of Financial Performance/Dividend-Payout.webp" alt="Dividend Payout" className="w-full h-auto rounded-lg shadow" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default CFOReview