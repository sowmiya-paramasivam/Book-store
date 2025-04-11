import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping, FaHeart } from 'react-icons/fa6';
import { WishlistContext } from '../contexts/WishlistProvider'; 

const BookCards = ({ headline, Books }) => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext); 

  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>

      <div className='mt-12'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
          }}
          modules={[Pagination]}
          className='mySwiper w-full h-full'
        >
          {Books.map((book) => (
            <SwiperSlide key={book._id}>
              <div className="relative">
                {/* Book Image and Details */}
                <Link to={`/books/${book._id}`}>
                  <img src={book.imageURL} alt='' />
                </Link>

                {/* Wishlist Icon - Click won't navigate */}
                <button
                  onClick={(e) => {
                    e.preventDefault(); 
                    toggleWishlist(book);
                  }}
                  className="absolute top-3 left-3 bg-white p-3 rounded-full cursor-pointer transition"
                >
                  <FaHeart
                    className={`w-5 h-5 ${wishlist.some((item) => item._id === book._id)
                        ? 'text-red-600' 
                        : 'text-gray-400'
                      }`}
                  />
                </button>

                {/* Cart Icon - Navigates to Order */}
                <Link to={`/order/${book._id}`}>
                  <div className="absolute top-3 right-3 bg-blue-600 hover:bg-black p-3 rounded-full cursor-pointer transition">
                    <FaCartShopping className="w-5 h-5 text-white" />
                  </div>
                </Link>
              </div>

              {/* Book Details */}
              <div>
                <h3>{book.bookTitle}</h3>
                <p>{book.authorName}</p>
                <p>{book.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
