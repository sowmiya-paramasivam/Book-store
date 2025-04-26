import React, { useEffect, useState } from 'react'
import BookCards from '../component/BookCards';

const Childrenbook = () => {
    const [Books,setBooks] =useState([]);

    useEffect( ()=>{
      fetch(`${import.meta.env.VITE_API_BASE_URL}/all-books`).then(res=>res.json()).then(data=>setBooks(data.slice(20,26)))
    },[]);
  return (
    <div>
    <BookCards Books={Books} headline="Children Books"/>
   </div>
  )
}

export default Childrenbook