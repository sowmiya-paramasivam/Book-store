import React, { useContext, useState } from "react";
import { WishlistContext } from "../contexts/WishlistProvider";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const [removingId, setRemovingId] = useState(null); 
  const handleRemove = (book) => {
    setRemovingId(book._id);
    setTimeout(() => toggleWishlist(book), 300); 
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">My Wishlist</h2>

        {wishlist.length === 0 ? (
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {wishlist.map((book) => (
              <div
                key={book._id}
                className={`bg-gray-200 p-4 rounded-lg shadow-md transition-all duration-300 ${removingId === book._id ? "opacity-0 scale-90" : "opacity-100 scale-100"
                  }`}
              >
                <img
                  src={book.imageURL}
                  alt={book.title}
                  className="w-full h-40 object-cover rounded-lg"
                />

                <h3 className="mt-3 text-lg font-semibold text-gray-900">{book.bookTitle}</h3>
                <p className="text-gray-600">{book.authorName}</p>
                <p className="text-blue-700 font-semibold mt-2">{book.price}</p>

                <div className="flex justify-between items-center mt-4">
                  <Link
                    to={`/books/${book._id}`}
                    className="px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>

                  {/* Remove from Wishlist with Animation */}
                  <button
                    onClick={() => handleRemove(book)}
                    className="p-2 rounded-full bg-red-100 hover:bg-red-200 transition text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
