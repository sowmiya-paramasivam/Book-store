import React, { useEffect, useState } from 'react'
import BookCards from '../component/BookCards';

const OtherBooks = () => {
    const [Books,setBooks] =useState([]);

    useEffect( ()=>{
      fetch(`${import.meta.env.VITE_API_BASE_URL}/all-books`).then(res=>res.json()).then(data=>setBooks(data.slice(5,15)))
    },[]);
  return (
    <div>
    <BookCards Books={Books} headline="Other Books"/>
   </div>
  )
}

export default OtherBooks
