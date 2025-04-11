import React from 'react';
import Banner from '../component/Banner';
import BestSellerBook from './BestSellerBook';
import FavouriteBook from './FavouriteBook';
import PromoBanner from './PromoBanner';
import OtherBooks from './OtherBooks';
import Review from './Review';



const Home = () => {
  return (
   <>
   <Banner/>
   <BestSellerBook/>
   <FavouriteBook/>
   <PromoBanner/>
   <OtherBooks/>
   <Review/>
   
   </>
  )
}

export default Home
