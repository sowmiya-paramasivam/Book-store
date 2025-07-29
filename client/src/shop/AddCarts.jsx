import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartProvider";
import { Link } from "react-router-dom";

const AddCarts = () => {
  const { cart, removeFromCart, increment, decrement } = useContext(CartContext);
  const [removingId, setRemovingId] = useState(null);

  const handleRemove = (bookId) => {
    setRemovingId(bookId);
    setTimeout(() => {
      removeFromCart(bookId);
      setRemovingId(null);
    }, 300);
  };

  return (
    <div className="px-4 py-20 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Your Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">Your cart is empty.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cart.map((book) => (
              <div
                key={book._id}
                className={`bg-white rounded-lg shadow-sm p-3 flex flex-col items-center transition-all duration-300 ${removingId === book._id ? "opacity-0 scale-90" : "opacity-100 scale-100"
                  }`}
              >
                <img
                  src={book.imageURL}
                  alt={book.bookTitle}
                  className="w-32 h-40 object-cover rounded-md mb-3"
                />
                <h3 className="text-md font-semibold text-blue-700 text-center">
                  {book.bookTitle}
                </h3>
                <p className="text-sm text-gray-600">by {book.authorName}</p>

                <p className="text-blue-500 font-semibold mt-1">
                  ₹{book.price} × {book.quantity} = ₹{book.price * book.quantity}
                </p>

                <div className="flex items-center justify-center gap-2 mt-2">
                  <button
                    onClick={() => decrement(book._id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-sm font-medium">{book.quantity}</span>
                  <button
                    onClick={() => increment(book._id)}
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                <div className="flex justify-between gap-2 mt-4">
                  <button
                    onClick={() => handleRemove(book._id)}
                    className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                  <Link to={`/order/${book._id}`}>
                    <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCarts;
