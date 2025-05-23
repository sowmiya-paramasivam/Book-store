import React from 'react';
import favBookImg from '../assets/favimg.png';
import { Link } from 'react-router-dom';

const FavouriteBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
        <img src={favBookImg} alt='' className='rounded md:w-10/12 ' />
      </div>
      <div className='md:w-1/2 space-y-6'>
        <h3 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite <span className='text-blue-700'>Book Here</span></h3>
        <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Explicabo ad quas laborum sint? Delectus corporis iure laborum debitis deleniti dolores vitae perspiciatis
          alias rem dolor deserunt, veritatis temporibus optio sunt.</p>
        {/* right box */}
        <div className='flex flex-colsm:flex-row justify-between gap-6 mg:w-3/4 my-14 '>
          <div>
            <h3 className='text-3xl font-bold'>800+</h3>
            <p className='text-base'>Book Listing</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>550+</h3>
            <p className='text-base'>Register Users</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>1200+</h3>
            <p className='text-base'>Video Downloader</p>
          </div>
        </div>
        <Link to="/shop" className='mt-11 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
      </div>
    </div>
  )
}

export default FavouriteBook
