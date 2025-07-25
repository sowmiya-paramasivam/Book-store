import React, { useState } from 'react';
import BannerCard from '../home/BannerCard';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (input.trim()) {
      navigate(`/search/${input}`);
    }
  };

  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center overflow-hidden'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
   {/* Left side  */}
        <div className='md:w-1/2 space-y-7 h-full transform transition duration-1000 ease-in-out hover:scale-[1.02]'>
          <h1 className='animate-typing text-5xl font-bold leading-snug text-black transition-opacity duration-1000 opacity-0 animate-fade-in-down'>
            Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span>
          </h1>
          <p className='md:w-4/4 text-gray-800 text-lg animate-fade-in-up delay-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aperiam incidunt perferendis quos tempora.
            Odit maxime quod eum atque molestiae provident a. Temporibus, eaque! Officiis quod architecto dolores illo maxime!
          </p>

          <div className="flex items-center animate-fade-in-up delay-500 gap-2">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a book"
              className="py-2 px-4 rounded-l-md border border-blue-700 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-700"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className='bg-blue-700 px-6 py-2 rounded-r-md text-white font-medium hover:bg-black transition-all duration-300'
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className='animate-fade-in-right delay-700 mr-25 md:mr-9'>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;