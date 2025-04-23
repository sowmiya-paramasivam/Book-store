import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping, FaHeart } from 'react-icons/fa6';
import { WishlistContext } from '../contexts/WishlistProvider'; 
import { CartContext } from '../contexts/CartProvider';

const BookCards = ({ headline, Books }) => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext); 

  return (
    <div className='my-16 px-4 lg:px-24'>
    <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
  
    <div className='mt-12'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 1.2, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 25 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
          1280: { slidesPerView: 5, spaceBetween: 40 },
        }}
        modules={[Pagination]}
        className='mySwiper w-full h-full'
      >
        {Books.map((book) => (
          <SwiperSlide key={book._id}>
            <div className="relative bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
              <Link to={`/books/${book._id}`}>
                <div className="h-64 w-full overflow-hidden">
                  <img
                    src={book.imageURL}
                    alt={book.bookTitle}
                    className="object-cover w-full h-full"
                  />
                </div>
              </Link>
  
              {/* Wishlist */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleWishlist(book);
                }}
                className="absolute top-3 left-3 bg-white p-2 rounded-full shadow-md cursor-pointer hover:scale-105 transition"
              >
                <FaHeart
                  className={`w-5 h-5 ${wishlist.some((item) => item._id === book._id)
                    ? 'text-red-600'
                    : 'text-gray-400'
                    }`}
                />
              </button>
  
              {/* Cart */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(book);
                }}
                className="absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded-full shadow-md cursor-pointer transition"
              >
                <FaCartShopping className="w-5 h-5 text-white" />
              </button>
  
              <div className="p-4 text-center">
                <h3 className="font-bold text-lg truncate">{book.bookTitle}</h3>
                <p className="text-gray-600 text-sm">{book.authorName}</p>
                <p className="text-blue-600 font-semibold text-md mt-1">₹{book.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>  
);
};

export default BookCards;
