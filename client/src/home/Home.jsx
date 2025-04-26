import React from 'react';
import Banner from '../component/Banner';
import BestSellerBook from './BestSellerBook';
import FavouriteBook from './FavouriteBook';
import PromoBanner from './PromoBanner';
import OtherBooks from './OtherBooks';
import Review from './Review';
import Advertisment from './Advertisment';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Trendingbooks from './Trendingbooks';
import Childrenbook from './Childrenbook';
import NewArrivals from './NewArrivals';



const Home = () => {
  return (
   <>
   <Banner/>
   <NewArrivals/>
   <Advertisment/>
   <BestSellerBook/>
   <Banner1/>
   <Trendingbooks/>
   <Banner2/>
   <FavouriteBook/>
   <Childrenbook/>
   <PromoBanner/>
   <OtherBooks/>
   <Review/>
   
   </>
  )
}

export default Home
