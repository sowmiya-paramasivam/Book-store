import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40 '>
        {/* left side */}
        <div className='md:w-1/2 space-y-7 h-full'>
          <h1 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span></h1>
          <p className=' md:w-4/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aperiam incidunt perferendis quos tempora.
            Odit maxime quod eum atque molestiae
            provident a. Temporibus, eaque! Officiis quod architecto dolores illo maxime!</p>
          <div>
            <input type="search" name='search' id='search' placeholder='search a book'
              className='py-2 px-2 rounded-sm outline-none' />
            <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black
                    transition-all ease-in duration-200'>Search</button>
          </div>
        </div>
        {/* right side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  )
}

export default Banner
