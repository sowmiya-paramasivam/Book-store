import React, { useEffect, useState } from 'react'
import BookCards from '../component/BookCards';

const NewArrivals = () => {
    const [Books,setBooks] =useState([]);

    useEffect( ()=>{
      fetch(`${import.meta.env.VITE_API_BASE_URL}/all-books`).then(res=>res.json()).then(data=>setBooks(data.slice(26,31)))
    },[]);
  return (
    <div>
    <BookCards Books={Books} headline="New Arrivals Books"/>
   </div>
  )
}

export default NewArrivals