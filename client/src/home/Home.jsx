import React from 'react';
import Banner from '../component/Banner';
import BestSellerBook from './BestSellerBook';
import FavouriteBook from './FavouriteBook';
import PromoBanner from './PromoBanner';
import OtherBooks from './OtherBooks';
import Review from './Review';
import Advertisment from './Advertisment';
import Banner1 from './Banner1';



const Home = () => {
  return (
   <>
   <Banner/>
   <Advertisment/>
   <BestSellerBook/>
   <Banner1/>
   <FavouriteBook/>
   <PromoBanner/>
   <OtherBooks/>
   <Review/>
   
   </>
  )
}

export default Home
