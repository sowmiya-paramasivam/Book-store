import React, { useEffect, useState } from 'react'
import BookCards from '../component/BookCards';

const Trendingbooks = () => {
    const [Books,setBooks] =useState([]);

    useEffect( ()=>{
      fetch(`${import.meta.env.VITE_API_BASE_URL}/all-books`).then(res=>res.json()).then(data=>setBooks(data.slice(11,16)))
    },[]);
  return (
    <div>
    <BookCards Books={Books} headline="Trending Books"/>
   </div>
  )
}

export default Trendingbooks