import React, { useEffect, useState } from 'react'
import BookCards from '../component/BookCards';


const BestSellerBook = () => {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/all-books`).then(res => res.json()).then(data => setBooks(data.slice(0, 8)))
  }, []);
  return (
    <div>
      <BookCards Books={Books} headline="Best Seller Books" />
    </div>
  )
}

export default BestSellerBook
