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
  const { addToCart, cart, increment, decrement } = useContext(CartContext);

  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-3xl md:text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>

      <div className="mt-12">
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
          className="mySwiper w-full h-full"
        >
          {Books.length === 0 ? (
            <div className="text-center text-gray-500 text-lg py-10">
              No books found.
            </div>
          ) : (
            Books.map((book) => (
              <SwiperSlide key={book._id}>
                <div className="relative bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-lg h-full">
                  <Link to={`/books/${book._id}`}>
                    <div className="w-full aspect-[3/4] overflow-hidden">
                      <img
                        src={book.imageURL}
                        alt={book.bookTitle || "Book Cover"}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </Link>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(book);
                    }}
                    className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md cursor-pointer hover:scale-105 transition"
                    title="Add to Wishlist"
                  >
                    <FaHeart
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${wishlist.some((item) => item._id === book._id)
                          ? 'text-red-600'
                          : 'text-gray-400'
                        }`}
                    />
                  </button>

                  {/* Cart Button */}
                  <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
                    {cart.some((item) => item._id === book._id) ? (
                      <div className="flex items-center gap-1">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            decrement(book._id);
                          }}
                          className="bg-red-500 hover:bg-red-700 text-white px-2 rounded"
                          title="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="text-sm font-semibold px-1">
                          {cart.find((item) => item._id === book._id)?.quantity}
                        </span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            increment(book._id);
                          }}
                          className="bg-green-500 hover:bg-green-700 text-white px-2 rounded"
                          title="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(book);
                        }}
                        className="bg-blue-600 hover:bg-black p-2 rounded-full transition"
                        title="Add to Cart"
                      >
                        <FaCartShopping className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </button>
                    )}
                  </div>

                  {/* Book Info */}
                  <div className="p-3 sm:p-4 text-center space-y-1">
                    <h3 className="font-bold text-md md:text-lg truncate">
                      {book.bookTitle}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {book.authorName}
                    </p>
                    <p className="text-blue-600 font-semibold text-sm md:text-md">
                      ₹{book.price}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
